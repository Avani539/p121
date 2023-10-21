function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = creatCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('MobileNet',modelLoded);

}

function modelLoded() {
    console.log('Model Loaded');
}

function draw() {
    strokeWeight(13);
    stroke(0);
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}
var previous_result = '';


function gotResult(error, gotResult) {
    if (error) {
        console.error(error);
    }
    console.log(results);
    document.getElementById('label').innerHTML = 'Label: ' + results[0].label;

    document.getElementById('confidence')innerHTML = 'Confidence: ' + Math.round(results[0].confidence * 100) + '%' ;

    utterThis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
}