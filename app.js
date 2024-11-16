var maxIceCream = function(costs, coins) {
    costs.sort((a,b) => a-b)
    if(costs[0] > coins) return 0
    let result = 0
    for(let i=0; coins >= 0; i++){
        coins -= costs[i]
        result++
    }
    return result - 1
};