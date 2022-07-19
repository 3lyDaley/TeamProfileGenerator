const Intern = require('../lib/Intern');

test('Complete intern object', () => {
  const intern = new Intern('Ely', 23, 'ely@daley.com', 'BIG College');

  expect(intern.schoolName).toEqual(expect.any(String));
})

test('Gets school name', () => {
  const intern = new Intern('Ely', 23, 'ely@daley.com', 'BIG College');

  expect(intern.getSchoolName()).toEqual(expect.stringContaining(intern.schoolName.toString()));
})

test('Gets Role', () => {
  const intern = new Intern('Ely', 23, 'ely@daley.com', 'BIG College');

  expect(intern.getRole()).toBe("Intern");

})