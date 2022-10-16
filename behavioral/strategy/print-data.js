function printdata(printStrategy) {
    let data = [
        "mango",
        "orange",
        "apple"
    ]
    printStrategy(data)
}

/**
 * 
 * @param {string[]} data 
 */
function bottomToTopPrintStrategy(data) {
    for(let i = data.length - 1; i >= 0; i--) {
        console.log(data[i])
    }
}

function topToBottomPrintStrategy(data) {
    for(let row of data) {
        console.log(row)
    }
}

function rightToLeftPrintStrategy(data) {
    for(let row of data) {
        let mirrorredRow = [...row].reverse().join('')
        console.log(mirrorredRow)
    }
}

console.log('top to bottom\n')
printdata(topToBottomPrintStrategy)

console.log('\n\nbottom to top\n')
printdata(bottomToTopPrintStrategy)

console.log('\n\nright to left\n')
printdata(rightToLeftPrintStrategy)

