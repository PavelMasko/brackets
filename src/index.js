module.exports = function check(str, bracketsConfig) {
    const newArrConfig = JSON.parse(JSON.stringify(bracketsConfig));
    const OPEN_BRACKETS = newArrConfig.map(element => element.slice(0, 1)).flat();
    const reversArr = newArrConfig.map(elem => elem.reverse());
    const BRACKETS_PAIR = Object.fromEntries(reversArr);
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        let currentSymbol = str[i];
        let lastElement = stack[stack.length - 1];

        if (BRACKETS_PAIR[currentSymbol] === lastElement && stack.length !== 0) {
            stack.pop()
        } else {
            if (OPEN_BRACKETS.includes(currentSymbol)) {
                stack.push(currentSymbol);
            } else {
                if (stack.length === 0) {
                    return false;
                }

                if (BRACKETS_PAIR[currentSymbol] === lastElement) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }

    }
    return stack.length === 0;
};