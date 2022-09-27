import { useState, useReducer } from 'react';
import { initialState, reducer } from './reducer';
import { v4 as uuidv4 } from 'uuid';

function ToDoList() {
	const [input, setInput] = useState('');
	const [state, dispatch] = useReducer(reducer, initialState);
	const [important, setImportant] = useState(false);
	const minDate = new Date().toISOString().slice(0, 10);
	const [date, setDate] = useState(minDate);

	const handleText = (e) => {
		setInput(e.target.value);
	};

	const handleChceckbox = (e) => {
		setImportant(e.target.checked);
	};

	const handleDate = (e) => {
		setDate(e.target.value);
	};

	const handleClick = (e) => {
		e.preventDefault();
		dispatch({
			type: 'ADD',
			payload: {
				id: uuidv4(),
				title: input,
				completed: false,
				important: important,
				date: date,
			},
		});
		setInput('');
		setImportant(false);
		setDate(minDate);
	};

	const handleDelete = (id) => {
		dispatch({ type: 'DELETE', payload: id });
	};

	const tasksList = state.map((task) => (
		<div key={task.id}>
			<li
				className={
					!task.important
						? 'todo__list__task'
						: 'todo__list__task todo__list__task--important'
				}
			>
				{task.title} - {task.date}
			</li>
			<button
				onClick={() => handleDelete(task.id)}
				className="todo__form__button todo__form__button--delete"
			>
				X
			</button>
		</div>
	));

	return (
		<div className="todo">
			<span className="todo__result">Tasks to be done : {state.length}</span>
			<form onSubmit={handleClick} className="todo__form">
				<input
					type="text"
					placeholder="Add task ..."
					className="todo__form__input todo__form__input--text"
					value={input}
					required
					onChange={handleText}
				/>
				<label
					htmlFor="checkbox"
					className="todo__form__label todo__form__label--checkbox"
				>
					Important :
				</label>
				<input
					type="checkbox"
					className="todo__form__input todo__form__input--checkbox"
					checked={important}
					onChange={handleChceckbox}
				/>

				<label
					htmlFor="date"
					className="todo__form__label todo__form__label--date"
				>
					By when to do :
				</label>
				<input
					type="date"
					className="todo__form__input todo__form__input--date"
					value={date}
					min={minDate}
					onChange={handleDate}
				/>
				<button
					type="submit"
					className="todo__form__button todo__form__button--add"
				>
					Add
				</button>
			</form>
			<ul className="todo__list">{tasksList}</ul>
		</div>
	);
}

export default ToDoList;
