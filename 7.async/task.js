class AlarmClock {
	constructor(alarmCollection = [], intervalId = null) {
		this.alarmCollection = alarmCollection;
		this.intervalId = intervalId;
	}

	addClock(targetTime, callback) {
		if (!targetTime || typeof callback !== 'function') {
			throw new Error('Отсутствуют обязательные аргументы');
		}

		const hasCallAtSameTime = this.alarmCollection.some(alarm => alarm.time === targetTime);
		if (hasCallAtSameTime) {
			console.warn('Уже присутствует звонок на это же время');			
		}

		const newCall = {
			callback: callback,
			time: targetTime,
			canCall: true
		}

		this.alarmCollection.push(newCall);
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
	}

	getCurrentFormattedTime() {
		const now = new Date();
		const currentTime = now.toTimeString().slice(0, 5);
		return currentTime;
	}

	start() {
		if (this.intervalId) {
			return;
		}

		this.intervalId = setInterval(() => {
			const currentTime = this.getCurrentFormattedTime();

			this.alarmCollection.forEach(alarm => {
				if (alarm.time === currentTime && alarm.canCall === true) {
					alarm.canCall = false;
					alarm.callback();
				}
			});
		}, 1000);

	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach(alarm => alarm.canCall = true);
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = []
	}
}