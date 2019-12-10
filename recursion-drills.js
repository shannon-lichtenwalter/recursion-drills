function countingSheep(num) {
  if (num === 0) {
    console.log('All sheep jumped over the fence');
  }
  else {
    console.log(`${num}: Another sheep jumps over the fence`);
    countingSheep(num - 1);
  }
}

// countingSheep(3);


function powerCalculator(integer, exp) {
  if (exp < 0) {
    return 'exponent should be >= 0';
  }
  else {
    if (exp === 0) {
      return 1;
    }
    return integer * powerCalculator(integer, exp - 1);
  }
}

// console.log(powerCalculator(10, 3));

function stringReverser(string) {

  if (string === '') {
    return ('');
  }
  return string.charAt(string.length - 1) + stringReverser(string.slice(0, -1));
}

//console.log(stringReverser('Hello World'))

function nthTriangular(num) {

  if (num === 1) {
    return 1;
  }

  return num + nthTriangular(num - 1);
}

//console.log(nthTriangular(9))

function stringSplitter(string, arr = []) {
  if (!string.includes('/')) {
    arr.push(string);
    return arr;
  }
  let index = string.indexOf('/');
  let word = string.slice(0, index);
  arr.push(word);
  let newString = string.slice(index + 1, string.length);
  return stringSplitter(newString, arr);
}

// console.log(stringSplitter('hi/hey/hello/20'));

function fibonacci(n) {
  if (n <= 0) {
    return 0;
  }

  if (n <= 2) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}


// console.log(fibonacci(7))

function factorial(number) {

  if (number === 0) {
    return 1;
  }

  return number * factorial(number - 1);
}

//console.log(factorial(5))

function wayOutOfMaze(maze, x, y, history = []) {

  if (maze[x][y] === ('e')) {
    return history;
  }
  else {
    if (x + 1 < maze.length && history[(history.length - 1)] !== 'U') {
      if ((maze[x + 1][y] === (' ')) || (maze[x + 1][y] === ('e'))) {
        history.push('D');
        ++x;
        return wayOutOfMaze(maze, x, y, history);
      }

    }
    if (y - 1 >= 0 && history[(history.length - 1)] !== 'R') {
      if ((maze[x][y - 1] === (' ')) || (maze[x][y - 1] === ('e'))) {
        history.push('L');
        --y;
        return wayOutOfMaze(maze, x, y, history);
      }

    }
    if (x - 1 >= 0 && history[(history.length - 1)] !== 'D') {
      if ((maze[x - 1][y] === (' ')) || (maze[x - 1][y] === ('e'))) {
        history.push('U');
        --x;
        return wayOutOfMaze(maze, x, y, history);
      }

    }
    if (y + 1 < maze[0].length && history[(history.length - 1)] !== 'L') {
      if ((maze[x][y + 1] === (' ')) || (maze[x][y + 1] === ('e'))) {
        history.push('R');
        ++y;
        return wayOutOfMaze(maze, x, y, history);
      }

    }
  }
}

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', 'e'],
  [' ', ' ', ' ']
];

// console.log(wayOutOfMaze(maze, 0, 0));


//Need to work on All ways out of maze

// function allWaysOutOfMaze(maze, x, y, history = [], direction = '') {
//   if (x < 0 || y < 0) {
//     return;
//   }
//   if (x >= maze.length || y >= maze[0].length) {
//     return;
//   }

//   if (maze[x][y] === ('e')) {
//     console.log(history);
//     return;
//   }

//   if (maze[x][y] === ' ') {
//     history.push(direction);
//     maze[x][y] === 's';
//     wayOutOfMaze(maze, x + 1, y, history, 'D');
//     wayOutOfMaze(maze, x, y - 1, history, 'L');
//     wayOutOfMaze(maze, x - 1, y, history, 'U');
//     wayOutOfMaze(maze, x, y + 1, history, 'R');
//     maze[x][y] = '';
//   }
// }

// console.log(allWaysOutOfMaze(mySmallMaze, 0, 0));

//how could we refactor/make this work for more than 4 letter words?
// function anagram(word, array = []) {
//   if (word.length !== 4) {
//     return '4 letter words only please';
//   }

//   if (array.length === 24) {
//     return array;
//   }
//   if (!array.includes(word)) {
//     array.push(word);
//   }
//   let newWord = word[0] + word[1] + word[3] + word[2];
//   if (array.includes(newWord)) {
//     newWord = word[0] + word[3] + word[1] + word[2];
//     if (array.includes(newWord)) {
//       newWord = word[0] + word[3] + word[2] + word[1];
//       if (array.includes(newWord)) {
//         newWord = word[0] + word[2] + word[3] + word[1];
//         if (array.includes(newWord)) {
//           newWord = word[0] + word[2] + word[1] + word[3];
//           if (array.includes(newWord)) {
//             newWord = word[1] + word[2] + word[3] + word[0];
//           }
//         }
//       }
//     }
//   }
//   return anagram(newWord, array);
// }

// console.log(anagram('east'));

function anagrams(prefix, str) {
  if (str.length <= 1) {
    console.log(`The anagram is ${prefix}${str}`);
  } else {
    for (let i = 0; i < str.length; i++) {
      let currentLetter = str.substring(i, i + 1);
      let previousLetters = str.substring(0, i);
      let afterLetters = str.substring(i + 1);
      anagrams(prefix + currentLetter, previousLetters + afterLetters);
    }
  }
}
function printAnagram(word) {
  //console.log(`The word for which we will find an anagram is ${word}`);
  anagrams(':', word);
}

// printAnagram('hello');

function chart(data, depth=0){
  let indent = (' ').repeat(depth*4);
  Object.keys(data).forEach(key => {
    console.log(indent + key);
    chart(data[key], depth+1);
  });
}

let organization = {
  'Zuckerberg': {
    'Schroepfer': {
      'Bosworth': {
        'Steve': {},
        'Kyle': {},
        'Andra': {}
      },
      'Zhao': {
        'Richie': {},
        'Sofia': {},
        'Jen': {}
      },
      'Badros': {
        'John': {},
        'Mike': {},
        'Pat': {}
      },
      'Parikh': {
        'Zach': {},
        'Ryan': {},
        'Tes': {}
      }
    },
    'Schrage': {
      'VanDyck': {
        'Sabrina': {},
        'Michelle': {},
        'Josh': {}
      },
      'Swain': {
        'Blanch': {},
        'Tom': {},
        'Joe': {}
      },
      'Frankovsky': {
        'Jasee': {},
        'Brian': {},
        'Margaret': {}
      }
    },
    'Sandberg': {
      'Goler': {
        'Eddie': {},
        'Julie': {},
        'Annie': {}
      },
      'Hernandez': {
        'Rowi': {},
        'Inga': {},
        'Morgan': {}
      },
      'Moissinac': {
        'Amy': {},
        'Chuck': {},
        'Vinni': {}
      },
      'Kelley': {
        'Eric': {},
        'Ana': {},
        'Wes': {}
      }
    }
  }
};

// console.log(chart(organization));

function traverseA(data, depth = 0) {
  let indent = ' '.repeat(depth * 4);
  Object.keys(data).forEach(key => {
    console.log(indent + key);
    traverseA(data[key], depth + 1);
  });
}
// traverseA(organization);
//another version of the solution
function traverseB(node, indent = 0) {
  for (var key in node) {
    console.log(' '.repeat(indent), key);
    traverseB(node[key], indent + 4);
  }
}

// traverseB(organization);

function binaryRep(num) {
  if (num <= 0) {
    return '';
  }
  let binary = num % 2;
  return binaryRep(Math.floor(num / 2)) + binary;
}

// console.log(binaryRep(25));