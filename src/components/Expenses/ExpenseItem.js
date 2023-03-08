import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
	/*
	// useState allows us to change variables that have already been rendered
	// must pass the variable that wants to change
	// useState returns 2 variables, the variable to be changed, and a function to change it
	const [title, setTitle] = useState(props.title);

	const clickHandler= () => {
		setTitle('Updated!');
	}
	*/

	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
			{/* <button onClick={clickHandler}>Change Title</button> */}
		</Card>
	);
}

export default ExpenseItem;