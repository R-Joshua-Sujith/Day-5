const obj = {
    name: "Joshua",
    age: "23",
    email: "rjoshuasujith@gmail.com"
}


const keys = Object.keys(obj);

for (let x of keys) {
    console.log(`${x} ${obj[x]}`);
}

