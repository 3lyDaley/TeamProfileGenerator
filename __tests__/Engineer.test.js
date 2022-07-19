const Engineer = require('../lib/Engineer');

test('Complete employee object', () => {
  const engineer = new Engineer('Ely', 23, 'ely@daley.com', 'GithubUser102');

  expect(engineer.github).toEqual(expect.any(String));

})

test('Gets github', () => {
  const engineer = new Engineer('Ely', 23, 'ely@daley.com', 'GithubUser102');

  expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
})

test('Gets Role', () => {
  const engineer = new Engineer('Ely', 23, 'ely@daley.com', 'GithubUser102');

  expect(engineer.getRole()).toBe("Engineer");

})