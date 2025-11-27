// --------------------------
// Animal Class
// --------------------------
class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method: makeSound
  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

// --------------------------
// Cat Class (inherits Animal)
// --------------------------
class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

// --------------------------
// Dog Class (inherits Animal)
// --------------------------
class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

// --------------------------
// Do not change the code below this line
// --------------------------
window.Animal = Animal;
window.Cat = Cat;
window.Dog = Dog;
