let fruits = ["orange", "lemon", "grape"];
let myOptions = new Set(["orange", "watermelon", "banana"]);

for (let elemen of fruits){
    if(myOptions.has(elemen)){
        console.log(elemen);
        break;
    }else{
        continue;
    }
}
