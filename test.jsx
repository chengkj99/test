
const names = [‘John’, ‘Sarah’, ‘Kevin’, ‘Alice’];
const displayNewHires = (
  <ul>
    {names.map(name => <li>{name}</li> )}
  </ul>
);

ReactDOM.render(
  displayNewHires,
  document.getElementById('root')
);
