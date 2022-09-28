import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form() {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [emailCorrect, setEmailCorrect] = useState(<span></span>);
	const [nameCorrect, setNameCorrect] = useState(<span></span>);
	const [passwordCorrect, setPasswordCorrect] = useState(<span></span>);

	const navigate = useNavigate();

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};

	const handleName = (e) => {
		setName(e.target.value);
	};

	const handlePassword = (e) => {
		setPassword(e.target.value);
	};

	const handleClick = () => {
		if (
			email.indexOf('@') !== -1 &&
			name.length > 10 &&
			name.indexOf(' ') === -1 &&
			password.length >= 8
		) {
			navigate('/form/admin');
		} else {
			handleValidation();
			return;
		}
	};

	const handleValidation = () => {
		if (email.indexOf('@') !== -1) {
			setEmailCorrect(
				<span className="loginPanel__message loginPanel__message--correct">
					Correct
				</span>
			);
		} else {
			setEmailCorrect(
				<span className="loginPanel__message">Email must contain @</span>
			);
		}
		if (name.length > 10 && name.indexOf(' ') === -1) {
			setNameCorrect(
				<span className="loginPanel__message loginPanel__message--correct">
					Correct
				</span>
			);
		} else {
			setNameCorrect(
				<span className="loginPanel__message">
					The name must be longer than 10 characters and must not contain spaces
				</span>
			);
		}
		if (password.length >= 8) {
			setPasswordCorrect(
				<span className="loginPanel__message loginPanel__message--correct">
					Correct
				</span>
			);
		} else {
			setPasswordCorrect(
				<span className="loginPanel__message">
					Password must be at least 8 characters long
				</span>
			);
		}
	};

	return (
		<div className="loginPanel">
			<h1 className="loginPanel__title">Log in to enter the admin panel</h1>
			<label htmlFor="email" className="loginPanel__label">
				Email :
			</label>
			<input
				type="email"
				id="email"
				value={email}
				onChange={handleEmail}
				className="loginPanel__input"
			/>
			{emailCorrect}
			<label htmlFor="name" className="loginPanel__label">
				Name :
			</label>
			<input
				type="text"
				id="name"
				value={name}
				onChange={handleName}
				className="loginPanel__input"
			/>
			{nameCorrect}
			<label htmlFor="password" className="loginPanel__label">
				Password :
			</label>
			<input
				type="password"
				id="password"
				value={password}
				onChange={handlePassword}
				className="loginPanel__input"
			/>
			{passwordCorrect}
			<button onClick={handleClick} className="loginPanel__button">
				confirm
			</button>
		</div>
	);
}

export default Form;
