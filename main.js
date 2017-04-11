var React = require('react'),
    ReactDOM = require('react-dom');

var rows = prompt("Please enter number of rows", "12")
rows = Number(rows)

if (rows == null || rows < 0){
  rows = 12;
  console.log("hello");
}

function Cell (props) {
  return <div {...props} />
}

function CheckerBoard (props) {
  var board = []
  for (var i = 0; i < rows; i++) {
    board.push(<Row style={{height:styles.row.height}} key={i} id={i} />)
  }
  return <div>{board}</div>
}

function Row (props) {
  var row = []
  for (var i = 0; i < rows; i++) {
    if (props.id % 2 == 0){
      if (i % 2 == 0){
        row.push(<Cell key={String(i) + String(props.id)} style={{height:styles.cell.height,width:styles.cell.width,display:styles.cell.display,background:styles.colorA.backgroundColor}} />)
      }
      else {
        row.push(<Cell key={String(i) + String(props.id)} style={{height:styles.cell.height,width:styles.cell.width,display:styles.cell.display,background:styles.colorB.backgroundColor}} />)
      }
    }
    else {
      if (i % 2 == 0){
        row.push(<Cell key={String(i) + String(props.id)} style={{height:styles.cell.height,width:styles.cell.width,display:styles.cell.display,background:styles.colorB.backgroundColor}} />)
      }
      else {
        row.push(<Cell key={String(i) + String(props.id)} style={{height:styles.cell.height,width:styles.cell.width,display:styles.cell.display,background:styles.colorA.backgroundColor}} />)
      }
    }

  }
  return <div {...props}>{row}</div>
}

var styles = {
  row: {height: '20px'},
  cell: {height: '20px', width: '20px', display:'inline-block'},
  colorA: {backgroundColor: 'black'},
  colorB: {backgroundColor: 'red'}
}
if (rows){
  ReactDOM.render(<CheckerBoard />, document.getElementById('app'));
}
