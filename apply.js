// function.apply(this, [arg1, arg2])
// retorna o this do contexto que eu enviar.

function multiply() {
  const args = Array.from(arguments);
  this.total = args.reduce((acc, item) => {
    return acc * item;
  }, 1);
}

multiply.apply(this, [2, 2, 3, 2]);
console.log(this.total);
