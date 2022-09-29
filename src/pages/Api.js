import { useState } from 'react';

function Api() {
	const [users, setUsers] = useState([]);

	const API = 'https://randomuser.me/api/?results=3';

	const handleClick = () => {
		fetch(API)
			.then((response) => response.json())
			.then((data) => setUsers((prevState) => prevState.concat(data.results)));
		console.log(users);
	};

	const list = users.map((user) => (
		<div key={user.login.uuid} className="user">
			<img
				src={user.picture.large}
				alt={user.name.last}
				className="user__image"
			/>
			<h3 className="user__name">
				{user.name.title} {user.name.last}
			</h3>
			<p className="user__country">{user.location.country}</p>
			<span className="user__age">Age : {user.dob.age}</span>
		</div>
	));

	return (
		<>
			<button onClick={handleClick} className="addUserButton">
				Add 3 users
			</button>
			<div className="users">{list}</div>
		</>
	);
}

export default Api;
