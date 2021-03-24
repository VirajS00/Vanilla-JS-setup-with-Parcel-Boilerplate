import '../app/scss/app.scss';
import app from '../app/app';
import stringToHTML from './domParcer';

const mainApp = (el) => {
	const html = stringToHTML(app());
	document.getElementById(el).appendChild(html);
	console.log(html);
};

mainApp('app');
