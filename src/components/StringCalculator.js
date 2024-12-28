

export function add(numbers){
    if (numbers==='') return 0
    let delimiter = /[\n,]/; 
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = new RegExp(parts[0].substring(2)); 
        numbers = parts.slice(1).join("\n"); 
    }
    const num=numbers.split(delimiter).map(Number)
    return num.reduce((sum,current)=>sum+current,0)
}