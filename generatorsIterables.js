const company = {
    employees: ['Max', 'Manu', 'Anna'],
    [Symbol.iterator]: function* employeeGenerator() {
      let currentEmployee = 0;
      while(currentEmployee < this.employees.length) {
        yield this.employees[currentEmployee];
        currentEmployee++;
      }
    }
  };
  
  for (const employee of company) {
    console.log(employee);
  }
  
  console.log([...company]);

  const person = ['Max','Manu'];

  console.log(person);
  