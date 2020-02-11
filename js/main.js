let reels=['cherry', 'flower', 'popcorn', 'candle', 'socks',
'lemon','dollar','nerd','tooth','wink'];

let emojiCodes = {
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

function rand(){
    return reels[Math.floor(Math.random()*reels.length)];
}

let emojies = document.getElementById("emojies")
let leftBox = document.getElementById("leftBox")
let middleBox = document.getElementById("middleBox")
let rightBox = document.getElementById("rightBox")

//
function appendEls(){
    slot1 = rand()
    slot2 = rand()
    slot3 = rand()

    
    let arr = [slot1,slot2,slot3]
    console.log(slot1,slot2,slot3)
     let boxes =[leftBox, middleBox, rightBox]   
        
        for (let i=0; i<arr.length;i++){
            let div = document.createElement("DIV")
            div.setAttribute("id", arr[i])
            div.setAttribute("class", "emoji")
            div.innerText = emojiCodes[arr[i]]
            boxes[i].appendChild(div)
        }

        console.log("right box: ",rightBox);
        // rightBox.appendChild(div);
        
        console.log("left box: ",leftBox);
        // leftBox.appendChild(div);

        
        console.log("middle box: ", middleBox);
        // middleBox.appendChild(div);


        
    // }
   

}
appendEls()




