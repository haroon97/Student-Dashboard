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
  ui.addStudent(student);
  
  // Preventing default form behaviour
  e.preventDefault();
});







