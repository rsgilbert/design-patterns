// The update protocol can be either:
// 1 - Push model: the subject sends the observer
// detailed information about the change
// 2 - Pull model: the subject sends  nothing but the most
// minimal notification and observers ask for details explicitly
// The default implementation we have in _observer.js uses the pull model 

const { Observer, Subject } = require("./_observer.js");


// Push model
class PushSubject extends Subject{
    /**
     * The notify method asks every observer that has subscribed to the subject
     * to redraw itself.
     * It is called when a change happens to the subject.
     * It provides the observer with details of the change
     * @param { Record<any, any> } change 
     */
    notify(change) {
        for (let observer of this.observers) {
            observer.update(change);
        }
    }

}

// The observer / subscriber / view
class PushObserver extends Observer{
    /*
     * @description The update method is called by the subject
     * when a change happens on the subject. The update method asks the
     * observer to redraw itself.
     * @param { Record<any, any>} change - the change that occurred on the subject. 
     */
    update(change) {
        throw Error("Not implemented");
    }
}

/**
 * Weather subject that uses the push model
 * to send notifications to observers.
 * It provides the current weather to the observers during the notification
 */
class WeatherSubject extends PushSubject {
    #weather = {
        condition: 'sunny',
        temp: '27C'
    }
    set weather(w) {
        this.#weather = w 
        this.notify(this.#weather)
    }
}

class WeatherObserver extends PushObserver {
    /** @override */
    update(newWeather) {
        console.log('New weather is', newWeather)
    }
}

const weatherSub1 = new WeatherSubject()

const weatherObs1 = new WeatherObserver(weatherSub1)

weatherSub1.weather = { 
    'condition': 'raining',
    temp: '15C' 
}
weatherSub1.weather = { 
    condition: 'cloudy'
}
