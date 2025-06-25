function parseCount(parsedValue) {
	const value = Number.parseFloat(parsedValue);
	if (Number.isNaN(value)) {
		throw new Error('Невалидное значение');
	}
	return value;
}

function validateCount(parsedValue) {
	try {
		return parseCount(parsedValue);
	} catch (error) {
		return error;
	}
}

class Triangle {
	constructor(a, b, c) {
		if (a < b + c && b < a + c && c < a + b) {
			this.a = a;
			this.b = b;
			this.c = c;
		} else {
			throw new Error('Треугольник с такими сторонами не существует');
		}
	}

	get perimeter() {
		return this.a + this.b + this.c;
	}

	get area() {
		let p = this.perimeter / 2;
		let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

		return parseFloat(s.toFixed(3));
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch {
		return {
			get perimeter() {
				return 'Ошибка! Треугольник не существует';
			},
			get area() {
				return 'Ошибка! Треугольник не существует';
			}
		}
	}
}