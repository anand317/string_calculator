

export function add(numbers){
    if (numbers==='') return 0
    let delimiter = /[\n,]/; 
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = new RegExp(parts[0].substring(2)); 
        numbers = parts.slice(1).join("\n"); 
    }
    const num=numbers.split(delimiter).map(Number)
    const negatives = num.filter(num => num < 0);

    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }
    return num.reduce((sum,current)=>sum+current,0)
}