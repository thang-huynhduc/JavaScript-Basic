// For...Of: Dùng để lặp qua các giá trị của một Iterable Object (Những đối tượng có thể lặp), phổ biến như Array, String, Map, Set, arguments, NodeList, v.v.
// Interable Object: https://www.w3schools.com/js/js_iterables.asp
let colors = ['Red', 'Green', 'Blue', 'Yellow', 'Pink', 'Purple', 'Black', 'White', 'Gray', 'Brown'];
for (let color of colors) {
    console.log('Color:', color);
}

let username = 'Thang Huynh Dev';
for (let char of username) {
    console.log(`Char: ${char}`);
}


let devoloper = {
    username: 'Thang Huynh Dev',
    age: 20,   
    experience: 0,
    country: 'Vietnam',
    hobby: ['Coding', 'Reading', 'Traveling']
}

for ( let key of devoloper) { // Error vì Json Object không phải là một Iterable Object.
    console.log(`${key}: ${devoloper[key]}`);
}