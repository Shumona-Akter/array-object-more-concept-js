// 1-50 number show the output
// 2. which number are divisilble 3 . show foo
// 2. which number are divisilble 5 . show bar
// 2. which number are divisilble 3 and 5 . show foobar


    for (let i = 1; i < 50; i++){
        const element = i;
        if (element % 3 == 0 && element % 5 == 0){
            console.log("foobar")
        }
        else if (element % 3 == 0 ){
            console.log("foo")
        }
        else if (element % 5 == 0 ){
            console.log("bar")
        }
        else{
            console.log(element)
        }
    };


// 1- 100
for(let i = 0; i <= 100; i++){
    if(i % 10 === 0 && i % 15 == 0){
        console.log("fizzbazz")
    }
    else if(i % 10 === 0){
        console.log("bazz");
    }
    else if(i % 15 === 0){
        console.log("fizz");
    }
    else{
        console.log(i)
    }
} 
  