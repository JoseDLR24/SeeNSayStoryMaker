// initilize variables and get the element's children by its id and class

var noun1opt = document.getElementById('noun1opt').children;
var verbopt = document.getElementById('verbopt').children;
var adjectivesopt = document.getElementById('adjectivesopt').children;
var noun2opt = document.getElementById('noun2opt').children;
var settingopt = document.getElementById('settingopt').children;

var storybt = document.getElementsByClassName('storybt');

var playBtn = document.getElementById('play');
var randomBtn = document.getElementById('random')
var resetBtn = document.getElementById('reset')

var story = document.getElementById('story')

// set of arrays for the variables initilized before and settted up as 0 in order to recognize and change the position as a number
var storyOptions = [noun1opt, verbopt, adjectivesopt, noun2opt, settingopt];
var storyOption = [0, 0, 0, 0, 0]
// array to keep the background color while the white selector in the page is runnning
var backgrounds = ["mediumpurple", "lightblue", "lightgreen", "lightsalmon", "lightpink"]

// function to change the background color
function changeBg(element, index){
    for (var i = 0; i < element.length; i++) {
        if(i == storyOption[index]){
            element[i].style.backgroundColor = 'white';
        }else{
            element[i].style.backgroundColor = backgrounds[index];
        }
    }
}

var play = function(){
    // create an empty variable string that will output the story depending on the position using .lenght
    var text = "";
    for(let i = 0; i<storyOptions.length; i++){
        text = text + " " + storyOptions[i][storyOption[i]].children[0].innerHTML
    }

    story.innerHTML = text
}

// searched a random math function that will work depending on the amount of options of each field, since the first and fourth field have 7 options to select
// here the 1st and 4th field are recognized as 0 and 3 in position, so when i is equal to 0 or 3 is gonna do the math operation for 7 options instead of 6
var random = function(){
    for(let i = 1; i<storyOption.length; i++){
        if(i==0 || i==3){
            storyOption[0] = Math.floor(Math.random() * 7)
        }else{
            storyOption[i] = Math.floor(Math.random() * 6)
        }
    }
    
    for(let i = 0; i<storyOptions.length; i++){
        changeBg(storyOptions[i], i)
    }
}

// reset function to set everything like the website was just opened
var reset = function(){
    for(let i = 0; i<storyOptions.length; i++){
        storyOption[i] = 0;
    }
    story.innerHTML = "_____________________________"

    for(let i = 0; i<storyOptions.length; i++){
        changeBg(storyOptions[i], i)
    }
}

// execute the play, random and reset buttons adding an event listener
playBtn.addEventListener("click", play);

randomBtn.addEventListener("click", function(){
            random();
            play();
        }
    )

resetBtn.addEventListener("click", reset)

// execute and show the story using a function that whill recognize the position of the options chosen by the user
// same as before, the position of the 1st and 4th field are recognize as 0 and 3, that way the IF operation will work as if there were 6 options (5 in javascript since it starts to count from 0)
for(let i = 0; i<storyOptions.length; i++){
    storybt[i].addEventListener("click", function(){
        if(i!=0 && i!=3){
            if(storyOption[i]<5){
                storyOption[i]++;
            }else{
                storyOption[i] = 0;
            }
        }else{
            if(storyOption[i]<6){
                storyOption[i]++;
            }else{
                storyOption[i] = 0;
            }
        }
        changeBg(storyOptions[i], i)
            }
        )
}

// set up the white background color that works as a select identificator, in that way the user can know which option is being chosen
for (var i = 0; i < storyOptions.length; i++) {
    storyOptions[i][0].style.backgroundColor = 'white';
}








