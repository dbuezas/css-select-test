const tableEl = document.createElement('table');
tableEl.style = 'margin: 10px; border: 1px solid grey; padding: 3px; font-size: 10px;';
document.body.prepend(tableEl);
module.exports = (row) => {
  const rowEl = document.createElement('tr');
  tableEl.append(rowEl);
  row.forEach(str => {
    const cellEl = document.createElement('th');
    cellEl.style = 'border: 1px solid grey; padding: 5px;';
    rowEl.append(cellEl);
    cellEl.innerText = str;
  });
};