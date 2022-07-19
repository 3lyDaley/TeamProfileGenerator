const Employee = require('../lib/Employee');

test('Create employee', () => {
  const employee = new Employee('Jens', 'email@email.com');

  expect(employee.name).toBe('Jens');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toBe('email@email.com');
  
})