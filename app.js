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

};



// Event Listener for adding student
document.querySelector("#book-form").addEventListener('submit', (e) => {
  // Form Inputs
  const firstNameInput = document.querySelector("#fname").value;
  const lastNameInput = document.querySelector("#lname").value;
  const rollNumberInput = document.querySelector("#rollNo").value;

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
  
  // Preventing default form behaviour
  e.preventDefault();
});







