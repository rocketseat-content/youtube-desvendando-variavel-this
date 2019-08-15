this.name = "Valeska";

function sayMyName() {
  console.log(this.name);
}

const user = {
  sayMyName: function() {
    console.log(this.name);
  }
};

user.sayMyName();

console.log(window.name);
