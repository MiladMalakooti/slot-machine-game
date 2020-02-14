document.getElementById("start").addEventListener("click", overlay);
document.getElementById("resetButton").addEventListener("click", resetGame);
document.getElementById("beginButton").addEventListener("click", (new startGame()).appendEls);

document.getElementById('coolImage').style.zIndex=5;




function overlay(){ 
    let sit=-1;
    document.getElementById('coolImage').style.zIndex=sit;
    let empty= " ";
    document.getElementById("leftBox").innerHTML = empty; 
    document.getElementById("rightBox").innerHTML = empty; 
    document.getElementById("middleBox").innerHTML = empty; 
}


function startGame(){
let reels = ['cherry', 'flower', 'popcorn', 'candle', 'socks',
    'lemon', 'dollar', 'nerd', 'tooth', 'wink'];

 emojiCodes = {   // names and emojies
    cherry: "🍒",
    flower: "💐",
    popcorn: "🍿",
    candle: "🕯️",
    socks: "🧦",
    lemon: "🍋",
    dollar: "💲",
    nerd: "🤓",
    tooth: "🦷",
    wink: "😉"
}
let arr
function rand() {
    return reels[Math.floor(Math.random() * reels.length)];
}

let emojies = document.getElementById("emojies")
let leftBox = document.getElementById("leftBox")
let middleBox = document.getElementById("middleBox")
let rightBox = document.getElementById("rightBox")

//
let timesPlayed = -1;
function appendEls() {

    
    slot1 = rand()
    slot2 = rand()
    slot3 = rand()



    arr = [slot1, slot2, slot3]
    console.log(slot1, slot2, slot3)

    let boxes = [leftBox, middleBox, rightBox]

    for (let i = 0; i < arr.length; i++) {
        boxes[i].innerHTML = "" 
        let div = document.createElement("DIV")
        div.setAttribute("id", arr[i])
        div.setAttribute("class", "emoji")
        div.innerText = emojiCodes[arr[i]]
        boxes[i].appendChild(div)
    }

    win()

    increaseTimesPlayed();
    console.log(timesPlayed);
}


document.getElementById("beginButton").addEventListener("click", appendEls);




appendEls()



function increaseTimesPlayed() {
    timesPlayed++;
    document.getElementById("countPlayed").innerHTML = timesPlayed;
}

console.log(timesPlayed);
}

function resetGame(){
    console.log('resetGame');
    timesPlayed=0;
    document.getElementById("countPlayed").innerHTML = timesPlayed; 
    let empty= " ";
    document.getElementById("leftBox").innerHTML = empty; 
    document.getElementById("rightBox").innerHTML = empty; 
    document.getElementById("middleBox").innerHTML = empty; 


}

function win() {
    // console.log('You won!')
    if (slot1 == slot2 && slot2 == slot3) {
        console.log('Jackpot!')
    
    document.getElementById("winningText").innerHTML = "You Won!";
    var list = document.getElementById("resetButton").addEventListener("click", resetGame);
    list.removeChild(list.childNodes[0]);

    var list1 = document.getElementById("beginButton").addEventListener("click", (new startGame()).appendEls);
    list1.removeChild(list1.childNodes[0]);
    }
     else if (slot1==slot2 || slot2==slot3 || slot1==slot3){
        console.log('Two matches') }
}
