function tableMaker() {
  var dynaTable = document.getElementById("dynaTable");
  var table = document.createElement("TABLE");
  var numberForm = document.getElementById("numberForm");
  var reset = document.getElementById("reset");

  table.border = "1";

  var tableBody = document.createElement("TBODY");
  table.appendChild(tableBody);
  var x = document.getElementById("newRow").value;
  var y = document.getElementById("newColumn").value;
  // This handles if there is no input I could have set the default in the
  // input to 6 but I chose this direction instead so it doesn't start with 6
  if (x === "") {
    x = 6;
  }
  if (y === "") {
    y = 6;
  }

  // stops the input of invalid integers with alert box, for sake of scope it checks this
  // first before generating the table
  if (x > 6 || y > 6 || x < 1 || y < 1) {
    alert("Please enter a number between 1 and 6");
  } else {
    // a classic j and i loop to handle the 2d generation of the table
    // using html table markup tr and td
    for (let j = 1; j <= x; j++) {
      var tr = document.createElement("TR");
      tableBody.appendChild(tr);

      for (let i = 1; i <= y; i++) {
        let z = j * i;
        var td = document.createElement("TD");
        td.width = "75";
        //   td.appendChild(document.createTextNode(`${j + 1} x ${i + 1} = ${z}`));
        td.appendChild(document.createTextNode(`${j} x ${i} = ${z}`));

        tr.appendChild(td);
      }
    }

    dynaTable.appendChild(table);
    // removes display from the number input while showing the resest button
    numberForm.style.display = "none";
    reset.style.display = "block";
  }
}
// resets the table it removes the display of the reset button and shows the input
function removeTable() {
  dynaTable.innerHTML = "";
  numberForm.style.display = "block";
  reset.style.display = "none";
  document.getElementById("newRow").value = "";
  document.getElementById("newColumn").value = "";
}
