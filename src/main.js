import app from '../app/app';
import stringToHTML from './domParcer';

const mainApp = (el) => {
	const html = stringToHTML(app());
	document.getElementById(el).appendChild(html);
};

mainApp('app');
