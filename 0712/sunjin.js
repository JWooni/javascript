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


  moves.forEach((move) => {
    newBoard[move - 1].forEach((col) => {
      if (col != 0) {
        prizeBox.push(col);
        col = 0;
      }
    });
  });
  function popping(box) {
    for (let index = 0; index+1 < box.length; index++) {
      var toy = box[index];
      var toy2 = box[index]; //
      if (toy === toy2) {
        box.splice(index, 2);
        answer++;
        popping(box);
      }
    }
  }
  popping(prizeBox);

  return answer * 2;
}

solution([[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]], [1, 5, 3, 5, 1, 2, 1, 4])