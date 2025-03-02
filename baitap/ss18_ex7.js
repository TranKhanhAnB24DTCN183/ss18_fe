let number1=+prompt("Nhap vao so a:");
let number2=+prompt("Nhap vao so b:");
let operation=prompt("Nhap vao +-*/:");
let sum,minus,multiplication,division;
if (operation==='+') {
    sum=number1+number2;
    console.log(sum);
    alert(`Phep tinh tren : ${number1} + ${number2} = ${sum}`);
} else if(operation==='-'){
    minus=number1-number2;
    console.log(minus);
    alert(`Phep tinh tren : ${number1} - ${number2} = ${minus}`);
}else if(operation==='*'){
    multiplication=number1*number2;
    console.log(multiplication);
    alert(`Phep tinh tren : ${number1} * ${number2} = ${multiplication}`);
}else if(operation==='/'){
    division=number1/number2;
    console.log(division);
    alert(`Phep tinh tren : ${number1} / ${number2} = ${division}`);
}

