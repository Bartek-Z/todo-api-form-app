import { Route, Routes } from 'react-router-dom';

import ToDoList from '../pages/ToDo/ToDoList';
import Api from '../pages/Api';
import Form from '../pages/Form';
import Admin from '../pages/Admin';

function Page() {
	return (
		<Routes>
			<Route path="/" element={<ToDoList />} />
			<Route path="/api" element={<Api />} />
			<Route path="/form" element={<Form />} />
			<Route path="/form/admin" element={<Admin />} />
		</Routes>
	);
}

export default Page;
