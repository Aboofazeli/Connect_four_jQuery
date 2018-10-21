var playerOne = prompt("Enter player one's name:");
var playerOneColor = 'rgb(86, 151, 255)';

var playerTwo = prompt("Enter player two's name:");
var playerTwoColor = 'rgb(237, 45, 73)';

var table = $('table tr');

function changeColor(rowIndex, colIndex, color){
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color', color);

}

function returnColor(rowIndex, colIndex){
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');

}


function checkButton(colIndex){
  var colorReport=returnColor(5,colIndex);
  for (var i = 5; i>-1 ; i--){
    colorReport=returnColor(i, colIndex);
    if (colorReport === 'rgb(128, 128, 128)')
      return i;
  }
}

function colorMatchCheck(one, two, three, four){
  return (one === two && one === three && one === four && one !== 'rgb(128, 128, 128)' && one !== undefined);
}

function horizontalWinCheck(){
  for (var row = 0; row <6 ; row++){
    for (var col = 0; col < 4; col++) {
      if (colorMatchCheck(returnColor(row, col), returnColor(row, col+1), returnColor(row, col+2), returnColor(row, col+3))) {
        // return reportWin(row, color);
        return true;
      }
      else
        continue;

      }
    }
}

function verticalWinCheck(){
  for (var col = 0; col <7 ; col++){
    for (var row = 0; row < 3; row++) {
      if (colorMatchCheck(returnColor(row, col), returnColor(row+1, col), returnColor(row+2, col), returnColor(row+3, col))){
        // return reportWin(row, color);
        return true;
      }
      else
        continue;

      }
    }
}

function diagonalWinCheck(){
  for (var col = 0; col <5 ; col++){
    for (var row = 0; row < 7; row++) {
      if (colorMatchCheck(returnColor(row, col), returnColor(row+1, col+1), returnColor(row+2, col+2), returnColor(row+3, col+3))){
        // return reportWin(row, color);
        return true;
      }
      else if (colorMatchCheck(returnColor(row, col), returnColor(row+1, col-1), returnColor(row+2, col-2), returnColor(row+3, col-3))){
        // return reportWin(row, color);
        return true;
      }
      else
        continue;

      }
    }
}


var currentPlayer = 1;
var currentName = playerOne;
var currentColor = playerOneColor;

$('h3').text(playerOne + " Its your turn!!")

$('.board button').on('click', function(){
  var col=$(this).closest('td').index();
  var buttomAvail =checkButton(col);
  changeColor(buttomAvail, col, currentColor);
  if (horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck()){
    $('h1').text(currentName +" You Have Won!!");
    $('h3').fadeOut('fast');
    $('h2').fadeOut('fast');
  }
  currentPlayer = currentPlayer * -1;
  console.log(currentPlayer)

  if (currentPlayer === 1){
    currentName = playerOne;
    $('h3').text(playerOne + " Its Your Turn!!");
    currentColor = playerOneColor;

  }
  else {
    currentName = playerTwo;
    $('h3').text(playerTwo +" Its Your Turn!!");
    currentColor = playerTwoColor;
  }

})

$('#restart').on('click', function(){
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 7; j++) {
      changeColor(i,j, 'rgb(128, 128, 128)')
    }

  }
  $('h1').text("Welcome to Connect Four!");
  $('h2').text("Conncet Four Chips to Win!");
  $('h3').text("Lets Start!!");
})
