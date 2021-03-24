import Footer from './components/Footer';
import Header from './components/Header';
import Container from './components/Container';

const app = () => {
	let output = `<main>`;
	output += Header();
	output += Container();
	output += Footer();
	output += `</main>`;
	return output;
};

export default app;
