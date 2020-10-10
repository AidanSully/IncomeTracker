import React from 'react';

function IncomeItem({ income, index, removeIncome }) {
	let current = new Date();
	let date = new Date(income.date);
	let day = income.date ? date.getDate() : current.getDate();
	let month = income.date ? date.getMonth() + 1 : current.getMonth() + 1;
	let year = income.date ? date.getFullYear() : current.getFullYear();

	const removeHandle = i => {
		removeIncome(i);
	}

	return (
		<div className="income-item">
			<button className="remove-item" onClick={() => removeHandle(index)}>x</button>
			<div className="desc">{income.desc}</div>
			<div className="price">€{income.price}</div>
			<div className="date">{day + "/" + month + "/" + year}</div>
		</div>
	)
}

export default IncomeItem;
