function iteration() {
    for (i = 0; i <= 5; i++) {
        console.log("ishan");
    }
}
iteration();

function greater() {
    let a = 1;
    let b = 3;

    if (a < b) {
        console.log("b is greater");
    } else {
        console.log("a is greater");
    }
}
greater();

function hey([a, b, ...c]) {
    console.log(a + b);
    console.log(c);
}
hey([1, 2, 3, 4, 5, 6, 7]);