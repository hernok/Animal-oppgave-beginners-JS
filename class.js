class Animal {
  constructor(species, name, country, color, imgUrl) {
    this.species = species;
    this.name = name;
    this.country = country;
    this.color = color;
    this.imgUrl = imgUrl;
  }
}
let animalOne = new Animal(
  "Cat",
  "Pusur",
  "Norway",
  "Gray",
  "https://petkeen.com/wp-content/uploads/2021/05/grey-cat.jpeg"
);
let animalTwo = new Animal(
  "Ox",
  "Klara",
  "Norway",
  "Black and white",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Cow_female_black_white.jpg/1920px-Cow_female_black_white.jpg"
);
console.log(animalOne.name);
console.log(animalTwo.color);
console.log(animalOne.species);
console.log(animalTwo.imgUrl);
console.log(animalOne.country);

var img = new Image();
var div = document.getElementById("animalOne");

const animalSpecies = document.getElementsByClassName("animalOneSpecies");
const animalColor = document.getElementsByClassName("animalOneColor");
const animalName = document.getElementsByClassName("animalOneName");
const animalCountry = document.getElementsByClassName("animalOneCountry");
const AnimalImage = document.getElementsByClassName("");

const animalSpecies = document.getElementsByClassName("animalTwoSpecies");
const animalColor = document.getElementsByClassName("animalTwoColor");
const animalName = document.getElementsByClassName("animalTwoName");
const animalCountry = document.getElementsByClassName("animalTwoCountry");
const AnimalImage = document.getElementsByClassName("");
