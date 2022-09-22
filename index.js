function receivesAFunction (action) {
    return action();
}





function returnsANamedFunction() {
    return returnsAnAnonymousFunction;
}





function returnsAnAnonymousFunction() {
    return function () {
        console.log(`Hello!`);
    };
}
