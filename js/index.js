// const requestURL = 'https://jsonplaceholder.typicode.com/users';

// function sendRequest(method, url) {
// 	return fetch(url).then(response => {
// 		return response.json()
// 	})
// }

// sendRequest('GET', requestURL)
// .then(data => console.log(data))
// .catch(err => console.log(err))

// sendRequest('GET', requestURL)
// .then(data => {
// 	const newData = data.map(person =>{return person.name})
// 	// newData.sort()
// 	console.log(newData)	
// })


function sortTableUpwards(n) {
  let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  dir = "asc";
  while (switching) {

    switching = false;
    rows = table.rows;	

    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;      
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function sortTableTopDown(n) {
  let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  dir = "asc";
  while (switching) {

    switching = false;
    rows = table.rows;

    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch= true;
          break;
        }			
      }
    }
    
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;      
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    } 
  }
}

// const peoples = [
//   {id: 1, firstName: 'Leanne', lastName: 'Graham', email: 'Sincere@april.biz', phone: '1-770-736-8031 x56442'},
//   {id: 2, firstName: 'Ervin', lastName: 'Howell', email: 'Shanna@melissa.tv', phone: '010-692-6593 x09125'},
//   {id: 3, firstName: 'Clementine', lastName: 'Bauch', email: 'Nathan@yesenia.net', phone: '1-463-123-4447'},
//   {id: 4, firstName: 'Patricia', lastName: 'Lebsack', email: 'Julianne.OConner@kory.org', phone: '493-170-9623 x156'},
//   {id: 5, firstName: 'Chelsey', lastName: 'Dietrich', email: 'Lucio_Hettinger@annie.ca', phone: '(254)954-1289'},
//   {id: 6, firstName: 'Dennis', lastName: 'Schulist', email: 'Karley_Dach@jasper.info', phone: '1-477-935-8478 x6430'},
//   {id: 7, firstName: 'Kurtis', lastName: 'Weissnat', email: 'Telly.Hoeger@billy.biz', phone: '210.067.6132'},
//   {id: 8, firstName: 'Nicholas', lastName: 'Runolfsdottir', email: 'Sherwood@rosamond.me', phone: '586.493.6943 x140'},
//   {id: 9, firstName: 'Glenna', lastName: 'Reichert', email: 'Chaim_McDermott@dana.io', phone: '(775)976-6794 x41206'},
//   {id: 10, firstName: 'Clementina', lastName: 'DuBuque', email: 'Rey.Padberg@karina.biz', phone: '024-648-3804'},
// ]

// const toHTML = people => ` 
//     <tr>
//       <td>${people.firstName}</td>
//       <td>${people.lastName}</td>
//       <td>${people.email}</td>
//       <td>${people.phone}</td>
//       <td class="img">
//         <a href="#" class="btn-primary"><img src="img/envelope.png"></a>
//         <a href="#" class="btn-danger"><img src="img/cross.png"></a>
//       </td>
//     </tr>
// `

// function render() {
//   const html = peoples.map(toHTML).join('')
//   document.querySelector('#people').innerHTML = html 
// }

// render()

const sendModal = $.modal({
  title: 'Send massege',
  closable: true,
  width: '400px',
  content: '<p>Writte your massage</p><textarea name="" id="" cols="40" rows="5"></textarea>',
  footerButtons: [
    {text: 'Ok', type: 'primary', handler() {
      sendModal.close()
    }},
    {text: 'Cancel', type: 'danger', handler() {
      sendModal.close()
    }}
  ]
})

document.addEventListener('click', event => {
  event.preventDefault()
  const btnType = event.target.dataset.btn

  if(btnType === 'send') {
    sendModal.open()
  }
})

const deleteModal = $.modal({
  title: 'Delete users',
  closable: true,
  width: '400px',
  content: '<p>Are you sure you want to delete the user?</p>',
  footerButtons: [
    {text: 'Ok', type: 'primary', handler() {
      deleteModal.close()
    }},
    {text: 'Cancel', type: 'danger', handler() {
      deleteModal.close()
    }}
  ]
})

document.addEventListener('click', event => {
  event.preventDefault()
  const btnType = event.target.dataset.btn

  if(btnType === 'delete') {
    deleteModal.open()
  }
})
