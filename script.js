function factorialFn() {
    
    a = parseInt(document.getElementById("num1").value);
    let fact = 1;

    let i = 1;

    for(i=1; i<=a; i++) {
        fact *= i;
    }

    document.getElementById("resultShow").value="The Factorial is: "+fact;

}