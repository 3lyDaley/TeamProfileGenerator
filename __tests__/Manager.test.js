const Manager = require('../lib/Manager');


test('Complete Manager object', () => {
  const manager = new Manager('Ely', 23, 'ely@daley.com', 32);

  expect(manager.officeNumber).toEqual(expect.any(Number));
})

test('Gets Office Number', () => {
  const manager = new Manager('Ely', 23, 'ely@daley.com', 32);

  expect(manager.getOfficeNumber()).toEqual(32);
})

test('Gets Role', () => {
  const manager = new Manager('Ely', 23, 'ely@daley.com', 32);

  expect(manager.getRole()).toBe("Manager");

})