

export function add(numbers){
    if (numbers==='') return 0
    const num=numbers.split(/[\n,]/).map(Number)
    return num.reduce((sum,current)=>sum+current,0)
}