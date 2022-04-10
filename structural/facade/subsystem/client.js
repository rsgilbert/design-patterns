// Client that needs to use subsystem

const { ManipulateRecording, UploadRecording } = require("./camera.js");
const { CameraFacadeSingleton } = require("./facade.js");

// Accessing subsytem directly 
// Notice that we have to directly create and use various subsystem implementation classes
function beginDirectAccess(){
    const man = new ManipulateRecording();
    man.recordToday();
    const upload = new UploadRecording();
    upload.uploadRec();
    man.deleteRecording();
}
beginDirectAccess();


// Using facade
console.log("**** Facade ****")

function beginRecordWithFacade() {
    const recordingFacade = CameraFacadeSingleton.getInstance();
    recordingFacade.recordToday();
    recordingFacade.uploadRecording('sample-rec')
    recordingFacade.cleanUp();
}

beginRecordWithFacade();
