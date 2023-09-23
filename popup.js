import { copyUrlInFormat } from "./helpers/helpers.js";

document.addEventListener("DOMContentLoaded", () => {
	const buttons = document.querySelectorAll("button");

	buttons.forEach((button) => {
		button.addEventListener("click", async () => {
			const format = button.getAttribute("data-format");

			const copied = await copyUrlInFormat(format);

			const buttonContainer = document.querySelector(".button-container");

			// Show the "Copied!" text and trigger the animation
			buttonContainer.classList.add("copied");

			// Hide the "Copied!" text after a delay (e.g., 2 seconds)
			setTimeout(function () {
				buttonContainer.classList.remove("copied");
			}, 2000);
		});
	});
});
