const copyMarkdown = async () => {
	const { url, title } = await currentTab();
	const text = `[${title}](${url})`;
	copyToClipboard(text);
};

const copyHTML = async () => {
	const { url, title } = await currentTab();
	const text = `<a href="${url}">${title}</a>`;
	copyToClipboard(text);
};

const copyPlainText = async () => {
	const { url, title } = await currentTab();
	const text = `${title} - ${url}`;

	copyToClipboard(text);
};

export const currentTab = async () => {
	let queryOptions = { active: true, lastFocusedWindow: true };
	let [tab] = await chrome.tabs.query(queryOptions);

	return {
		title: tab.title,
		url: tab.url,
	};
};

const copyToClipboard = (text) => {
	navigator.clipboard.writeText(text);
};

export const copyUrlInFormat = async (format) => {
	switch (format) {
		case "html":
			await copyHTML();
			break;
		case "markdown":
			await copyMarkdown();
			break;
		case "plain-text":
			await copyPlainText();
			break;
	}
};
