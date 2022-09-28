import { Link } from 'react-router-dom';

function Admin() {
	return (
		<div className="admin">
			<h1 className="admin__title">Welcome at admin panel</h1>
			<Link to="/" className="admin__link">
				Go back to the TODOLIST
			</Link>
			<Link to="/api" className="admin__link">
				Go back to the API
			</Link>
			<Link to="/form" className="admin__link">
				Go back to the Form
			</Link>
		</div>
	);
}

export default Admin;
