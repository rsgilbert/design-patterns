// uses subsystem consiting of objects created by classes in ./camera.js

const { UploadRecording, ManipulateRecording} = require('./camera.js')


// We only ever need one facade so we can implement it as a singleton
class CameraFacadeSingleton {
    static #instance = new CameraFacadeSingleton();
    /** @returns { CameraFacadeSingleton} */
    static getInstance() { return this.#instance; }

    recordToday() {
        const man = new ManipulateRecording();
        man.recordToday();
    }   
    uploadRecording(rec) {
        const upload = new UploadRecording();
        upload.uploadRec(rec)
    }
    cleanUp() {
        const man = new ManipulateRecording();
        man.deleteRecording();
    }
}


module.exports = {
    CameraFacadeSingleton
}

