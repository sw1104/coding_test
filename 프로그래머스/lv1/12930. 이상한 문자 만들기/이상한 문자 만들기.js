function solution(s) {
    let a = s.split(' ');
    let arr = [];
    let result = []; 

  for(let i = 0; i < a.length; i++){
    arr.push(a[i].split(''));
    }
  console.log(arr)
  for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr[i].length; j++){
        if(j % 2 === 0){
          arr[i][j] = arr[i][j].toUpperCase();
        } else if (j % 2 === 1){
            arr[i][j] = arr[i][j].toLowerCase();
        }
      }
    result.push(arr[i].join(''));
    }
		return result.join(' ')
  }