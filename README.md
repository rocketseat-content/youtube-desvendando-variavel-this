# this (javascript)

## O que é "this"?

`this` em inglês significa: `isto, esta`

Automaticamente somos levados a pensar: Isto o que? Esta o que?. Assim, precisamos estar situados em algum contexto para entender o `this`.

Imagine que você está na sua casa, com sua família. E você chega na sua família e fala: "Eu amo **esta** casa". Você não diz que ama outra casa, e não está se referindo a outra casa. Aí vc toca na mesa e diz: "Eu amo **essa** mesa, **esse** sofá, amo **isto** tudo". No contexto da casa, você possui e se refere a estas coisas.

O `this` em javascript possui a mesma ideia.

O comportamento dele depende do contexto `context` ou do escopo `scope`.

Como no exemplo da casa, o `this` pode ser a casa, pode ser o sofá ou a mesa. O que vai dizer o que significa o `this` é o contexto.

O comportamento do `this` depende, então do:

1. Escopo e Contexto
2. Modo Estrito

---

## 1 Escopo vs Contexto

- Escopo (scope)

  - **Acesso** às variáveis, funções e objetos numa parte do código, durante o tempo de execução.
  - Determina a **visibilidade** desses recursos em alguma parte do código.
  - Sempre invocamos uma função, estamos criando um novo `scope`

- Contexto (context)

  - Enquanto o `scope` se refere às diversas variáveis, o `context` se refere ao valor do `this` no mesmo `scope`
  - Pode ser mudado com funções especiais como: .apply(), .call() e .bind()
  - No contexto de execução `execution context` o contexto já não é mais esse contexto que estamos discutindo. Ele será o `scope`

Temos 2 `scopes`:

1. Global
   1. No momento que começamos a escrever código, estamos nesse contexto.
   2. Existe enquanto existir a aplicação
2. Local
   1. Dentro de alguma função, variáveis estão no escopo (contexto) local.
   2. Existe equanto existir a função ou o objeto.

## 2 Modo Estrito (strict mode)

- Muda a semântica do javascript
- É opcional
- `"use strict"` para habilitar no contexto
- Elimina alguns erros silênciosos
- Evita algumas confusões
- Proíbe algumas sintaxes

---
