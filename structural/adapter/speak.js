/**
 * 
 * @param {{ loud, whisper, silence }} speaker 
 */
function playMusic(speaker) {
    speaker.whisper('Hmmmm');
    speaker.loud('I love my life...');
    speaker.silence();
}


class LoudSpeaker {
    stopAudio(){ 
        console.log('Audio stopped');
    }
    turnOn(){ 
        console.log('speaker turned on');
    }
    mute() {
        console.log('ZZZZZ');
    }
    playback(content) {
        console.log(content)
    }
}

// Now we adapt the LoudSpeaker class to be usable by playMusic function.
// LoudSpeaker is the adaptee. The speaker parameter in playMusic is the target.
// The adapter implements the interface of the target (speaker).
class LoudSpeakerAdapter {
    // We create the adaptee as a delegate object on the adapter
    loudSpeaker = new LoudSpeaker();
    whisper(content) {
        this.loudSpeaker.turnOn();
        this.loudSpeaker.playback(content);
    }
    loud(content) {
        this.loudSpeaker.turnOn();
        this.loudSpeaker.playback(content);
    }
    silence() {
        this.loudSpeaker.mute();
    }
}

// pass the adapter to the playMusic function. 
playMusic(new LoudSpeakerAdapter());


// Another class to adapt
class HumanSinger {
    name = ''
    constructor(name) {
        this.name = name;
    }
    singInAlto(content) {
        console.log('Alto singing...', content);
    }
    singInBase(content) {
        console.log('Base singing...', content);
    }
    finishSong() {
        console.log('Clap for me!')
    }
    decreaseVolume(){
        console.log('Reduced volume');
    }
    increaseVolume(){
        console.log('Increased volume');
    }
}

// Now lets adapt a human singer to create a class that implements the speaker interface
class HumanSinger_SpeakerAdapter {
    humanSinger = new HumanSinger('name not important');

    loud(content) {
        this.humanSinger.increaseVolume();
        this.humanSinger.singInBase(content);
    }
    whisper(content) {
        this.humanSinger.decreaseVolume();
        this.humanSinger.singInAlto(content);
    }
    silence() {
        this.humanSinger.finishSong();
    }

}

console.log('**** \n\n')
const taylorSwiftSpeakerAdapter = new HumanSinger_SpeakerAdapter();
playMusic(taylorSwiftSpeakerAdapter);