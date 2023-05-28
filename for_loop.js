const obj = {
    name: "Joshua",
    age: "23",
    email: "rjoshuasujith@gmail.com"
}


const keys = Object.keys(obj);

for (let i = 0; i < keys.length; i++) {
    console.log(`${keys[i]} ${obj[keys[i]]}`)
}