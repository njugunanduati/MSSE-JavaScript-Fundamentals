const passing = 75;

const getCurrent = () => {
    return parseInt(prompt("Current grade?"));
}

const getWeight = () => {
    return parseInt(prompt("Current weight?"));
}

const calculate = (c, w) => {
    let finalScore = ((passing - (1 - (w/100))*c) /(w/100))
    let rounded = Math.round(finalScore)
    return `You must get a score of ${rounded}% to pass.`
}

alert(calculate(getCurrent(), getWeight()))