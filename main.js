camera = document.getElementById("camera");

Webcam.set({
width:300,
height:300,
image_format: "jpeg",
jpeg_quality:90,
});

Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(data_uri){
       document.getElementById("result").innerHTML = '<img src="'+data_uri+'" id="image1"></img>'
    });
}

console.log('ml5 version:',ml5.version);

IC = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/quEJaOGol/model.json",modelLoaded)

function modelLoaded(){
    console.log("Hey buddy your FRS is good to go!")
}

function identify(){
    img = document.getElementById("image1");
    IC.classify(img, gotResults)
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }

    else{
        console.log(results);
        document.getElementById("person_name").innerHTML = results[0].label;
        document.getElementById("Accuracy_percent").innerHTML = results[0].confidence.toFixed(2);
    }
}