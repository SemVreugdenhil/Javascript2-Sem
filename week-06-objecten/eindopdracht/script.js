const users = [
  { name: 'Jan de Vries',  email: 'jan@bedrijf.nl',  role: 'admin', active: true  },
  { name: 'Lisa Bakker',   email: 'lisa@bedrijf.nl', role: 'user',  active: true  },
  { name: 'Tom Visser',    email: 'tom@bedrijf.nl',  role: 'user',  active: false },
  { name: 'Sara Meijer',   email: 'sara@bedrijf.nl', role: 'admin', active: true  },
];

let filter = 'all';


const showUsers = (users) => {
  console.log(users)
  // Gebruik destructuring voor elke user: const { name, email, role, active } = user
  // Toon elke user als een <article> in #users
  
const container = document.querySelector('#users');

container.innerHTML = '';

for (const user of users) {
  const { name, email, role, active } = user;
  let status = 'Inactief';
    if (active) {
      status = 'Actief';
    }
    
container.innerHTML += `
  <article>
    <h3>${name}</h3>
    <p>${email}</p>
    <p>${role}</p>
    <p>${active}</p>
    <!-- zet hier ook email, role en status neer -->
  </article>
`;
}

};

const filterUsers = () => {
  if (filter === 'admin') {
    const admins = users.filter(user => user.role === 'admin');
    showUsers(admins);
  } else {
    showUsers(users);
  }
  // Als filter 'admin' is, toon alleen gebruikers met role === 'admin'
  // Anders toon je alle gebruikers
  // Roep showUsers() aan met de gefilterde lijst
};

document.querySelector('#filter-admin').addEventListener('click', () => {
  filter = 'admin';
  filterUsers();
});
// Maak een eventlistener voor de #filter-admin button
// Zet filter op 'admin' en roep filterUsers() aan

document.querySelector('#filter-all').addEventListener('click', () => {
  filter = 'all';
  filterUsers();
});
// Maak een eventlistener voor de #filter-all button
// Zet filter op 'all' en roep filterUsers() aan

document.querySelector('#user-form').addEventListener('submit', (e) => {
  e.preventDefault();
  document.querySelector('#name').value
  document.querySelector('#email').value
  document.querySelector('#role').value
});

const newUser = {
  ...defaultUser,
  name: ___,
  email: ___,
  role: ___,
};

// Maak een eventlistener voor het #user-form submit event
// Lees naam, email en role uit de invoervelden
// Maak een nieuw user object aan met spread op een default object
// Voeg toe aan de array en roep filterUsers() aan

  users.push(newUser);
  filterUsers();

filterUsers();
