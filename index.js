var MyArray = new Array("Adriana", "Monica", "Patricia");

for (v in MyArray) {
  document.write("Sudent: " + MyArray[v] + "<br>");
}

var SecondArray = ["a", "b", "c", "d"];
document.write("<br>");

for (v in SecondArray) {
  document.write(v + "-" + SecondArray[v] + "<br>");
}


//Assignment//
//write a loop that automatically increments itself//
for (i = 0; i < 5; i++) {
  document.write("<br>" + i);
}
document.write("<br>");

//Once that's done, write an array with at least 3 values.

var AnArray = ["yellow", "red", "blue", "orange", "violet"];

//Once that's done, write an array with at least 3 values.

for (j in AnArray) {
  document.write("<br>" + AnArray[j]);
}