//  Una queue (cola) existe implementada en JavaScript 
//  Esta es una simulación de un  banco.
//  A queue is already implemented in JavaScript.  
//  This is a  bank  simulation. 

function Queue(){
  
  this.dataStore = Array.prototype.slice.call(arguments, 0);
  this.enqueue = enqueue; 
  this.dequeue = dequeue;
  this.empty = empty;
  
  this.print = print;
  
  function enqueue (element) {
    this.dataStore.push(element);
  }
  
  function dequeue(){
    return this.dataStore.shift();
  }
  
  function empty(){
    return this.dataStore.length == 0;  
  }
  
  function print(element){
    this.dataStore.forEach(function(item){
      element.appendChild(item.node);
    });
  }
}

function Client(name){
  this.name = name; 
  this.time = parseInt(Math.random()*10) + 5;
  
  var div = document.createElement("div");
  div.setAttribute("id", "client-"+this.name);
  div.appendChild(document.createTextNode(this.name));
  this.node =  div;
}

function printClients(queue){
  var divQueue = document.getElementById("queue");
  divQueue.innerHTML = "";
  queue.print(divQueue);
}

function addClient(queue){
  var nameInput = document.getElementById("client-name");
  if(nameInput.value.length!=0) queue.enqueue(new Client(nameInput.value));
  nameInput.value = ""; 
  printClients(queue);
}

function nextClient(queue){
  var current = document.getElementById("current-client");
  current.innerHTML="";
  if(!queue.empty()){
      var erased = queue.dequeue();
      current.appendChild(erased.node);
      printClients(queue);
      setTimeout(attendClient,  erased.time*1000);
  }
}

function attendClient(queue){
    var current = document.getElementById("current-client");
    current.innerHTML="";
}

function init(queue){
  document.getElementById("add-client").addEventListener('click', addClient.bind(null, queue));
  document.getElementById("attend-client").addEventListener('click', nextClient.bind(null, queue));
  printClients(queue);
}


init(new Queue());

/*
init(new Queue(
  new Client("Merry"),
  new Client("Nami"),
  new Client("Robin"),
  new Client("Vivian")
));
*/