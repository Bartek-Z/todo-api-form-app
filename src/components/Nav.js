import { NavLink } from 'react-router-dom';

const list = [
	{ name: 'ToDoList', path: '/' },
	{ name: 'Api', path: '/api' },
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
