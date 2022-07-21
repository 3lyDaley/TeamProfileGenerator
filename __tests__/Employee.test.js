const Employee = require('../lib/Employee');

test('Create employee', () => {
  const employee = new Employee('Ely', 1, 'email@email.com');

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));

})
test('Gets name', () => {
  const employee = new Employee('Ely', 23, 'ely@daley.com');

  expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
})

test('Gets ID', () => {
  const employee = new Employee('Ely', 23, 'ely@daley.com');

  expect(employee.getId()).toEqual(23);
})

test('Gets email', () => {
  const employee = new Employee('Ely', 23, 'ely@daley.com');

  expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
})

test('Gets Role', () => {
  const employee = new Employee('Ely', 23, 'ely@daley.com');

  expect(employee.getRole()).toBe('Employee');
})