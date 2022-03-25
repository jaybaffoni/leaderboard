const data = [
    {
        name: 'Jay',
        highScore: 1000
    },
    {
        name: 'Nancy',
        highScore: 200
    },
    {
        name: 'Kelly',
        highScore: 1245
    },
    {
        name: 'Michael',
        highScore: 1001
    },
    {
        name: 'Clara',
        highScore: 42
    },
    {
        name: 'Fina',
        highScore: 220
    }
]


export const getRankings = () => {
    return data.sort((a, b) => b.highScore - a.highScore);
}