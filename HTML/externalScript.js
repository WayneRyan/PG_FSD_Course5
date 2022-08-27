function addEmployee() {
    // alert("Event fired ...");
    var name = document.getElementById("uname").value;
    var age = document.getElementById("age").value;
    var pTag = document.createElement("p");
    var bTag = document.createElement("b");
    var pTagContent = document.createTextNode("Name is " + name + " age is " + age);
    pTag.appendChild(bTag);
    bTag.appendChild(pTagContent);
    pTag.setAttribute("class", "myClass");
    document.getElementById("output").appendChild(pTag);
    document.getElementById("uname").value = "";
    document.getElementById("age").value = "";
}