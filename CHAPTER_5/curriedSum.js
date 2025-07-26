// Write a function sum()()() that keeps chaining and finally evaluates with .value()


function sum(n) {
    let sum = n;
    function outerSum(n) {
        sum += n;
        function innerSum(n) {
            sum += n;
        }
        innerSum['value'] = () => sum;
        return innerSum;

    }

    return outerSum;
}

const result = sum(2)(3)(4).value();