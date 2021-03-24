// code taken from here: https://gomakethings.com/converting-a-string-into-markup-with-vanilla-js/#:~:text=when%20it's%20not.-,%2F**%20*%20Convert%20a%20template%20string%20into%20HTML%20DOM%20nodes%20*%20%40,%2Fhtml')%3B%20return%20doc.

const support = (function () {
	if (!window.DOMParser) return false;
	var parser = new DOMParser();
	try {
		parser.parseFromString('x', 'text/html');
	} catch (err) {
		return false;
	}
	return true;
})();

const stringToHTML = function (str) {
	if (support) {
		const parser = new DOMParser();
		const doc = parser.parseFromString(str, 'text/html');
		return doc.body.firstChild;
	}

	const dom = document.createElement('div');
	dom.innerHTML = str;
	return dom;
};

export default stringToHTML;
