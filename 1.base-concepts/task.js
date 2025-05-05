"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = (b ** 2 - 4 * a * c);
	let formulaFirst;
	let formulaSecond;

	if (d < 0) {
		arr = [];
	} else if (d === 0) {
		formulaFirst = -b / (2 * a);
		arr.push(formulaFirst);
	} else if (d > 0) {
		formulaFirst = (-b + Math.sqrt(d)) / (2 * a);
		formulaSecond = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(formulaFirst, formulaSecond);
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let percentPerMonth = percent / (100 * 12);
	let creditBodyStart = amount - contribution;
	let monthlyPayment = creditBodyStart * (percentPerMonth + (percentPerMonth / (((1 + percentPerMonth) ** countMonths) - 1)));
	let TotalMortgage = monthlyPayment * countMonths;

	return parseFloat(TotalMortgage.toFixed(2));
}