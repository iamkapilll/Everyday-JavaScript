let str = "lol";
for(let i = 0; i<=4; i++){
    console.log("Outer:", i);
    for(let j = 0; j< str.length; j++){
        console.log("    Inner:", str[j]);
    }
}
