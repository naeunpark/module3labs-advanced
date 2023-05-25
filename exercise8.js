/*
8. The following DigitalClock class uses an interval to print the time every second once
started, until stopped.
a) Create a new class PrecisionClock that inherits from DigitalClock and adds the
parameter precision – the number of ms between 'ticks'. This precision parameter
should default to 1 second if not supplied.

b) Create a new class AlarmClock that inherits from DigitalClock and adds the
parameter wakeupTime in the format hh:mm. When the clock reaches this time, it
should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should
default to 07:00 if not supplied.
*/

class DigitalClock {
    constructor(prefix) {
        this.prefix = prefix;
    }
    display() {
        let date = new Date();
        //create 3 variables in one go using array destructuring
        let [hours, mins, secs] = [date.getHours(), date.getMinutes(),
            date.getSeconds()
        ];
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;
        console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }
    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.display();
        this.timer = setInterval(() => this.display(), 1000);
    }
}

class PrecisionClock extends DigitalClock {
    constructor(prefix, precision) {
        super(prefix);
        this.precision = precision ? precision : 1000;
    }
}

class AlarmClock extends DigitalClock {
    _counter = 1;
    constructor(prefix, wakeupTime) {
        super(prefix);
        this.wakeupTime = wakeupTime ? wakeupTime : '07:00';
    }
    display() {
        let date = new Date();
        let [hours, mins, secs] = [date.getHours(), date.getMinutes(),
            date.getSeconds()
        ];
        let wateupTimeArray = this.wakeupTime.split(":");
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;

        if (this._counter == 1) {
            if (hours == wateupTimeArray[0] && mins == wateupTimeArray[1]) {
                console.log(`Wake up! It 's ${this.wakeupTime}`);
            }
            this._counter++
        }
        console.log(`${this.prefix} ${hours}:${mins}:${secs}`);

    }
}

const myClock = new DigitalClock('my clock:')

// myClock.start()

const preciseClock = new PrecisionClock('Precise clock:', 3000);
console.log(preciseClock.precision);

const alarmClock = new AlarmClock('Alarm clock:', '15:50');
alarmClock.start();