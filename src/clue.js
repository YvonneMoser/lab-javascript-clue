
// Characters Collection
var charactersArray = [];

var mrGreen = {
  first_name:   "Jacob",
  last_name:    "Green",
  color:        "green",
  description:  "He has a lot of connections",
  age:          45,
  image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation:   "Entrepreneur"
  }
  
var drOrchid = {
    first_name:   "Doctor",
    last_name:    "Orchid",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          26,
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",  
    occupation:   "Scientist"
  }
  
var profPlum = {
    first_name:   "Victor",
    last_name:    "Plum",
    color:        "purple",
    description:  "Billionare video game designer",
    age:          22,
    image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation:   "Designer"
  }
  
var missScarlet = {
    first_name:   "Kasandra",
    last_name:    "Scarlet",
    color:        "red",
    description:  "She is an A-list movie star with a dark past",
    age:          31,
    image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation:   "Actor"
  }

var mrsPeacock = {
    first_name:   "Eleanor",
    last_name:    "Peacock",
    color:        "blue",
    description:  "She is from a wealthy family and uses her status and money to earn popularity",
    age:          36,
    image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation:   "Socialité"
  }

var mrMustard = {
    first_name:   "Jack",
    last_name:    "Mustard",
    color:        "yellow",
    description:  "He is a former football player who tries to get by on his former glory",
    age:          62,
    image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation:   "Retired Football player"
  }

charactersArray.push(mrGreen);
charactersArray.push(drOrchid);
charactersArray.push(profPlum);
charactersArray.push(missScarlet);
charactersArray.push(mrsPeacock);
charactersArray.push(mrMustard);
//console.log(charactersArray);



// Rooms' Collection - Could also have been pushed to the array
var roomsArray = ["Dinning Room", "Conservatory", "Kitchen", "Study", "Library", "Billiard Room", "Lounge", "Ballroom", "Hall", "Spa", "Living Room", "Observatory", "Theater", "Guest House", "Patio"];



// Weapons Collection
var weaponsArray = [ 
  {name: "rope", weight: 10},
  {name: "knife", weight: 8},
  {name: "candlestick", weight: 2},
  {name: "dumbbell", weight: 30},
  {name: "poison", weight: 2},
  {name: "axe", weight: 15},
  {name: "bat", weight: 13},
  {name: "trophy", weight: 25},
  {name: "pistol", weight: 20}
]


function randomSelector(array){
  var randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement;
};

// check function: console.log(randomSelector(weaponsArray));

function pickMistery(){
  var randomCharacter = randomSelector(charactersArray);
  var randomWeapon = randomSelector(weaponsArray);
  var randomRoom = randomSelector(roomsArray);
  var cardSet = [randomCharacter, randomWeapon, randomRoom];
  return cardSet;
}

//created var outside of the function, so its global
var misteryEnvelope = pickMistery();

// pickMistery(charactersArray, weaponsArray, roomsArray);

// console.log(pickMistery(charactersArray, weaponsArray, roomsArray));


function revealMistery(array){
  return array[0].first_name + " " + array[0].last_name + " killed Mr. Boddy using the " + array[1].name + " in the " + array[2] + "!!!!";
}

console.log(revealMistery(misteryEnvelope));