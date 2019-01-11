var MyArray = new Array("Adriana", "Monica", "Patricia");

for (v in MyArray) {
  document.write("Sudent: " + MyArray[v] + "<br>");
}

var SecondArray = ["a", "b", "c", "d"];

for (v in SecondArray) {
  document.write(v + SecondArray[v] + "<br>");
}

//write a loop that automatically increments itself//
for (i = 0; i < 5; i++) {
  document.write("<br>" + i);
}