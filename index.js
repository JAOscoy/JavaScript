/*var numbers = [1, 2, 3, 4, 5];
var doubles = numbers.reduce(function(x, y) {
    return y-x;
});

var arrays = [[1, 2, 3], [4, 5], [6, 8], [9, 0]];
var array = flatten(arrays);

console.log(array); // [1, 2, 3, 4, 5, 6]

function flatten(a) {
  return a.reduce(function(a, b) {
    return a.concat(b);
  }, []);
}

function compact(array) {
    return array.filter(function(element) {
      return !!element;
    });
  }
  
  let array = [0, 1, false, 2, '', 3, " "];
  let compactedArray = compact(array);
  
  console.log(compactedArray);

  
  let test = function(n) {
    return n > 0;
  }
  
  let update = function(n) {
    return n - 1;
  }

function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}

function nuevaTarea(a){
    
}

let tarea = document.getElementsByClassName('input');
let confirmar = document.getElementById('add-btn');*/
let buly = '';
const button = document.getElementById("add-btn");

button.addEventListener('click', function () {
    const ul = document.getElementById("todo-list");
    const input = document.getElementById("todo-text");
    buly = input.value;
    let li = document.createElement('li');
    li.classList.add('list-group-item');
    let span = document.createElement('span');
    let button = document.createElement('button');
    span.classList.add("todo-text");
    button.setAttribute("id", "Borrar")
    button.classList.add("btn-outline-danger");
    button.classList.add("btn");
    span.innerText = buly + ' ';
    button.innerText = "Eliminar";
    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
})
