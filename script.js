const songs = [
    //Playboi Carti
    {
        name: "Location",
        album: "Playboi Carti",
        trackNum: 1,
        trackLen: 168,
        features: ["No features"]
    }, 
    {
        name: "Magnolia",
        album: "Playboi Carti",
        trackNum: 2,
        trackLen: 181,
        features: ["No features"]
    },
    {
        name: "Lookin",
        album: "Playboi Carti",
        trackNum: 3,
        trackLen: 183,
        features: ["Lil Uzi Vert"]
    },
    {
        name: "wokeuplikethis*",
        album: "Playboi Carti",
        trackNum: 4,
        trackLen: 235,
        features: ["Lil Uzi Vert"]
    },
    {
        name: "Let It Go",
        album: "Playboi Carti",
        trackNum: 5,
        trackLen: 150,
        features: ["No features"]
    },
    {
        name: "Half & Half",
        album: "Playboi Carti",
        trackNum: 6,
        trackLen: 227,
        features: ["No features"]
    },
    {
        name: "New Choppa",
        album: "Playboi Carti",
        trackNum: 7,
        trackLen: 126,
        features: ["A$AP Rocky"]
    },
    {
        name: "Other Shit",
        album: "Playboi Carti",
        trackNum: 8,
        trackLen: 168,
        features: ["No features"]
    },
    {
        name: "NO. 9",
        album: "Playboi Carti",
        trackNum: 9,
        trackLen: 199,
        features: ["No features"]
    },
    {
        name: "dothatshit!",
        album: "Playboi Carti",
        trackNum: 10,
        trackLen: 184,
        features: ["No features"]
    },
    {
        name: "Lame Niggaz",
        album: "Playboi Carti",
        trackNum: 11,
        trackLen: 173,
        features: ["No features"]
    },
    {
        name: "Yah Mean",
        album: "Playboi Carti",
        trackNum: 12,
        trackLen: 165,
        features: ["No features"]
    },
    {
        name: "Flex",
        album: "Playboi Carti",
        trackNum: 13,
        trackLen: 240,
        features: ["Leven Kali"]
    },
    {
        name: "Kelly K",
        album: "Playboi Carti",
        trackNum: 14,
        trackLen: 271,
        features: ["No features"]
    },
    {
        name: "Had 2",
        album: "Playboi Carti",
        trackNum: 15,
        trackLen: 139,
        features: ["No features"]
    },
    //Die Lit
    {
        name: "Long Time - Intro",
        album: "Die Lit",
        trackNum: 1,
        trackLen: 211,
        features: ["No features"]
    },
    {
        name: "R.I.P",
        album: "Die Lit",
        trackNum: 2,
        trackLen: 192,
        features: ["No features"]
    },
    {
        name: "Lean 4 Real",
        album: "Die Lit",
        trackNum: 3,
        trackLen: 177,
        features: ["Skepta"]
    },
    {
        name: "Old Money",
        album: "Die Lit",
        trackNum: 4,
        trackLen: 135,
        features: ["No features"]
    },
    {
        name: "Love Hurts",
        album: "Die Lit",
        trackNum: 5,
        trackLen: 180,
        features: ["Travis Scott"]
    },
    {
        name: "Shoota",
        album: "Die Lit",
        trackNum: 6,
        trackLen: 153,
        features: ["Lil Uzi Vert"]
    },
    {
        name: "Right Now",
        album: "Die Lit",
        trackNum: 7,
        trackLen: 207,
        features: ["Pi'erre Bourne"]
    },
    {
        name: "Poke It Out",
        album: "Die Lit",
        trackNum: 8,
        trackLen: 269,
        features: ["Nicki Minaj"]
    },
    {
        name: "Home (KOD)",
        album: "Die Lit",
        trackNum: 9,
        trackLen: 162,
        features: ["No features"]
    },
    {
        name: "Fell In Luv",
        album: "Die Lit",
        trackNum: 10,
        trackLen: 206,
        features: ["Bryson Tiller"]
    },
    {
        name: "Foreign",
        album: "Die Lit",
        trackNum: 11,
        trackLen: 142,
        features: ["No features"]
    },
    {
        name: "Pull Up",
        album: "Die Lit",
        trackNum: 12,
        trackLen: 216,
        features: ["No features"]
    },
    {
        name: "Mileage",
        album: "Die Lit",
        trackNum: 13,
        trackLen: 149,
        features: ["Chief Keef"]
    },
    {
        name: "FlatBed Freestyle",
        album: "Die Lit",
        trackNum: 14,
        trackLen: 193,
        features: ["No features"]
    },
    {
        name: "No Time",
        album: "Die Lit",
        trackNum: 15,
        trackLen: 219,
        features: ["Gunna"]
    },
    {
        name: "Middle Of The Summer",
        album: "Die Lit",
        trackNum: 16,
        trackLen: 137,
        features: ["Red Coldhearted"]
    },
    {
        name: "Choppa Won't Miss",
        album: "Die Lit",
        trackNum: 17,
        trackLen: 217,
        features: ["Young Thug"]
    },
    {
        name: "R.I.P. Fredo - Notice Me",
        album: "Die Lit",
        trackNum: 18,
        trackLen: 161,
        features: ["Young Nudy"]
    },
    {
        name: "Top",
        album: "Die Lit",
        trackNum: 19,
        trackLen: 133,
        features: ["Pi'erre Bourne"]
    },
    // WHOLE LOTTA RED
    {
        name: "Rockstar Made",
        album: "Whole Lotta Red",
        trackNum: 1,
        trackLen: 193,
        features: ["No features"]
    },
    {
        name: "Go2DaMoon",
        album: "Whole Lotta Red",
        trackNum: 2,
        trackLen: 119,
        features: ["Kanye West"]
    },
    {
        name: "Stop Breathing",
        album: "Whole Lotta Red",
        trackNum: 3,
        trackLen: 218,
        features: ["No features"]
    },
    {
        name: "Beno!",
        album: "Whole Lotta Red",
        trackNum: 4,
        trackLen: 153,
        features: ["No features"]
    },
    {
        name: "JumpOutTheHouse",
        album: "Whole Lotta Red",
        trackNum: 5,
        trackLen: 93,
        features: ["No features"]
    },
    {
        name: "M3tamorphosis",
        album: "Whole Lotta Red",
        trackNum: 6,
        trackLen: 312,
        features: ["Kid Cudi"]
    },
    {
        name: "Slay3r",
        album: "Whole Lotta Red",
        trackNum: 7,
        trackLen: 164,
        features: ["No features"]
    },
    {
        name: "No Sl33p",
        album: "Whole Lotta Red",
        trackNum: 8,
        trackLen: 88,
        features: ["No features"]
    },
    {
        name: "New Tank",
        album: "Whole Lotta Red",
        trackNum: 9,
        trackLen: 89,
        features: ["No features"]
    },
    {
        name: "Teen X",
        album: "Whole Lotta Red",
        trackNum: 10,
        trackLen: 205,
        features: ["Future"]
    },
    {
        name: "Meh",
        album: "Whole Lotta Red",
        trackNum: 11,
        trackLen: 118,
        features: ["No features"]
    },
    {
        name: "Vamp Anthem",
        album: "Whole Lotta Red",
        trackNum: 12,
        trackLen: 124,
        features: ["No features"]
    },
    {
        name: "New N3on",
        album: "Whole Lotta Red",
        trackNum: 13,
        trackLen: 116,
        features: ["No features"]
    },
    {
        name: "Control",
        album: "Whole Lotta Red",
        trackNum: 14,
        trackLen: 197,
        features: ["No features"]
    },
    {
        name: "Punk Monk",
        album: "Whole Lotta Red",
        trackNum: 15,
        trackLen: 229,
        features: ["No features"]
    },
    {
        name: "On That Time",
        album: "Whole Lotta Red",
        trackNum: 16,
        trackLen: 102,
        features: ["No features"]
    },
    {
        name: "King Vamp",
        album: "Whole Lotta Red",
        trackNum: 17,
        trackLen: 186,
        features: ["No features"]
    },
    {
        name: "Place",
        album: "Whole Lotta Red",
        trackNum: 18,
        trackLen: 117,
        features: ["No features"]
    },
    {
        name: "Sky",
        album: "Whole Lotta Red",
        trackNum: 19,
        trackLen: 193,
        features: ["No features"]
    },
    {
        name: "Over",
        album: "Whole Lotta Red",
        trackNum: 20,
        trackLen: 166,
        features: ["No features"]
    },
    {
        name: "ILoveUIHateU",
        album: "Whole Lotta Red",
        trackNum: 21,
        trackLen: 135,
        features: ["No features"]
    },
    {
        name: "Die4Guy",
        album: "Whole Lotta Red",
        trackNum: 22,
        trackLen: 131,
        features: ["No features"]
    },
    {
        name: "Not Playing",
        album: "Whole Lotta Red",
        trackNum: 23,
        trackLen: 130,
        features: ["No features"]
    },
    {
        name: "F33l Lik3 Dyin",
        album: "Whole Lotta Red",
        trackNum: 24,
        trackLen: 204,
        features: ["No features"]
    },

]

const startButton = document.getElementById("start-btn");
const startNewButton = document.getElementById("start-new-btn");
const gameArea = document.getElementById("game-area");
const textInput = document.getElementById("text-input");
const guessTable = document.getElementById("guess-table");
const showResultsButton = document.getElementById("show-results-btn");

const winModal = document.getElementById("win-modal");
const winMsg = document.getElementById("win-msg");
const closeBtn = document.getElementById("close-btn");
const shareResultsBtn = document.getElementById("share-results-btn");

const date = new Date();
const minutes = date.getMinutes();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
//const formattedDate = `${month}${day}${year}${minutes}`;
const formattedDate = `${month}${day}${year}`;

let guessData = JSON.parse(localStorage.getItem("data")) || [];
let gameEnded = JSON.parse(localStorage.getItem("gameEnded")) || "false";
let storedDate = JSON.parse(localStorage.getItem("storedDate")) || 0; 
let mysterySong = {};
let numGuesses = 0;
//startNewButton.classList.toggle('hidden');


const fancyTimeFormat = (trackLen) => {
    const mins = ~~((trackLen % 3600) / 60);
    const secs = ~~trackLen % 60;
    return mins + ":" + (secs < 10 ? "0" : "") + "" + secs;
}

const clearLocalStorageForNewDay = () => {
    guessData = [];
    storedDate = 0;
    localStorage.removeItem("data");
    localStorage.removeItem("gameEnded");
    localStorage.removeItem("storedDate");
    gameEnded = "false";
    localStorage.setItem("gameEnded", JSON.stringify(gameEnded));
}

const startGame = () => {
    console.log(storedDate);
    console.log(formattedDate);
    if(storedDate !== formattedDate) {
        clearLocalStorageForNewDay();
    }

    startButton.classList.toggle("hidden");
    startNewButton.classList.toggle("hidden");
    gameArea.classList.toggle("hidden");

    mysterySong = generateRandomSong();
    console.log(mysterySong);

    guessData.forEach(guessedPerson => {
        addRow(guessedPerson);
    })
    textInput.setAttribute('placeholder', numGuesses === 0 ? 'Start by entering any Playboi Carti song' : `${5 - numGuesses} more guesses`);
    console.log(gameEnded);
    if (gameEnded !== "false") endGame(gameEnded);
}

const endGame = (winString) => {
    showResultsButton.classList.toggle("hidden");
    textInput.disabled = true;
    gameEnded = winString;
    localStorage.setItem("gameEnded", JSON.stringify(gameEnded));
    //Modal element
    displayModal();
    const message = winString = "won" ? "Congrats!" : "Fucking Idiot...";
    winMsg.innerText = message;
    console.log(message);
}

const displayModal = () => {
    winModal.classList.remove("hidden");
    winModal.style.display = "block";
}

const checkGuess = (input) => {
    const guessedSong = songs.find(guess => guess.name.trim().toLowerCase() === input);
    addRow(guessedSong);
    guessData.push(guessedSong);
    localStorage.setItem("data", JSON.stringify(guessData));
    localStorage.setItem("storedDate", JSON.stringify(formattedDate));
    //console.log(JSON.stringify(guessData));
    if (guessedSong === mysterySong) endGame("won");
    updateInput();
}

const updateInput = () => {
    // checks if the number of allowed guesses has been exceeded, and if so, end the game.
    // updates the text input placeholder to match situation
    if (numGuesses >= 5 && gameEnded != "won") {
        textInput.setAttribute('placeholder', `No more guesses allowed`);
        endGame("lost");
    } else {
        textInput.setAttribute('placeholder', `${5 - numGuesses} more guesses`);
    }
    
}

const colorForAlbum = (albumName) => {
    
}

const colorForTrack = (num, range) => {

}

const addRow = (guess) => {
    numGuesses++;
    // new row element added to the table
    const newGuessRow = guessTable.insertRow(-1);

    let arrow = "";
    let color = guess.name === mysterySong.name ? 'green' : 'red';
    addCell(newGuessRow, guess.name, color, arrow);

    switch (guess.album) {
        case "Playboi Carti":
            if (mysterySong.album === "Playboi Carti") color = "green";
            if (mysterySong.album === "Die Lit") color = "#c9db18", arrow = "↑";
            if (mysterySong.album === "Whole Lotta Red") color = "red", arrow = "↑";
            break;
        case "Die Lit":
            if (mysterySong.album === "Playboi Carti")color = "#c9db18", arrow = "↓"; ;
            if (mysterySong.album === "Die Lit") color = "green";
            if (mysterySong.album === "Whole Lotta Red")color = "#c9db18", arrow = "↑";;
            break;
        case "Whole Lotta Red":
            if (mysterySong.album === "Playboi Carti") color = "red", arrow = "↓";
            if (mysterySong.album === "Die Lit")color = "#c9db18", arrow = "↓";;
            if (mysterySong.album === "Whole Lotta Red") color = "green";
            break;
    }
    addCell(newGuessRow, guess.album, color, arrow);

    arrow = "";
    if (guess.trackNum === mysterySong.trackNum) color = "green";
    else if (guess.trackNum > mysterySong.trackNum - 2 && guess.trackNum < mysterySong.trackNum + 2) color = "#c9db18";
    else color = "red";
    if (guess.trackNum < mysterySong.trackNum) arrow = "↑";
    else arrow = "↓";
    addCell(newGuessRow, guess.trackNum, color, arrow);

    arrow = "";
    if (guess.trackLen === mysterySong.trackLen) color = "green";
    else if (guess.trackLen > mysterySong.trackLen - 30 && guess.trackLen < mysterySong.trackLen + 3) color = "#c9db18";
    else color = "red";
    if (guess.trackLen < mysterySong.trackLen) arrow = "↑";
    else arrow = "↓";
    addCell(newGuessRow, fancyTimeFormat(guess.trackLen), color, arrow);
    
    arrow = "";
    if (guess.features.sort().toString() === mysterySong.features.sort().toString()) color = "green";
    else if (mysterySong.features.some(feature => guess.features.includes(feature)))color = "#c9db18";
    else color = "red";
    addCell(newGuessRow, guess.features, color, arrow);
}



const addCell = (row, text, color, arrow) => {
    //create a new cell and set the values to the correct text/color, then append it to the row
    const newCell = document.createElement('td');
    newCell.innerText = `${text} ${arrow}`;
    newCell.style.backgroundColor = color;
    console.log(text);
    row.appendChild(newCell);
}


const seedRandom = (seed) => {
    let rand = Math.sin(seed) * 10000;
    return rand - Math.floor(rand);
}

const generateRandomSong = () => {
    const randomIndex = Math.floor(songs.length * seedRandom(formattedDate));
    return songs[randomIndex];
}

showResultsButton.addEventListener("click", displayModal);

closeBtn.addEventListener("click", () => {
    winModal.style.display = "none";
});

startButton.addEventListener("click", startGame);

startNewButton.addEventListener("click", () => {
    clearLocalStorageForNewDay();
    startGame();
})

textInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const userInput = textInput.value.trim().toLowerCase();
        if (!songs.some(guess => guess.name.trim().toLowerCase() === userInput)) {
            alert("Please input a valid song");
        } else {
            checkGuess(userInput);
            // set the text input to a black box
            textInput.value = "";
        }
    }
})

const generateResultsString = () => {
    let resultsString = `PLAYBOI CARTLE ${month}/${day}/${year}: ${numGuesses}/5\n\n`;
    guessData.forEach(guess => {
        resultsString += guess.name === mysterySong.name ? '🟩 ' : '🟥 ';
        resultsString += guess.album === mysterySong.album ? '🟩 ' : '🟥 ';
        resultsString += guess.trackNum === mysterySong.trackNum ? '🟩 ' : '🟥 ';
        resultsString += guess.trackLen === mysterySong.trackLen ? '🟩 ' : '🟥 ';
        resultsString += guess.features === mysterySong.features ? '🟩 ' : '🟥 ';
        resultsString += '\n';
    });
    return resultsString;
}

shareResultsBtn.addEventListener("click", () => {
    const resultsString = generateResultsString();
    navigator.clipboard.writeText(resultsString);
    alert("Results were copied to clipboard!");
})