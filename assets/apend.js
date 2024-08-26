const mainContainer=document.getElementById('main-container');
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText='Animal Name';
section.appendChild(h1);

const ul=document.createElement('ul');
const li1=document.createElement('li');
li1.innerText='Royle'
ul.appendChild(li1);


section.appendChild(ul);
mainContainer.appendChild(section);