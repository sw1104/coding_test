function solution(s) {
    const ss = s.split(' ');

    for(let i = 0; i <= ss.length; i++){
        if(ss.includes('Z')){
            ss.splice(ss.indexOf('Z')-1, 2)
        }
    } 
  return ss.map(n => parseInt(n)).reduce((a, v) => a + v, 0);
}