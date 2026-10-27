// Fout gevonden: _______________ result. list, script niet gelinkt en de komma's vergeten
// Oplossing: _______________ result werd results, list werd li, script gelinkt en de komma's erachter gezet in users.json

fetch('./users.json')
  .then(r => r.json())
  .then(users => {
    const list = document.querySelector('#results');
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      list.appendChild(li);
    });
  })
  .catch(error => console.error('Fout:', error));
