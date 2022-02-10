function startTesting()
{
    //console.log('A-1');
    navigator.mediaDevices.getUserMedia({audio: true});
    //console.log('A-2');
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/bihYME9qI/model.json', modelReady);
    //console.log('A-3');
}
function modelReady() {
    //console.log('A-2-1');
    classifier.classify(gotResults);
    //console.log('A-2-2');
}

var dog = 0;
var cat = 0;
var lion = 0;
var cow = 0;

function gotResults(error, results)
{
    //console.log('A-2-3');
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+ results[1].label;

        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+(results[1].confidence *100).toFixed(2) + " %";

        document.getElementById("result_count").innerHTML = 'Detected Dog - '+dog+ ' Detected Cat - '+cat+' Detected Lion - '+lion+ ' Detected cow - '+cow;

        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

        document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

        //img1 = document.getElementById('dog');
        //img2 = document.getElementById('cat');
        //img3 = document.getElementById('lion');
        //img4 = document.getElementById('cow');

        img = document.getElementById('animal_image');

        if(results[1].label == "barking")
        {
            img.src = 'https://friendlystock.com/wp-content/uploads/2018/06/2-golden-retriever-dog-barking-cartoon-clipart.jpg';

            dog = dog + 1;
        }
        else if(results[1].label == "meowing")
        {
            img.src = 'https://www.lovethispic.com/uploaded_images/thumbs/120060-Animated-Kitty-Drawing.jpg';

            cat = cat + 1;

        }
        else if(results[1].label == "roaring")
        {
            img.src = 'https://media.istockphoto.com/vectors/lion-roar-vector-id502620939?k=20&m=502620939&s=612x612&w=0&h=z1eWdD2aKSvolvfpQNf75AtbrI0bRqF7UvtDrt3KN2A=';

            lion = lion +1;

        }
        else if(results[1].label == "mooing")
        {
            img.src = 'https://thumbs.dreamstime.com/z/greeting-card-cute-cow-sunglasses-inscription-moo-kids-graphics-t-shirts-vector-136916594.jpg';

            cow = cow+1;
        } else {
            img.src = "listen.gif";
        }
    }
}