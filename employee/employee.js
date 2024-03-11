const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

// We use the axios for getting the data from the url.
// axios.get(url).then((response) => {
//   const employees = response.data;

//   const resultChallenge = employees
//     .map(filterChina)
//     .map(filterWomen)
//     .sort("salario");
//   console.log(resultChallenge[0]);
// });

// Challenge
const filterChina = (employee) => employee.pais === "China";
const filterWomen = (employee) => employee.genero === "F";
const minSalary = (emp, atualEmployee) =>
  emp.salario < atualEmployee.salario ? emp : atualEmployee;
axios.get(url).then((response) => {
  const employees = response.data;

  const resultChallenge = employees
    .filter(filterChina)
    .filter(filterWomen)
    .reduce(minSalary);

  console.log(resultChallenge);
});
