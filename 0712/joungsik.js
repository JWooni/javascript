function solution(board, moves) {
  let answer = 0;
  let x = 0,
    y = 0;
  let results = [];

  for (let i = 0; i < moves.length; i++) {
    let move = moves[i];
    y = move - 1;
    for (let j = 0; j < board.length; j++) {
      let row = board[j];
      if (row[y] !== 0) {
        results.push(row[y]);
        board[j][y] = 0;
        break;
      }
    }
  }

  const reset = () => {
    for (let z = 0; z < results.length; z++) {
      let result = results[z];
      if (z > 0 && results[z - 1] === results[z]) {
        results.splice(z - 1, 2);
        answer += 2;
        reset();
        break;
      }
    }
  };

  reset();
  return answer;
}
