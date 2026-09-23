# site-soma

Exercício N390 — Requisições POST com Express no Node.js.

Servidor Express que recebe dois números (`a` e `b`) via POST em JSON e devolve o resultado das quatro operações matemáticas.

## Como executar

```bash
npm install
node app.js
```

O servidor sobe em `http://localhost:3001`.

## Rotas

| Método | Rota             | Descrição                    |
|--------|------------------|------------------------------|
| GET    | `/`              | Mensagem de boas-vindas      |
| POST   | `/soma`          | Retorna `a + b`              |
| POST   | `/subtracao`     | Retorna `a - b`              |
| POST   | `/multiplicacao` | Retorna `a * b`              |
| POST   | `/divisao`       | Retorna `a / b` (b ≠ 0)      |

## Testando no Postman

1. Método **POST**, URL `http://localhost:3001/soma`
2. Aba **Body** → **raw** → tipo **JSON**
3. Corpo:

```json
{
  "a": 10,
  "b": 5
}
```

Resposta esperada: `O resultado da soma de 10 e 5 é 15`

Repita trocando a rota para `/subtracao`, `/multiplicacao` e `/divisao`.
