const sortArr = (n) => {
    const randomArr = () => {
        return [...Array(Math.floor(Math.random() * 100))].map(() => Math.floor(Math.random() * 100));
    }

    let res = [];
    
    for (let i = 0; i < n; i++) { 
        res.push(randomArr())
    }
    
    res.map((arr, i) => {
        if ((i + 1) % 2 === 0) {
            arr.sort((a, b) => a - b)
        } else {
            arr.sort((a, b) => b - a)
        }
    })
    
    return res
}