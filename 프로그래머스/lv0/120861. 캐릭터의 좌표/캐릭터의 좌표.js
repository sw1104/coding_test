// function solution(keyinput, board) {    
//     let result = [0, 0]
//     for(let i = 0; i < keyinput.length; i++){
//         if(keyinput[i] === 'up' && result[1]+1 <= parseInt(board[1]/2)) result[1] += 1
//         if(keyinput[i] === 'down' && result[1]-1 >= -parseInt(board[1]/2)) result[1] -= 1
//         if(keyinput[i] === 'left' && result[0]-1 >= -parseInt(board[0]/2)) result[0] -= 1 
//         if(keyinput[i] === 'right' && result[0]+1 <= parseInt(board[0]/2)) result[0] += 1
//     }
//     return result
// }

function solution(keyinput, board) {    
    const boardLimit = board.map((x) => Math.floor(x / 2));
    let x = 0
    let y = 0
    for(let i = 0; i < keyinput.length; i++){
        if(keyinput[i] === 'up' && y+1 <= boardLimit[1]) y += 1
        if(keyinput[i] === 'down' && y-1 >= -boardLimit[1]) y -= 1
        if(keyinput[i] === 'left' && x-1 >= -boardLimit[0]) x -= 1 
        if(keyinput[i] === 'right' && x+1 <= boardLimit[0]) x += 1
    }
    return [x,y]
}