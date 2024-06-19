document.addEventListener("DOMContentLoaded",  () => {
  // Fetch data from data.json file

  fetch("data.json").then((response) => response.json()).then((data) => {
          loadTableData(data);

    console.log(data);

  })

});

// Function to load dat into the table

function loadTableData(data) {
  const tableBody = document
    .getElementById("dataTable")
    .getElementsByTagName("tbody")[0];

  data.forEach((item, index) => {
    let row = tableBody.insertRow();
    row.insertCell(0).textContent = index + 1;
    row.insertCell(1).textContent = item.first_name;
    row.insertCell(2).textContent = item.last_name;
    row.insertCell(3).textContent = item.age;
    row.insertCell(4).textContent = item.email;
    row.insertCell(5).textContent = item.phoneNumber;
  });
}

// function to search the table

function searchTable() {
  let input = document.getElementById("searchInput");
  let filter = input.value.toUpperCase();
  let table = document.getElementById("dataTable");
  let tr = table.getElementsByTagName("tr");

  for (let i = 1; i < tr.length; i++) {
    tr[i].style.display = "none";
    let td = tr[i].getElementsByTagName("td");
    for (let j = 1; j < td.length; j++) {
      if (td[j]) {
        let textVAlue = td[j].textContent || td[j].innerText;
        if (textVAlue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          break;
        }
      }
    }
  }
}

// Function to add a new row to the table

function addRow() {
  let firstName = document.getElementById("first_name").value;
  let lastName = document.getElementById("last_name").value;
  let age = document.getElementById("age").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phoneNumber").value;

  if (!firstName || !lastName || !age || !email || !phoneNumber) {
    alert("Please fill out all fields");
    return;
  }

  let table = document
    .getElementById("dataTable")
    .getElementsByTagName("tbody")[0];
  let newRow = table.insertRow();

  newRow.insertCell(0).textContent = table.rows.length + 1;
  newRow.insertCell(1).textContent = firstName;
  newRow.insertCell(2).textContent = lastName;
  newRow.insertCell(3).textContent = age;
  newRow.insertCell(4).textContent = email;
  newRow.insertCell(5).textContent = phoneNumber;

  // Clear the input fields
  document.getElementById("first_name").value = "";
  document.getElementById("last_name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phoneNumber").value = "";

  updateSerialNumbers();
}

// Function to update serial numbers of all rows
function updateSerialNumbers() {
  let table = document
    .getElementById("dataTable")
    .getElementsByTagName("tbody")[0];
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[0].textContent = i + 1;
  }
}
