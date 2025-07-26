// Write a spy(fn) function that wraps another function and logs how many times it's been called


function spy(fn) {
    let count = 0;
    function decorator(name) {
        fn(name);
        count += 1;
        decorator['count'] = count;
    }
    return decorator;
}

const spiedHello = spy(name => console.log("Hello", name));
spiedHello("Jagadish");
spiedHello("Vivek");
spiedHello("Vedansh");

console.log(spiedHello.count);