import { Route, Routes } from 'react-router-dom';

import ToDoList from '../pages/ToDo/ToDoList';
import Weather from '../pages/Weather';
import Form from '../pages/Form';

function Page() {
	return (
		<Routes>
			<Route path="/" element={<ToDoList />} />
			<Route path="/weather" element={<Weather />} />
			<Route path="/Form" element={<Form />} />
		</Routes>
	);
}

export default Page;
