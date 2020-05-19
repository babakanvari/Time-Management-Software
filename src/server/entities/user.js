export class User {
  constructor({ id, firstName, lastName, currentPosition, employmentDate, email }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.currentPosition = currentPosition;
    this.employmentDate = employmentDate;
  }
}