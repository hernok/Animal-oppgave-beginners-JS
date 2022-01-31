let animalOneSpecies = document.querySelector(".animalOneSpecies");
const animalOneColor = document.querySelector(".animalOneColor");
const animalOneName = document.querySelector(".animalOneName");
const animalOneCountry = document.querySelector(".animalOneCountry");
const animalOneImage = document.querySelector(".animalOneImg");

let animalTwoSpecies = document.querySelector(".animalTwoSpecies");
const animalTwoColor = document.querySelector(".animalTwoColor");
const animalTwoName = document.querySelector(".animalTwoName");
const animalTwoCountry = document.querySelector(".animalTwoCountry");
const AnimalTwoImage = document.querySelector("animalTwoImg");

class Animal {
  constructor(species, name, country, color, imgUrl) {
    this.species = species;
    this.name = name;
    this.country = country;
    this.color = color;
    this.imgUrl = imgUrl;
  }
}
const animalOne = new Animal(
  "Cat",
  "Pusur",
  "Norway",
  "Gray",
  "https://petkeen.com/wp-content/uploads/2021/05/grey-cat.jpeg"
);
const animalTwo = new Animal(
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

animalOneSpecies.innerHTML = animalOne.species;
animalOneColor.innerHTML = animalOne.color;
animalOneName.innerHTML = animalOne.name;
animalOneCountry.innerHTML = animalOne.country;
animalOneImage.innerHTML += `<img src='${animalOne.imgUrl}' />`;

animalTwoSpecies.innerHTML = animalTwo.species;
animalTwoColor.innerHTML = animalTwo.color;
animalTwoName.innerHTML = animalTwo.name;
animalTwoCountry.innerHTML = animalTwo.country;
animalTwoImage.innerHTML += `<img src='${animalTwo.imgUrl}' />`;
