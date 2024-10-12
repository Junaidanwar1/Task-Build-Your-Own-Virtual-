// Step 1: Create the pet object with properties
let pet = {
    name: "Fluffy",  // You can change this name
    type: "dragon",  // Or change the type of pet
    age: 3,
    happiness: 80,
    hunger: 20,
  
    // Step 2: Define the methods for the pet's actions
  
    // Feed the pet (decreases hunger)
    feed: function() {
      this.hunger -= 20;
      if (this.hunger < 0) {
        this.hunger = 0; // Ensuring hunger doesn't go below 0
      }
      alert(`${this.name} has been fed! Hunger level: ${this.hunger}`);
    },
  
    // Play with the pet (increases happiness)
    play: function() {
      this.happiness += 20;
      if (this.happiness > 100) {
        this.happiness = 100; // Ensuring happiness doesn't go above 100
      }
      alert(`${this.name} is happy! Happiness level: ${this.happiness}`);
    },
  
    // Age the pet (increases age, affects happiness and hunger)
    agePet: function() {
      this.age += 1;
      this.happiness -= 5;
      this.hunger += 10;
  
      if (this.happiness < 0) {
        this.happiness = 0;
      }
      if (this.hunger > 100) {
        this.hunger = 100;
      }
      alert(`${this.name} is now ${this.age} years old. Happiness: ${this.happiness}, Hunger: ${this.hunger}`);
    }
  };
  
  // Step 3: Interact with the pet using prompt and alert
  function interactWithPet() {
    let action = prompt("What would you like to do? (feed, play, age)");
  
    switch(action) {
      case "feed":
        pet.feed();
        break;
      case "play":
        pet.play();
        break;
      case "age":
        pet.agePet();
        break;
      default:
        alert("Please enter a valid action: feed, play, or age.");
    }
  }
  
  // Run the interaction function in a loop to keep playing with the pet
  while (true) {
    interactWithPet();
    let continuePlaying = prompt("Do you want to keep playing? (yes or no)");
    if (continuePlaying.toLowerCase() !== "yes") {
      alert("Goodbye!");
      break;
    }
  }
  