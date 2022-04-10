class FrontCamera {
    seeFront(){
        console.log('seeing front...')
    }
}

class BackCamera {
    seeBack() {
        console.log('seeing back')
    }
}

class ManipulateRecording {
    deleteRecording() {
        console.log('recording deleted')
    }
    recordToday() {
        const backCam = new BackCamera();
        const frontCam = new FrontCamera();
        backCam.seeBack();
        frontCam.seeFront();
    }
}

class UploadRecording {
    uploadRec(rec) {
        console.log('uploading rec.')
    }
}


module.exports = {
    FrontCamera, BackCamera, ManipulateRecording, UploadRecording
}