const Employee = require('../lib/Employee');

test('Create employee', () => {
  const employee = new Employee('Jens', 1, 'email@email.com');

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));

})