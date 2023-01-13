function solution(genres, plays) {
    const gMap = new Map()
    
    genres
        .map((genre, index) => [genre, plays[index]])
        .forEach(([genre, play], index) => {
            const data = gMap.get(genre) || { total: 0, songs: []}
            gMap.set(genre, {
                total: data.total + play,
                songs: [...data.songs, {play, index}]
                    .sort((a, b) => b.play - a.play)
                    .slice(0, 2)
            })
    })

    return [...gMap]
        .sort((a, b) => b[1].total - a[1].total)
        .flatMap(item => item[1].songs)
        .map(item => item.index)
}