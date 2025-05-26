# Exercício: Transformar Números em Objetos

## Enunciado

Crie uma função chamada `transformToObjects(numbers)` que receba um array de números e retorne um novo array com objetos.

Cada objeto deve ter uma chave `val` cujo valor é o número correspondente da lista original.

### Exemplo:

```javascript
transformToObjects([1, 2, 3])
// Deve retornar: [{ val: 1 }, { val: 2 }, { val: 3 }]
```

---

## Solução

```javascript
function transformToObjects(numbers) {
  return numbers.map(num => ({ val: num }));
}
```

---

## Explicação

Ao trabalhar com **Arrow Functions**, o JavaScript oferece algumas **formas abreviadas de escrever funções** que economizam linhas e tornam o código mais conciso.

Vamos entender o que está acontecendo nessa solução linha por linha.

---

### `numbers.map(num => ({ val: num }))`

- `map()` percorre todos os itens do array `numbers`.
- Para cada item (`num`), usamos uma **arrow function** para retornar um objeto.
- Esse objeto tem a forma `{ val: num }`.

---

## Explicando Arrow Functions

Arrow functions permitem atalhos de sintaxe, mas é importante saber quando **parênteses e chaves são obrigatórios** ou não.

### 1) Omitindo parênteses dos parâmetros

Você pode omitir os parênteses **se a função receber apenas um parâmetro**:

```javascript
num => num * 2     // OK
```

Mas se houver **zero** ou **mais de um parâmetro**, os parênteses são obrigatórios:

```javascript
() => console.log("oi");              // OK
(a, b) => a + b                       // OK
```

---

### 2) Omitindo chaves no corpo da função

Se sua função só tem uma instrução que **retorna algo**, você pode omitir as chaves `{}` e a palavra `return`:

```javascript
num => num * 3    // Equivalente a: num => { return num * 3 }
```

Se você **usar chaves**, aí o `return` se torna obrigatório:

```javascript
num => { return num * 3 }    // OK
num => { num * 3 }           // ❌ NÃO retorna nada!
```

---

### 3) Caso especial: Retornando um objeto

Aqui é onde muitos se confundem.

Se você quiser retornar um **objeto** diretamente **usando a forma curta**, você **precisa envolver o objeto com parênteses**:

```javascript
num => ({ idade: num })   // ✅ CORRETO
```

Se fizer sem os parênteses:

```javascript
num => { idade: num }     // ❌ ERRADO
```

Isso será interpretado como um bloco de código, e não como um objeto — `idade: num` será tratado como um **label**, não como uma propriedade de objeto.

---

## Conclusão

A forma correta de retornar objetos diretamente em arrow functions exige:

- Parênteses no retorno do objeto: `({ chave: valor })`
- Entendimento claro do que está sendo retornado: valor ou bloco de código.

Por isso, no exercício:

```javascript
num => ({ val: num })
```

Estamos usando **parênteses ao redor do objeto** para garantir que o JavaScript **retorne o objeto corretamente**, e não interprete o `{}` como início de um bloco.

---
## Teste

Para testar a função, você pode usar o console do chrome.	
