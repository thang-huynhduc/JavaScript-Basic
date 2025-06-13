//1. Object (Đối Tượng): Đại diện cho một tập các thuộc tính và phương thức.
let devoloper = {
    username: "Thang Huynh Duc",
    age: 21,
    greet: function(){
        console.log('Hello, I am ' + this.username + ' and I am ' + this.age + ' years old.');
        console.log(`Hello, I am ${this.username} and I am ${this.age} years old.`);
    }
}
devoloper.greet();
console.log(devoloper.username);
console.log('----------------------');

//2. Array (Mảng): Một loại đối tượng đặc biết để để lưu trữ danh sách giá trị.
let colors = ['red', 'green', 'blue', 'yellow'];
console.log(colors);
console.log('color 1:', colors[0]);
console.log('color 2:', colors[1]);
console.log('-------------------');

//3. Function (Hàm): Đại diện cho các hàm xử lý, cũng được coi là một loại đối tượng đặc biệt.
function weatherInfo(city, temperature){
    console.log(`The weather in ${city} is ${temperature} degree.`);
}
weatherInfo('Hanoi', 30);
console.log('-------------------');