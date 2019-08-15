// bind = ligar
// retorna a função chamanda, porém ligada ao contexto que lhe foi passado.
// bound function

this.name = "Camila";
this.age = 25;

function sayMyName(age) {
  this.age = age;
  console.log(this.name, this.age);
}

const dev = {
  name: "Isabela",
  age: 35,
  sayMyAge: function() {
    console.log(this.name, this.age);
  }
};

const age = dev.sayMyAge.bind(this);

age();
