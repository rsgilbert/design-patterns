// memento design pattern

class Day {
    #temperature;
    #weather;
    #time;
    printDay() {
        console.log("### DAILY REPORT ###")
        console.log('The temperature is', this.#temperature);
        console.log('The time is', this.#time)
        console.log('The weather is', this.#weather);
        console.log("#### END ####")
    }

    goToAfternoon(){
        this.#time = '2:00pm'
    }
    startRaining() {
        this.#weather = 'rainy';
        this.#temperature = '10 deg Celsius';
    }

    makeMidnight() {
        this.#time = '12:00am';
    }
    showRainbow() {
        this.#temperature = '24 deg Celsius';
        this.#weather = 'humid';
    }

    eruptVolcano(){
        this.#weather = 'Stormy';
        this.#temperature = '60 deg Celsius';
    }
    createMemento() {
        return {
            _weather: this.#weather,
            _temperature: this.#temperature,
            _time: this.#time
        }
    }
    restoreMemento({ _weather, _temperature, _time }) {
        this.#time = _time;
        this.#weather = _weather;
        this.#temperature = _temperature;
    }
}



const day1 = new Day()
day1.eruptVolcano()
day1.printDay()
day1.makeMidnight()
day1.printDay()
const mem1 = day1.createMemento()
day1.showRainbow()
day1.goToAfternoon()
day1.printDay()
day1.restoreMemento(mem1)
day1.printDay()

