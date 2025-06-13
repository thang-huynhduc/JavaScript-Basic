// For...In: Dùng để lặp qua các thuộc tính của đối tượng.
let devoloper = {
    username: 'Thang Huynh Dev',
    age: 20,   
    experience: 0,
    country: 'Vietnam',
    hobby: ['Coding', 'Reading', 'Traveling']
}

for (let key in devoloper) {
    console.log(`${key}: ${devoloper[key]}`); // Nếu in bình thường thì sẽ được chuyển (convert) sang String.
    if (key === 'hobby') {
        console.log('Hobby:', devoloper[key]);
    }
}

// Thay vì chúng ta phải console.log từng thuộc tính của đối tượng, chúng ta có thể sử dụng vòng lặp For...In để lặp qua tất cả các thuộc tính của đối tượng.
console.log('username', devoloper.username);
console.log('age', devoloper.age);
console.log('experience', devoloper.experience);    
console.log('country', devoloper.country);
console.log('hobboy', devoloper.hobby);
