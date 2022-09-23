import { BrowserRouter } from 'react-router-dom';
import './App.scss';

import Nav from './components/Nav';
import Page from './components/Page';

function App() {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<div className="wrapper">
				<header className="header"></header>
				<nav className="nav">{<Nav />}</nav>
				<main className="main">{<Page />}</main>
				<footer className="footer">Bartek Z</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
