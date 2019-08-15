// function.call(this, arg1, arg2)
// call do inglês chamar
// retorna o this do contexto que eu enviar.

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
sayMyName.call(this, 18);
sayMyName.call(dev, 19);

console.log(dev.age);
