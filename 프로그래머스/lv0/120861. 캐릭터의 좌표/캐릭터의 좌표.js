function solution(keyinput, board) {    
    let result = [0, 0]
    for(let i = 0; i < keyinput.length; i++){
        if(keyinput[i] === 'up' && result[1]+1 <= parseInt(board[1]/2)) result[1] += 1
        if(keyinput[i] === 'down' && result[1]-1 >= -parseInt(board[1]/2)) result[1] -= 1
        if(keyinput[i] === 'left' && result[0]-1 >= -parseInt(board[0]/2)) result[0] -= 1 
        if(keyinput[i] === 'right' && result[0]+1 <= parseInt(board[0]/2)) result[0] += 1
    }
    return result
}