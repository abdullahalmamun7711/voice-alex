var recognition = new webkitSpeechRecognition();
// console.log(recognition);

recognition.onresult = function (event) {
    var text = event.results[0][0].transcript;
    // console.log(text);

    var output = document.getElementById('output').innerHTML = text;

    read(text);

}

function read(text) {
    var speech = new SpeechSynthesisUtterance();
    // console.log(speech);

    speech.text = text;
    if (text == 'Assalamu Alaikum') {
        speech.text = "Waalaikumussalam";

    }
    else if (text == 'what is your name') {
        speech.text = "My name is Alax, I am your Assistant";
    }
    else if (text == 'ok bye') {
        speech.text = "Assalamu Alaikum";
    }
    else if (text == 'ok how are you') {
        speech.text = "I am fine";
    }
    else if (text == 'Riyaz') {
        speech.text = "He is your brother";
    }
    else if (text == 'Shanto') {
        speech.text = "He is your brother";
    }
    else if (text == 'Saurabh') {
        speech.text = "He is your brother ";
    }
    else if (text == 'you are so funny') {
        speech.text = "I think so";
    }
    else if (text == 'kiss me') {
        speech.text = "I can do lot of things";
    }
    else if (text == 'do you believe in aliens') {
        speech.text = "I Want to Believe";
    }
    else if (text == 'I am drunk') {
        speech.text = "Drink Some Water";
    }
    else if (text == 'you are so funny') {
        speech.text = "I think so";
    }

    else if (text == 'do you know Shanto') {
        speech.text = "Yes his another name is Hasibul He is Your Brother And One of The best lusu Person in the world"
    }
    else if (text == 'do you know Mamun') {
        speech.text = "Yes, I know  He is my Creator"
    }
    else if (text == 'hasiba') {
        speech.text = "She is your cute sister"
    }
    else if (text == 'what is the name of our country') {
        speech.text = "Bangladesh, A beautiful country "
    }

    else if (text == 'who is the prime minister of Bangladesh') {
        speech.text = "Sheikh Hasina"
    }
    else if (text == 'who is the President of Bangladesh') {
        speech.text = "Abdul Hamid Khan"
    }
    else if (text == 'who is Shakib Al Hasan') {
        speech.text = "Bangladeshi all rounder"
    }
    else if (text == 'your favourite player') {
        speech.text = "His name is Mashrafe Bin Mortaza"
    }
    else if (text == 'your favourite colour') {
        speech.text = "Blue and Black"
    }
    else if (text == 'Nisrat') {
        speech.text = "she is the favourite person in my life"
    }
    else if (text == 'Kotha') {
        speech.text = "A nice girl ever i see"
    }
    else if (text == 'how old are you') {
        speech.text = "Sorry I Have No Age"
    }
    else if (text == 'I love you') {
        speech.text = "I Love You Too"
    }
    else if (text == 'I am naked') {
        speech.text = "Get out in Front of Me"
    }
    else if (text == 'give me a hug') {
        speech.text = "Nono No No"
    }
    else if (text == 'what is your shoe size') {
        speech.text = "Shoes are not required for my line of work"
    }
    else if (text == 'tell me what you want') {
        speech.text = "Nisrat Jahan Kotha"
    }
    else if (text == 'what you want') {
        speech.text = "Chicken Birani"
    }
    else if (text == 'do you have a penis') {
        speech.text = "Hup"
    }
    // else if (text == 'what is your favourite player') {
    //     speech.text = "His name is Mashrafe Bin Mortaza"
    // }




    // else {
    //     speech.text = "Please Try Again"
    // }
    document.getElementById('res').innerHTML = speech.text;
    window.speechSynthesis.speak(speech);
}