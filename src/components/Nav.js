import { NavLink } from 'react-router-dom';

const list = [
	{ name: 'ToDoList', path: '/' },
	{ name: 'Weather', path: '/weather' },
	{ name: 'Form', path: '/form' },
];

function Navigation() {
	const menu = list.map((item, id) => (
		<li key={id}>
			<NavLink className="nav__list__link" to={item.path}>
				{item.name}
			</NavLink>
		</li>
	));

	return <ul className="nav__list">{menu}</ul>;
}

export default Navigation;
