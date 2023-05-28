const obj = {
    name: "Joshua",
    age: "23",
    email: "rjoshuasujith@gmail.com"
}

const keys = Object.keys(obj);

keys.forEach((key, index) => {
    console.log(`${key}: ${obj[key]}`)
})