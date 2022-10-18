function solution(id_pw, db) {
    const id = id_pw[0];
    const pw = id_pw[1];
    
    if(db.find(([_id, _pw]) => _id === id && _pw === pw)) {
        return 'login'
    } else if(db.find(([_id, _pw]) => _id === id && _pw !== pw)) {
        return 'wrong pw'
    } else {
        return 'fail'
    }
}