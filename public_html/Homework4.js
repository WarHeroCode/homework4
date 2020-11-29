let sales = [];
while(sales.length < 7){
    sales.push(Number(prompt("Enter number ")));
}

let total = 0;
for(let sale of sales){
    total += sale;
}
document.write("Weekly sales- " + sales + "<br>" + "Total sales- " + total);
