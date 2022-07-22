

const generatePage = (employeeData) => {
  const pageHtmlArr = [];
  const head = `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,400;0,600;1,200;1,400;1,600&family=Playfair+Display:ital,wght@0,600;1,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  
  <main>
  <div class ="col-12 jumbotron text-center">
  <header> 
  <h1>Team Profile</h1>
  </header>
  </div>
      <div class="container">
        <div class="row">`

  pageHtmlArr.push(head);
  console.log(employeeData)


  for(let i = 0; i < employeeData.length; i++){
    console.log(employeeData[i])
    let card;
    if(employeeData[i].officeNumber) {
      console.log('Manager')
      card = `
    <div class="card mb-3" style = "max-width: 18rem;">
    <div class="card-header">
      <h3>${employeeData[i].name}</h3>
    </div>
    <div class="card-body">
      <h5 class="card-title">Manager</h5>
      <p class="card-text">
        <span class="card-info">Employee ID:</span> ${employeeData[i].id}<br>
          <span class="card-info">Email:</span> ${employeeData[i].email}<br>
        <span class="card-info">Office Number:</span>${employeeData[i].officeNumber}
      </p>
      </div>
      </div>
  
      `;
      pageHtmlArr.push(card);
    } else if (employeeData[i].github) {
      console.log('engineer')
      card = `
      <div class="card mb-3" style="max-width: 18rem;">
      <div class="card-header">
        <h3>${employeeData[i].name}</h3>
      </div>
      <div class="card-body">
        <h5 class="card-title">Engineer</h5>
        <p class="card-text">
          <span class="card-info">Employee ID:</span> ${employeeData[i].id}<br>
          <span class="card-info">Email:</span> ${employeeData[i].email}<br>
          <span class="card-info">Github Username:</span> @${employeeData[i].github}
        </p>
      </div>
      </div>
      `;
      pageHtmlArr.push(card)
    } else {
      console.log('intern')
      card = `
      <div class="card mb-3" style="max-width: 18rem;">
      <div class="card-header">
        <h3>${employeeData[i].name}</h3>
      </div>
      <div class="card-body">
        <h5 class="card-title">Intern</h5>
        <p class="card-text">
        <span class="card-info">Employee ID:</span> ${employeeData[i].id}<br>
        <span class="card-info">Email:</span> ${employeeData[i].email}<br>
        <span class="card-info"><i>Attending</span> <b>${employeeData[i].schoolName}</b></i>
        </p>
      </div>
      </div>
      `;
      pageHtmlArr.push(card)
    }
  }

  const footer = ` 
      </div>
      </div>
      </div >
    </main >
  </body >

  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>

</html >
`
pageHtmlArr.push(footer);
const completeHtml = pageHtmlArr.join('')

  return completeHtml;
}



module.exports = { generatePage }
