

const generatePage = (employeeData) => {
  const pageHtmlArr = [];
  const head = `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous”>
    <link rel="stylesheet" href="style.css">
  </head>
  
  <main>
      <div class="container">
        <div class="row justify-content-center" id="cards">`

  pageHtmlArr.push(head);
  console.log(employeeData)


  for(let i = 0; i < employeeData.length; i++){
    console.log(employeeData[i])
    let card;
    if(employeeData[i].officeNumber) {
      console.log('Manager')
      card = `
       < div class="card bg-light mb-3" style = "max-width: 18rem;" >
    <div class="card-header">${employeeData[i].name}</div>
    <div class="card-body">
      <h5 class="card-title">Manager</h5>
      <p class="card-text">
        Employee id: ${employeeData[i].id}
        Email: ${employeeData[i].email}<br>

      </p>
      </div>
  
      `;
      pageHtmlArr.push(card);
    } else if (employeeData[i].github) {
      console.log('engineer')
      card = `
      <div class="card bg-light mb-3" style="max-width: 18rem;">
      <div class="card-header">${employeeData[i].name}</div>
      <div class="card-body">
        <h5 class="card-title">Engineer</h5>
        <p class="card-text">
          Employee id: ${employeeData[i].id}
          Email: ${employeeData[i].email}<br>
          Github Username: @${employeeData[i].github}
        </p>
      </div>
      `;
      pageHtmlArr.push(card)
    } else {
      console.log('intern')
      card = `
      <div class="card bg-light mb-3" style="max-width: 18rem;">
      <div class="card-header">${employeeData[i].name}</div>
      <div class="card-body">
        <h5 class="card-title">Intern</h5>
        <p class="card-text">
        Employee id: ${employeeData[i].id}
        Email: ${employeeData[i].email}<br>
        Attending ${employeeData[i].schoolName}
        </p>
      </div>
      `;
      pageHtmlArr.push(card)

    }
  }
  console.log(pageHtmlArr)
}



module.exports = { generatePage }

 

    
//        ${generateManager(manager)}

//         </div>
//       </div>
//     </main>
//   </body>

//   <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>

// </html>
// `
// }