function addItem () {
  const item = document.getElementById('toAdd').value;
  var li = document.createElement('li');
  li.innerHTML = item;
  li.setAttribute('onClick', 'remove(this)');
  document.getElementById('list').appendChild(li);

  if (item % 2 == 1) {
    li.setAttribute('style', 'color:red;');
  }
  else if (item % 2 == 0) {
    li.setAttribute('style','color:blue;');
  }
  else {
    li.setAttribute('style' , 'color:black;');

  }

  if (item % 2 == 0) {
    var numero = 0;
    var list = document.getElementById('list');
    list.childNodes.forEach(i => {
      if (i.innerHTML % 2 == 0){
        numero += parseInt(i.innerHTML);
      }
     
    })
    alert("Total entre Nº Pares: " + numero);
  }
}

function clearItem () {
  var list = document.getElementById('list');
  localStorage.setItem('list', '');
  list.textContent = '';
}

function save () {
  var list = document.getElementById('list');
  localStorage.setItem('list', list.innerHTML);
}

function load () {
  var list = document.getElementById('list');
  list.innerHTML = localStorage.getItem('list');
}

function remove (li) {
  var list = document.getElementById('list');
  list.removeChild(li);
}

//Budget
var budget, balance = 0;
function addbudget()
{
  budget = parseFloat(document.getElementById('budget').value);
  document.getElementById('valorbudget').textContent = "Budget: " + budget;
  refreshbudget();
}

//expense
var expense = 0;
var somaimp = 0;
function addexpense()
{
  refreshbudget();

  let expens = parseFloat(document.getElementById('expense').value);

  if (par(expens))
  {
    alert('The value is even');
  }
  else
  {
    alert('The value is odd');
    alert(somaimpar(expens));
  }
}

function refreshbudget()
{
  if ((budget - expense) >= 0)
  {
    document.getElementById('actualbalance').textContent = "Balance: " + (budget - expense);
    expense += parseFloat(document.getElementById('expense').value);
    document.getElementById('valorexpenses').textContent = "Expense: " + expense;
    document.getElementById('actualbalance').style.color = "darkgreen";
    document.getElementById('valorexpenses').style.color = "darkred";
  }
  else
  {
    alert('Negative Value');

  }
}

function savebudget() {
  let budget = document.getElementById("valorbudget");
  let expenses = document.getElementById("valorexpenses");
  let balance = document.getElementById("actualbalance");
  localStorage.setItem("budget", budget.innerHTML);
  localStorage.setItem("expenses", expenses.innerHTML);
  localStorage.setItem("balance", balance.innerHTML);
}

function loadbudget() {
  document.getElementById("valorbudget").innerHTML = localStorage.getItem("budget");
  document.getElementById("valorexpenses").innerHTML = localStorage.getItem("expenses");
  document.getElementById("actualbalance").innerHTML = localStorage.getItem("balance");
}

function par(num)
{
  if (num % 2 == 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}

function somaimpar(imparnum)
{
  return somaimp += imparnum;
}

var num = 0.0;
var operation = '';
var num2 = 0.0;
var res = 0.0;
function number(numbero)
{
  document.getElementById('num').textContent += numbero;
}

function operator(operador)
{
  num = parseFloat(document.getElementById('num').textContent);
  document.getElementById('num').textContent = '';
  operation = operador
}

function Equals()
{
  switch(operation)
  {
    case '+':
      console.log(num, num2, res, document.getElementById('num').textContent);
      num2 = parseFloat(document.getElementById('num').textContent);
      res = num + num2;
      document.getElementById('num').textContent = res;
      res = num;
      console.log("Valor do numero: " + res + " Valor do resultado: " + num2 + " O operador é o: " + operation);
      break;
    case '-':
      console.log(num, num2, res, document.getElementById('num').textContent);
      num2 = parseFloat(document.getElementById('num').textContent);
      res = num - num2;
      document.getElementById('num').textContent = res;
      res = num;
      console.log("Valor do numero: " + num + " Valor do resultado: " + res + " O operador é o: " + operation);
      break;
    case '*':
      console.log(num, num2, res, document.getElementById('num').textContent);
      num2 = parseFloat(document.getElementById('num').textContent);
      res = num * num2;
      document.getElementById('num').textContent = res;
      res = num;
      console.log("Valor do numero: " + num + " Valor do resultado: " + res + " O operador é o: " + operation);
      break;
    case '/':
      console.log(num, num2, res, document.getElementById('num').textContent);
      num2 = parseFloat(document.getElementById('num').textContent);
      res = num / num2;
      document.getElementById('num').textContent = res;
      res = num;
      console.log("Valor do numero: " + num + " Valor do resultado: " + res + " O operador é o: " + operation);
      break;
  }
}

function Clear()
{
  document.getElementById('num').textContent = ('');
  operation = '';
}

function adddot()
{
  document.getElementById('num').textContent += '.';
}

function sleep(ms) 
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function redirect()
{
  await sleep(1000);
  window.location.replace("todoApp.html");
}