function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		if (arr[i] < min) {
			min = arr[i];
		}
		if (arr[i] > max) {
			max = arr[i];
		}
	}

	let average = sum / arr.length;
	let avg = parseFloat(average.toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let max = Math.max(...arr);
	let min = Math.min(...arr);	

	return max - min;
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr.length === 0) {
			return 0;
		}
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}

	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement += 1;
		}
	}
	
	return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		const resultOfFunc = func(...arrOfArr[i]);

		if (resultOfFunc > maxWorkerResult) {
			maxWorkerResult = resultOfFunc;
		}
	};

	return maxWorkerResult;
}