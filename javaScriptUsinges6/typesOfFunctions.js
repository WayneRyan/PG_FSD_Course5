// Normal Function
function display1() {
    document.write("<br/> Normal style function");
}
display1();

// expression style function
let display3 = function (){
    document.write("<br/> Expression style function with name");
}

display3();


let f = (n) => n==1 ? 1 : f(n-1) * n;
document.write(f(6));