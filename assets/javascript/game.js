console.log("hello world");

var aang = {
    "id": "aang",
    "name": "Aang",
    "power": "Master of All Elements",
    "img" : "assets/images/Aang.png",
    "hp": 100,
    "base-attack-power": 10,
    "attack-power": 10, //this will increase with every attack
    "counter-attack-power": 10 //this will remain the same
};

var bubblegum = {
    "id": "bubblegum",
    "name": "Princess Bubblegum",
    "power": "Scientist & Beloved Benevolent Ruler",
    "img" : "assets/images/bubblegum.jpg",
    "hp": 100,
    "base-attack-power": 10,
    "attack-power": 10, //this will increase with every attack
    "counter-attack-power": 10 //this will remain the same
};

var dandy = {
    "id": "dandy",
    "name": "Space Dandy",
    "power": "Luck & Charm",
    "img" : "assets/images/dandy.png",
    "hp": 100,
    "base-attack-power": 10,
    "attack-power": 10, //this will increase with every attack
    "counter-attack-power": 10 //this will remain the same
};

var garnet = {
    "id": "garnet",
    "name": "Garnet",
    "power": "Strength & Future Vision",
    "img" : "assets/images/garnet.png",
    "hp": 100,
    "base-attack-power": 10,
    "attack-power": 10, //this will increase with every attack
    "counter-attack-power": 10 //this will remain the same
};

var mononoke = {
    "id": "mononoke",
    "name": "Princess Mononoke",
    "power": "Goddess of Nature & Animals",
    "img" : "assets/images/mononoke.jpg",
    "hp": 100,
    "base-attack-power": 10,
    "attack-power": 10, //this will increase with every attack
    "counter-attack-power": 10 //this will remain the same
};
 
var rick = {
    "id": "rick",
    "name": "Rick Sanchez",
    "power": "Mad Scientist",
    "img" : "assets/images/rick.png",
    "hp": 100,
    "base-attack-power": 10,
    "attack-power": 10, //this will increase with every attack
    "counter-attack-power": 10 //this will remain the same
};

var characters = [aang, bubblegum, dandy, garnet, mononoke, rick];
var isPlayerSelected = false;
var playerSelected; 
var opponentSelected;

//character cards start new
// select player function
    // player is chosen and "blacks out" from options list, image goes to player battle station, player info fills in player card
// select opponent function
    // opponent is chosen and "blacks out" from options list, image goes to opponent battle station, opponent info fills in opp. card
//  battle royale function
    //press attack button- with each attack, increase base attack power and decrease opponents hp
    //opponent attacks back- decrease players hp by counter-attack-power
    //continues until opponent is out of hp
    
    //once first opponent is defeated, select next opponent
    //battle royale function

    //once second opponent is defeated, select final opponent
    //battle royale function
    //game over if player is out of hp or final(3rd) opponent is defeated

// on page load, characters displayed at bottom
for (var i = 0; i < characters.length; i++){
    // $("#" + characters[i].id + "img").text(characters[i].img);
    $("#" + characters[i].id + "Name").text(characters[i].name);
    $("#" + characters[i].id + "Power").text(characters[i].power);
    $("#" + characters[i].id + "Hp").text("HP: " + characters[i].hp);
    $("#" + characters[i].id + "AttackPower").text("Attack Power: "+ characters[i]["attack-power"]);
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
                $("#player-hp").text(characters[i].hp);
                $("#player-attack-power").text(characters[i]["attack-power"]);
                // set image on battle station
                $("#player-image").attr('src', characters[i].img);
            } 
        }

    } else {
        for (var i = 0; i < characters.length; i++) {
            if(characters[i].id == characterId) {
                opponentSelected = character[i];
                // opaque
                $("#" + characters[i].id).css('opacity', '0.5');
                // card info fill
                $("#opponent-name").text(characters[i].name);
                $("#opponent-power").text(characters[i].power);
                $("#opponent-hp").text(characters[i].hp);
                $("#opponent-attack-power").text(characters[i]["attack-power"]);
                // set image on battle station
                $("#opponent-image").attr('src', characters[i].img);
            }
        }
    }
}

// $("#attackButton").on("click", function() {
//     opponentSelected.hp -= playerSelected["attack-power"];

// })



