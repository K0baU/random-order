const myfunc1 = function(value){
  let mydiv = document.getElementById("mydiv");
  let myp = document.createElement("p");
  let text = document.createTextNode(value);
  myp.appendChild(text);
  mydiv.appendChild(myp);
}

let order=new Array();
for (let i = 0; i < 39; i++) {
  order[i]=i+1;
}
for (let i = 0; i < order.length; i++) {
  const random=Math.floor(Math.random()*(order.length-i));
  myfunc1(order[random]);
  order[random]=order[order.length-i-1];
  console.log(order);
}