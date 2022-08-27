imgId = ""
speakData = ""
var utterThis = ""


setTimeout(function () {
    imgId = "img1";
    takeSnapshot();
    speakData = "taking your selfie in five seconds ";
    utterThis = SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
}, 5000);

setTimeout(function () {
    imgId = "img2";
    takeSnapshot();
    speakData = "taking your selfie in five seconds ";
    utterThis = SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
}, 5000);

setTimeout(function () {
    imgId = "img3";
    takeSnapshot();
    speakData = "taking your selfie in five seconds ";
    utterThis = SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
}, 5000);

function takeSnapshot() {
    console.log(imgId)
    Webcam.snap(function (data_uri) {
        if (imgId = "Img1") {
            document.getElementById("result1").innerHTML = " <img id='selfie1' src='" + data_uri + "'/>"
        }
        if (imgId = "Img2") {
            document.getElementById("result2").innerHTML = " <img id='selfie2' src='" + data_uri + "'/>"
        }
        if (imgId = "Img3") {
            document.getElementById("result3").innerHTML = " <img id='selfie3' src='" + data_uri + "'/>"
        }
    })



}
