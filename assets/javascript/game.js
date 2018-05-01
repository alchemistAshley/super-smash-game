console.log("hello world");

var aang = {
    "id": "aang",
    "name": "Aang",
    "power": "Master of Elements",
    "img" : "assets/images/Aang.png",
    "hp": 200,
    "base-attack-power": 9,
    "attack-power": 9, //this will increase with every attack
    "counter-attack-power": 15 //this will remain the same
};

var bubblegum = {
    "id": "bubblegum",
    "name": "Princess Bubblegum",
    "power": "Beloved Scientist",
    "img" : "assets/images/bubblegum.png",
    "hp": 190,
    "base-attack-power": 6,
    "attack-power": 6, //this will increase with every attack
    "counter-attack-power": 16 //this will remain the same
};

var dandy = {
    "id": "dandy",
    "name": "Space Dandy",
    "power": "Luck & Charm",
    "img" : "assets/images/dandy.png",
    "hp": 215,
    "base-attack-power": 15,
    "attack-power": 15, //this will increase with every attack
    "counter-attack-power": 20 //this will remain the same
};

var garnet = {
    "id": "garnet",
    "name": "Garnet",
    "power": "Strength & Future Vision",
    "img" : "assets/images/garnet.png",
    "hp": 220,
    "base-attack-power": 11,
    "attack-power": 11, //this will increase with every attack
    "counter-attack-power": 22 //this will remain the same
}
var mononoke = {
    "id": "mononoke",
    "name": "Princess Mononoke",
    "power": "Nature & Animals",
    "img" : "assets/images/mononoke.png",
    "hp": 180,
    "base-attack-power": 8,
    "attack-power": 8, //this will increase with every attack
    "counter-attack-power": 18 //this will remain the same
};
 
var rick = {
    "id": "rick",
    "name": "Rick Sanchez",
    "power": "Mad Scientist",
    "img" : "assets/images/rick.png",
    "hp": 205,
    "base-attack-power": 12,
    "attack-power": 12, //this will increase with every attack
    "counter-attack-power": 25 //this will remain the same
};

var characters = [aang, bubblegum, dandy, garnet, mononoke, rick];
var isPlayerSelected = false;
var playerSelected; 
var opponentSelected;
var opponentCount = 0;

var startAudio = new Audio("assets/images/jazzyfunkmusic.mp3");

$(document).ready(function() {
    startAudio.play(); 
})

$("#attackButton").attr("disabled", true);
$("#attackButton").hide();


// on page load, characters displayed at bottom
for (var i = 0; i < characters.length; i++){
    // $("#" + characters[i].id + "img").text(characters[i].img);
    $("#" + characters[i].id + "Name").text(characters[i].name);
    $("#" + characters[i].id + "Power").text(characters[i].power);
    $("#" + characters[i].id + "Hp").text("HP: " + characters[i].hp);
    $("#" + characters[i].id + "AttackPower").text("Attack Power: "+ characters[i]["attack-power"]);
    $("#" + characters[i].id + "CounterAttackPower").text("Counter Attack: "+ characters[i]["counter-attack-power"]);
}


$("#aangSelect").on("click", function() {
    selectCharacters("aang");
});
$("#bubblegumSelect").on("click", function() {
    selectCharacters("bubblegum");
});
$("#dandySelect").on("click", function() {
    selectCharacters("dandy");
});
$("#garnetSelect").on("click", function() {
    selectCharacters("garnet");
});
$("#mononokeSelect").on("click", function() {
    selectCharacters("mononoke");
});
$("#rickSelect").on("click", function() {
    selectCharacters("rick");
});

$("#prompt").text("Choose your player:");

function selectCharacters(characterId) {
    if (isPlayerSelected == false) {
        for (var i = 0; i < characters.length; i++) {
            if(characters[i].id == characterId) {
                isPlayerSelected = true;
                playerSelected = characters[i];
                // opaque
                $("#" + characters[i].id).css('opacity', '0.5');
                // card info fill
                $("#player-name").text(characters[i].name);
                $("#player-power").text(characters[i].power);
                $("#player-hp").text("HP: " + characters[i].hp);
                $("#player-attack-power").text("Attack Power: " + characters[i]["attack-power"]);
                // set image on battle station
                $("#player-image").attr('src', characters[i].img);
                $("#player-image").hide().fadeIn();
                $("#prompt").show().text("Choose your opponent:");
            } 
        }

    } else {
        for (var i = 0; i < characters.length; i++) {
            if(characters[i].id == characterId) {
                opponentSelected = characters[i];
                // opaque
                $("#" + characters[i].id).css('opacity', '0.5');
                // card info fill
                $("#opponent-name").text(characters[i].name);
                $("#opponent-power").text(characters[i].power);
                $("#opponent-hp").text("HP: " + characters[i].hp);
                $("#opponent-attack-power").text("Attack Power: " + characters[i]["attack-power"]);
                // set image on battle station
                $("#opponent-image").attr('src', characters[i].img);
                $("#opponent-image").hide().fadeIn();
                $("#attackButton").attr("disabled", false);
                $("#attackButton").show();
                $("#character-selection").hide();
                $("#prompt").hide().text("Choose your opponent:");
            }
        }
    }
}

function gameOver() {
    $("#attackButton").attr("disabled", true);
    $("#character-selection").css('display', 'none');
}

$("#attackButton").on("click", function() {
    opponentSelected.hp -= playerSelected["attack-power"];
    playerSelected["attack-power"] += playerSelected["base-attack-power"];
    playerSelected.hp -= opponentSelected["counter-attack-power"];
    
    
    if (opponentSelected.hp <= 0) {
        opponentCount++;
        opponentSelected.hp = 0;
        $("#attackButton").attr("disabled", true);
        $("#character-selection").show();
        $("#opponent-image").fadeOut();
        $("#prompt").show().text("Choose your next opponent:");
    } 

    $("#opponent-hp").text("HP: " + opponentSelected.hp);
    $("#player-attack-power").text("Attack Power: " + playerSelected["attack-power"]);
    $("#player-hp").text("HP: " + playerSelected.hp);

    if (playerSelected.hp <= 0) {
        $("#prompt").text("Game Over... You Lost!");
        $("#player-image").fadeOut();
        gameOver();
    }

    if (opponentCount == 5) {
        $("#prompt").text("Game Over... You Won!");
        gameOver();
    }

});