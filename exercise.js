// We want to add to the student object a nested object called personalData, that has 3 properties: name, surname, age. Print in the console the personalData object.

// const student = {
// id: 1,
// school: "Liceo",
// year: 3,
// };

const student = {
  id: 1,
  school: "Liceo",
  year: 3,
};

student["personalData"] = {
  name: "Aiman",
  surname: "Al Eryany",
  age: "23",
};

console.log(student.personalData);
