
const generateTeam = employeeData => {
   return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous”>
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <header>
      <nav class="navbar" id="navbar">
        <span class="navbar-brand text-center">Team Profile</span>
      </nav>
    </header>

    <main>
      <div class="container">
        <div class="row justify-content-center" id="cards">
          ${employeeData
          .filter(({ manager }) => manager)
          .map(({ name, id, email, officeNumber }) => {
            return `
            <div class="card bg-light mb-3" style="max-width: 18rem;">
              <div class="card-header">${name}</div>
              <div class="card-body">
                <h5 class="card-title">Manager</h5>
                <p class="card-text">
                  Employee id: ${id}
                  Email: ${email}<br>
                  Office number: ${officeNumber}
                </p>
              </div>
            `;
          })
          .join('')}

          ${employeeData
            .filter(({ engineer }) => engineer)
            .map(({ name, id, email, github }) => {
              return `
              <div class="card bg-light mb-3" style="max-width: 18rem;">
              <div class="card-header">${name}</div>
              <div class="card-body">
                <h5 class="card-title">Intern</h5>
                <p class="card-text">
                  Employee id: ${id}
                  Email: ${email}<br>
                  Github Username: @${github}
                </p>
              </div>
              `;
            })
            .join('')}
              
          ${employeeData
            .filter(({intern}) => intern)
            .map(({name, id, email, schoolName}) => {
              return `
              <div class="card bg-light mb-3" style="max-width: 18rem;">
              <div class="card-header">${name}</div>
              <div class="card-body">
                <h5 class="card-title">Intern</h5>
                <p class="card-text">
                Employee id: ${id}
                Email: ${email}<br>
                Attending ${schoolName}
                </p>
              </div>
              `;
            })
            .join('')}
              
        </div>
      </div>
    </main>
  </body>
  
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>
`

}





module.exports = {generateTeam}