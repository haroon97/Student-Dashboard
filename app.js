// Student class
class Student {
  constructor(firstName, lastName, rollNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.rollNumber = rollNumber;
  }
};

// UI class
class UI {
  addStudent(student) {
    const list = document.querySelector("#student-list");
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${student.firstName}</td>
      <td>${student.lastName}</td>
      <td>${student.rollNumber}</td>
      <td><a href="#" class="delete">X</a></td>
    `;
    list.appendChild(row);
  }

  alertMessage(message, className) {
    // selecting container parent
    const container = document.querySelector(".container");
    // creating element
    const alert = document.createElement("p");
    alert.className = className;
    alert.appendChild(document.createTextNode(message));
    // grabbing form element
    const form = document.querySelector("#book-form");
    container.insertBefore(alert, form);
    // Timeout method for removing alert message
    setTimeout(() => {
      alert.remove();
    }, 2000);
    console.log(alert);
  }

  clearFields(firstName, lastName, rollNumber) {
    firstName.value = '';
    lastName.value = '';
    rollNumber.value = '';
  }

  deleteStudent(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }

};



// Event Listener for adding student
document.querySelector("#book-form").addEventListener('submit', (e) => {
  // Form Inputs

  let firstName = document.querySelector("#fname");
  let lastName = document.querySelector("#lname");
  let rollNumber = document.querySelector("#rollNo");

  let firstNameInput = firstName.value;
  let lastNameInput = lastName.value;
  let rollNumberInput = rollNumber.value;

  // Instanriate student
  const student = new Student(firstNameInput, lastNameInput, rollNumberInput);

  // Instantiate UI
  const ui = new UI();

  // Add student
  if (firstNameInput === '' || lastNameInput === '' || rollNumberInput === '') {
    ui.alertMessage("Fields cannot be empty!", "error");
  } else {
    ui.addStudent(student);
    ui.alertMessage("Student Added!", "success");
  }

  ui.clearFields(firstName, lastName, rollNumber);
  
  // Preventing default form behaviour
  e.preventDefault();
});

// Event listener for deleting student
document.querySelector("#student-list").addEventListener('click', (e) => {
  const ui = new UI();
  ui.deleteStudent(e.target);
  ui.alertMessage("Student Deleted!", "success");
  e.preventDefault();
});






