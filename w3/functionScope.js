for (var i = 0; i < 5; i++) {
    let j = 100;
    const k = 200;
    
    if (i < 1) {
        console.log(j);
        console.log(k);    
    }

    console.log(i);
    
}

console.log("final i: " + i);
// undefined!
// console.log("final j: " + j);
// console.log("final k: " + k);