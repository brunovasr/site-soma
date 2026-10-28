var express = require('express');
var app = express();

// body-parser: permite ler os dados JSON enviados no corpo da requisição POST
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Rota GET da raiz, conforme o tutorial
app.get('/', function (req, res) {
  res.send('Oi, mundo :-)');
});

// Serve os arquivos da pasta "public" (o front-end da calculadora em /calculadora)
app.use('/calculadora', express.static('public'));

// ---------- Funções das operações ----------
function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  return a / b;
}

// Valida se "a" e "b" foram enviados e são números.
// Retorna os valores convertidos ou null se forem inválidos.
function lerNumeros(body) {
  var a = Number(body.a);
  var b = Number(body.b);

  if (body.a === undefined || body.b === undefined || isNaN(a) || isNaN(b)) {
    return null;
  }

  return { a: a, b: b };
}

// ---------- Rotas ----------
app.post('/soma', function (req, res) {
  var body = req.body;
  console.log(body);

  var numeros = lerNumeros(body);
  if (!numeros) {
    return res.status(400).send('Envie os campos "a" e "b" com valores numéricos.');
  }

  var resultado = soma(numeros.a, numeros.b);
  res.send(`O resultado da soma de ${numeros.a} e ${numeros.b} é ${resultado}`);
});

app.post('/subtracao', function (req, res) {
  var body = req.body;
  console.log(body);

  var numeros = lerNumeros(body);
  if (!numeros) {
    return res.status(400).send('Envie os campos "a" e "b" com valores numéricos.');
  }

  var resultado = subtracao(numeros.a, numeros.b);
  res.send(`O resultado da subtração de ${numeros.a} e ${numeros.b} é ${resultado}`);
});

app.post('/multiplicacao', function (req, res) {
  var body = req.body;
  console.log(body);

  var numeros = lerNumeros(body);
  if (!numeros) {
    return res.status(400).send('Envie os campos "a" e "b" com valores numéricos.');
  }

  var resultado = multiplicacao(numeros.a, numeros.b);
  res.send(`O resultado da multiplicação de ${numeros.a} e ${numeros.b} é ${resultado}`);
});

app.post('/divisao', function (req, res) {
  var body = req.body;
  console.log(body);

  var numeros = lerNumeros(body);
  if (!numeros) {
    return res.status(400).send('Envie os campos "a" e "b" com valores numéricos.');
  }

  if (numeros.b === 0) {
    return res.status(400).send('Não é possível dividir por zero.');
  }

  var resultado = divisao(numeros.a, numeros.b);
  res.send(`O resultado da divisão de ${numeros.a} e ${numeros.b} é ${resultado}`);
});

var port = 3001;

// iniciando o processo do servidor
app.listen(port, function () {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});
