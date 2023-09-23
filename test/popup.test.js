import fs from "fs";
import path from "path";
import { JSDOM } from "jsdom";
import { jest } from "@jest/globals";

//
import { fileURLToPath } from "url";
import { dirname } from "path";

import { copyUrlInFormat, currentTab } from "../helpers/helpers.js";

const currentModuleURL = import.meta.url;

const currentModulePath = fileURLToPath(currentModuleURL);

const htmlPath = path.resolve(currentModulePath, "../../popup.html"); // Adjust the path as needed
const jsPath = path.resolve(currentModulePath, "../popup.js"); // Adjust the path as needed
const htmlContent = fs.readFileSync(htmlPath, "utf8");

const { window } = new JSDOM(htmlContent, {
	runScripts: "dangerously",
	resources: "usable",
});

const { document } = window;

const writeText = jest.fn();

global.navigator.clipboard = {
	writeText,
};

global.chrome = {
	tabs: {
		query: jest.fn((options) => {
			const tabInfo = [{ title: "Test Title", url: "http://example.com" }];
			return tabInfo;
		}),
	},
};

describe("Popup Functions", () => {
	test("currentTab should fetch the current tab information", async () => {
		const tabInfo = await currentTab();
		expect(tabInfo).toEqual({ title: "Test Title", url: "http://example.com" });
	});

	test("#copyPlainText", async () => {
		await copyUrlInFormat("plain-text");

		expect(writeText).toHaveBeenCalledWith("Test Title - http://example.com");
	});

	test("#copyHTML", async () => {
		await copyUrlInFormat("html");

		expect(writeText).toHaveBeenCalledWith(
			'<a href="http://example.com">Test Title</a>'
		);
	});

	test("#copyMarkdown", async () => {
		await copyUrlInFormat("markdown");

		expect(writeText).toHaveBeenCalledWith("[Test Title](http://example.com)");
	});
});

describe("Popup HTML Structure", () => {
	test("Document structure should match", () => {
		// Test the presence of specific elements
		expect(document.querySelector("h1")).toBeTruthy();
		expect(document.querySelector("p")).toBeTruthy();
		expect(document.querySelector(".options")).toBeTruthy();
		expect(document.querySelectorAll("button")).toHaveLength(3);
		expect(document.querySelector(".button-container")).toBeTruthy();
	});

	test("Content should match", () => {
		// Test the text content of specific elements
		expect(document.querySelector("h1").textContent).toBe("Copy a pretty url");
		expect(document.querySelector("p").textContent).toBe(
			"Copy the URL of the current page in different formats"
		);
		expect(document.querySelector("#copyPlainText").textContent).toBe(
			"Copy Plain Text"
		);
		expect(document.querySelector("#copyMarkdown").textContent).toBe(
			"Copy Markdown"
		);
		expect(document.querySelector("#copyHTML").textContent).toBe("Copy HTML");
		expect(document.querySelector(".copied-text").textContent).toBe(
			"Copied! 🎉"
		);
	});
});
