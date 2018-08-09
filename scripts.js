/*
Manish K. Singh

*/


const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const butmov = document.createElement('button');
butmov.setAttribute('class', 'but');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/vehicles', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(vehicle => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = vehicle.name;

      const p = document.createElement('p');
      vehicle.description = vehicle.description.substring(0, 300);
      p.textContent = `${vehicle.description}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not getting Vehicle List!`;
    app.appendChild(errorMessage);
  }
}

request.send();
