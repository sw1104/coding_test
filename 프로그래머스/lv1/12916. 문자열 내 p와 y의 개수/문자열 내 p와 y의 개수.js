function solution(s){
	// let sl = s.toLowerCase()
	// let arr = sl.split('')
	// let p = [];
	// let y = [];
	// for(let i=0; i < arr.length; i++){
	// if(arr[i] === 'p'){
	// p.push(arr[i])
	// } else if(arr[i] === 'y'){
	// y.push(arr[i])
	// }
	// }
	// if(p.length === 0 && y.length === 0){
	// return true
	// } else if(p.length === y.length){
	// return true
	// } else if(p.length !== y.length){
	// return false
	// }
    return s.match(/p/ig)?.length === s.match(/y/ig)?.length
}