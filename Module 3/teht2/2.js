const ul = document.getElementById('target');

const li1 = document.createElement('li');
li1.textContent = 'First item';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.textContent = 'second item';
li2.className = ("my-item");
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.textContent = 'Third item';
ul.appendChild(li3);
