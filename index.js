let id = 0;

document.getElementById('add').addEventListener('click', () => {
    new Text();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-full-name').value;   
})