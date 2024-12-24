//WPU Programming Challenge
//Day 11/366
//https://www.codewars.com/kata/5672a98bdbdd995fad00000f/

const rps = (p1, p2) => {
  if (p1 === p2) return 'Draw!';

  switch (p1) {
    case 'scissors':
      switch (p2) {
        case 'paper':
          return 'Player 1 won!';
        case 'rock':
          return 'Player 2 won!';
      }
    case 'paper':
      switch (p2) {
        case 'rock':
          return 'Player 1 won!';
        case 'scissors':
          return 'Player 2 won!';
      }
    case 'rock':
      switch (p2) {
        case 'scissors':
          return 'Player 1 won!';
        case 'paper':
          return 'Player 2 won!';
      }
  }
}