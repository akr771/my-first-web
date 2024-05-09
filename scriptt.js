const table = document.getElementById('table');
const newRow = document.createElement('tr');
const cell1 = document.createElement('td');
cell1.textContent = 'John';

const cell2 = document.createElement('td');
cell2.textContent = '30';

newRow.appendChild(cell1);
newRow.appendChild(cell2);

table.appendChild(newRow);
console.log(5);

const btt=document.getElementById('btt');
 btt.addEventListener('click',function() {
    window.alert('You are great');
});
