// context function inside a function
// - não pega this global

this.name = "Valeska";

function age(age) {
  this.name = "Joshua";

  function birthYear(age) {
    this.name = "Kyam";

    const year = 2019 - age;
    console.log(this.name, year);
  }

  birthYear(age);

  console.log(this.name);
}

age(25);

console.log(this.name);
