function solution(board, moves) {
  var newBoard = [];
  var prizeBox = [];
  var answer = 0;

  for (let i = 0; i < board.length; i++) {
    let temp = []
    for (let j = 0; j < board.length; j++) {
      temp.push(board[j][i]);
    }
    newBoard[i] = temp;
  }

  console.log(newBoard)

  moves.forEach((move) => {
    let y =move-1;
    console.log(y)
    var array = newBoard[y]
    
    for (let index = 0; index < array.length; index++) {
      if (array[index] !== 0) {
        prizeBox.push(array[index]);
        array[index] = 0;
        newBoard[y]=array;
        break;//정식이의 어드바이스
    }
  }
  });

  console.log(prizeBox)
  function popping(box) {
    for (let index = 0; index < box.length; index++) {
      var toy = box[index];
      var toy2 = box[index+1]; //이렇게 해도 된다
      if (toy === toy2) {//undefined일때 걸러짐
        box.splice(index, 2);
        answer++;
        popping(box);
      }
    }
  }
  popping(prizeBox);

  return answer * 2;
}