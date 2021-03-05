let order;
for (let i = 0; i < 39; i++) {
    order[i]=i+1;
}
let randomOrder;
for (let i = 0; i < order.length; i++) {
    const random=Math.floor(Math.random()*(order.length-i));
    randomOrder[i] = order[random];
    order[i]=order[random];
}
document.getElementById("HelloWorld").innerHTML="HelloWorld";
document.getElementById("random").innerHTML=randomOrder;