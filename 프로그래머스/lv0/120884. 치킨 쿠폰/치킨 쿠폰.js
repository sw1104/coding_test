const solution = ck => {
    const sol2 = cp => {
        if(cp < 10) return 0
        const sv = Math.floor(cp / 10)
        return sv + sol2(sv + (cp % 10));
    }
    return sol2(ck)
}

