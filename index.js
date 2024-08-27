// const canvas = document.getElementById('mazeCanvas');
// const ctx = canvas.getContext('2d');

// const maze = [
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
//     [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
//     [1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
//     [1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
//     [1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
//     [1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
//     [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
//     [1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// ];

// const tileSize = 50;
// const player = {
//     x: 1,
//     y: 1,
//     size: tileSize - 10
// };

// function drawMaze() {
//     for (let row = 0; row < maze.length; row++) {
//         for (let col = 0; col < maze[row].length; col++) {
//             if (maze[row][col] === 1) {
//                 ctx.fillStyle = 'black';
//             } else {
//                 ctx.fillStyle = 'white';
//             }
//             ctx.fillRect(col * tileSize, row * tileSize, tileSize, tileSize);
//         }
//     }
// }

// function drawPlayer() {
//     ctx.fillStyle = 'red';
//     ctx.fillRect(player.x * tileSize + 5, player.y * tileSize + 5, player.size, player.size);
// }

// function movePlayer(dx, dy) {
//     const newX = player.x + dx;
//     const newY = player.y + dy;

//     if (maze[newY][newX] === 0) {
//         player.x = newX;
//         player.y = newY;
//     }
// }

// document.addEventListener('keydown', (event) => {
//     switch (event.key) {
//         case 'ArrowUp':
//             movePlayer(0, -1);
//             break;
//         case 'ArrowDown':
//             movePlayer(0, 1);
//             break;
//         case 'ArrowLeft':
//             movePlayer(-1, 0);
//             break;
//         case 'ArrowRight':
//             movePlayer(1, 0);
//             break;
//     }
//     updateGame();
// });

// function updateGame() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawMaze();
//     drawPlayer();
// }

// // Initial drawing of the game
// updateGame();


// const canvas = document.getElementById('mazeCanvas');
// const ctx = canvas.getContext('2d');

// // Load the background image
// const background = new Image();
// background.src = 'background.png';

// let maze = [
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     [1, 0, 0, 0, 1, 0, 3, 0, 0, 2],
//     [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
//     [1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
//     [1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
//     [1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
//     [1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
//     [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
//     [1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// ];

// const tileSize = 50;
// const player = {
//     x: 1,
//     y: 1,
//     size: tileSize - 10
// };

// // Function to draw the background image
// function drawBackground() {
//     ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
// }

// function drawMaze() {
//     for (let row = 0; row < maze.length; row++) {
//         for (let col = 0; col < maze[row].length; col++) {
//             if (maze[row][col] === 1) {
//                 ctx.fillStyle = 'rgba(0, 0, 0, 1)'; // Semi-transparent black
//             } else if (maze[row][col] === 0){
//                 ctx.fillStyle = 'rgba(255, 255, 255, 1)'; // Semi-transparent white
//             } else if (maze[row][col] === 2) {
//                 ctx.fillStyle = 'rgba(255, 0, 255, 1)';
//             } else {
//                 ctx.fillStyle = 'rgba(25, 100, 255, 1)';
//             }
//             ctx.fillRect(col * tileSize, row * tileSize, tileSize, tileSize);
//         }
//     }
// }

// function drawPlayer() {
//     ctx.fillStyle = 'red';
//     ctx.fillRect(player.x * tileSize + 5, player.y * tileSize + 5, player.size, player.size);
// }

// function movePlayer(dx, dy) {
//     const newX = player.x + dx;
//     const newY = player.y + dy;

//     if (maze[newY][newX] === 0) {
//         player.x = newX;
//         player.y = newY;
//     } else if (maze[newY][newX] === 2) {
//         player.x = newX;
//         player.y = newY;
//         document.getElementById('p').style.color = "black";
//     }

//     if(maze[newY][newX] === 3) {
//         let input = prompt("1 + 1");

//         if (input == 2) {
//             maze[1][6] = 0;
//             next;
//         }
//     }
// }

// document.addEventListener('keydown', (event) => {
//     switch (event.key) {
//         case 'ArrowUp':
//             movePlayer(0, -1);
//             break;
//         case 'ArrowDown':
//             movePlayer(0, 1);
//             break;
//         case 'ArrowLeft':
//             movePlayer(-1, 0);
//             break;
//         case 'ArrowRight':
//             movePlayer(1, 0);
//             break;
//     }
//     updateGame();
// });

// function updateGame() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawBackground(); // Draw the background first
//     drawMaze();       // Draw the maze on top of the background
//     drawPlayer();     // Draw the player on top of the maze
// }

// // Ensure the background image is loaded before starting the game
// background.onload = function() {
//     updateGame();
// };



// const canvas = document.getElementById('mazeCanvas');
// const ctx = canvas.getContext('2d');

// // Load the background image
// const background = new Image();
// background.src = 'background.png';

// let maze = [
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     [1, 0, 0, 0, 1, 0, 3, 0, 0, 2],
//     [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
//     [1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
//     [1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
//     [1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
//     [1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
//     [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
//     [1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// ];

// const tileSize = 50;
// const player = {
//     x: 1,
//     y: 1,
//     size: tileSize - 10
// };

// // Function to draw the background image
// function drawBackground() {
//     ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
// }

// function drawMaze() {
//     for (let row = 0; row < maze.length; row++) {
//         for (let col = 0; col < maze[row].length; col++) {
//             if (maze[row][col] === 1) {
//                 ctx.fillStyle = 'rgba(0, 0, 0, 1)'; // Solid black for walls
//             } else if (maze[row][col] === 0){
//                 ctx.fillStyle = 'rgba(255, 255, 255, 1)'; // Solid white for paths
//             } else if (maze[row][col] === 2) {
//                 ctx.fillStyle = 'rgba(255, 0, 255, 1)'; // Special tile color
//             } else if (maze[row][col] === 3) {
//                 ctx.fillStyle = 'rgba(25, 100, 255, 1)'; // Puzzle tile color
//             }
//             ctx.fillRect(col * tileSize, row * tileSize, tileSize, tileSize);
//         }
//     }
// }

// function drawPlayer() {
//     ctx.fillStyle = 'red';
//     ctx.fillRect(player.x * tileSize + 5, player.y * tileSize + 5, player.size, player.size);
// }

// function movePlayer(dx, dy) {
//     const newX = player.x + dx;
//     const newY = player.y + dy;

//     if (maze[newY][newX] === 0) {
//         player.x = newX;
//         player.y = newY;
//     } else if (maze[newY][newX] === 2) {
//         player.x = newX;
//         player.y = newY;
//         document.getElementById('p').style.color = "black";
//     } else if (maze[newY][newX] === 3) {
//         let input = prompt("1 + 1");
//         if (input == "2") {
//             maze[newY][newX] = 0; // Unlock the tile
//             player.x = newX;      // Allow player to move
//             player.y = newY;
//         }
//     }

//     updateGame(); // Redraw the game after movement or changes
// }

// document.addEventListener('keydown', (event) => {
//     switch (event.key) {
//         case 'ArrowUp':
//             movePlayer(0, -1);
//             break;
//         case 'ArrowDown':
//             movePlayer(0, 1);
//             break;
//         case 'ArrowLeft':
//             movePlayer(-1, 0);
//             break;
//         case 'ArrowRight':
//             movePlayer(1, 0);
//             break;
//     }
//     updateGame();
// });

// function updateGame() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawBackground(); // Draw the background first
//     drawMaze();       // Draw the maze on top of the background
//     drawPlayer();     // Draw the player on top of the maze
// }

// // Ensure the background image is loaded before starting the game
// background.onload = function() {
//     updateGame();
// };



const canvas = document.getElementById('mazeCanvas');
const ctx = canvas.getContext('2d');

// Load the background image
const background = new Image();
background.src = 'background.png';

let maze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 3, 0, 0, 2],
    [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 3, 0, 3, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

const tileSize = 50;
const player = {
    x: 1,
    y: 1,
    size: tileSize - 10,
};

let baseXp = 0;
let playerLevel = 0;

// Function to draw the background image
function drawBackground() {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
}

function drawMaze() {
    for (let row = 0; row < maze.length; row++) {
        for (let col = 0; col < maze[row].length; col++) {
            if (maze[row][col] === 1) {
                ctx.fillStyle = 'rgba(0, 0, 0, 1)'; // Solid black for walls
            } else if (maze[row][col] === 0) {
                ctx.fillStyle = 'rgba(255, 255, 255, 1)'; // Solid white for paths
            } else if (maze[row][col] === 2) {
                ctx.fillStyle = 'rgba(255, 0, 255, 1)'; // Special tile color
            } else if (maze[row][col] === 3) {
                ctx.fillStyle = 'rgba(25, 100, 255, 1)'; // Puzzle tile color
            }
            ctx.fillRect(col * tileSize, row * tileSize, tileSize, tileSize);
        }
    }
}

function drawPlayer() {
    ctx.fillStyle = 'red';
    ctx.fillRect(player.x * tileSize + 5, player.y * tileSize + 5, player.size, player.size);
}

function movePlayer(dx, dy) {
    const newX = player.x + dx;
    const newY = player.y + dy;

    if (maze[newY][newX] === 0) {
        player.x = newX;
        player.y = newY;
    } else if (maze[newY][newX] === 2) {
        player.x = newX;
        player.y = newY;
        document.getElementById('text').style.color = "black";
        location.reload();
    } else if (maze[newY][newX] === 3) {
        let input = prompt("1 + 1");
        if (input == "2") {
            maze[newY][newX] = 0; // Unlock the tile
            player.x = newX;      // Allow player to move
            player.y = newY;
            baseXp += 2;
        }
    }

    updateGame(); // Redraw the game after movement or changes
}

// Level Up Function
function levelUp() {
    switch (true) {
        case baseXp >= 2 :
            playerLevel = 1;
            baseXp = 0;
            break;
        case baseXp >= 4 :
            playerLevel = 2;
            baseXp = 0;
            break;
    }
    // CATATAN
    /*
        Level ambil dari session
        
    */
}

function drawLevel() {
    document.getElementById('level').textContent = `Level = ${playerLevel}`;
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            movePlayer(0, -1);
            break;
        case 'ArrowDown':
            movePlayer(0, 1);
            break;
        case 'ArrowLeft':
            movePlayer(-1, 0);
            break;
        case 'ArrowRight':
            movePlayer(1, 0);
            break;
    }
});

function updateGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground(); // Draw the background first
    drawMaze();       // Draw the maze on top of the background
    drawPlayer();     // Draw the player on top of the maze
    drawLevel();
    levelUp();
}

// Ensure the background image is loaded before starting the game
background.onload = function () {
    updateGame();
};