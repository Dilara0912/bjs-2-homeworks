class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state = 100, type = null) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = state;
		this.type = type;
	}

	fix() {
		this.state = this._state * 1.5;
	}

	set state(number) {
		if (number < 0) {
			this._state = 0;
		} else if (number > 100) {
			this._state = 100;
		} else {
			this._state = number;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "detective";
	}
}

class Library {
	constructor(name = "", books = []) {
		this.name = name;
		this.books = books;
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		const findBook = this.books.find(book => book[type] === value);
		if (findBook) {
			return findBook;
		} else {
			return null;
		}
	}

	giveBookByName(bookName) {
		const giveBook = this.books.find(book => book.name === bookName);
		if (giveBook) {
			this.books.splice(giveBook);
			return giveBook;
		} else {
			return null;
		}
	}
}



function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

/*student1 = new Student("Igor", "man", 18);
student2 = new Student("Olga", "woman", 19);
student3 = new Student("Petr", "man", 22);
*/

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (this.marks) {
		this.marks.push(...marks);
	}
}

Student.prototype.getAverage = function() {
	if (!this.marks || this.marks.length === 0) {
		return 0;
	}
	let sum = this.marks.reduce((accumulator, mark) => accumulator + mark, 0)
	return sum / this.marks.length;
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}

class Student1 {
	constructor(name, allMarks = {}) {
		this.name = name;
		this.allMarks = allMarks;
	}

	addMark(value, subject) {
		if (value >= 2 && value <= 5) {
			if (!this.allMarks[subject]) {
				this.allMarks[subject] = [];
			}
			this.allMarks[subject].push(value);
		}
	}

	getAverageBySubject(subject) {
		if (!this.allMarks[subject]) {
			return 0;
		}

		const summOfMarks = this.allMarks[subject].reduce((acc, item) => acc + item, 0);
		return summOfMarks / this.allMarks[subject].length;
	}

	getAverage() {
		Object.keys
		reduce
	}
}