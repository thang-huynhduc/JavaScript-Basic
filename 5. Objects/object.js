// Trong JS, Đối tượng (object) là một cấu trúc dữ liệu linh hoạt và mạnh mẽ, cho phép lưu trữ và quản lý các dữ liệu phức tạp.
// Đối tượng bao gồm các cặp key-value (khóa-giá trị). Mỗi khóa key là một chuỗi và giá trị có thể là bất kỳ loại dữ liệu nào, bao gồm các các đối tượng khác (nested object).

// Có 2 cách để tạo Object với object literal và từ khóa new Object().

// 1. Object literal.
let devoloper = {
    username: "Thang Huynh Duc",
    age: 21,
    greet: function(){
        console.log(`Hello, I am ${this.username} and I am ${this.age} years old.`);
    },
    skill: ["HTML", "CSS", "JS"],
    // Nested Object
    positions: {
        frontEnd: "Front-end Developer",
        backEnd: "Back-end Developer",
        fullStack: true,
    }
}
console.log(devoloper);


// 2. Từ khóa new Object().
let devoloper2 = new Object();
devoloper2.username = "ThangDev";
devoloper2.age = 21;
devoloper2.greet = function(){
    console.log(`Hello, I am ${this.username} and I am ${this.age} years old.`);
}
devoloper2.skill = ["HTML", "CSS", "JS"];
devoloper2.positions = {
    frontEnd: "Front-end Developer",
    backEnd: "Back-end Developer",
    fullStack: true,
}
console.log(devoloper2);

// Để truy cập vào các giá trị của Object, chúng ta sử dụng dấu chấm (.) hoặc dấu ngoặc vuông ([]).
console.log(devoloper.username); // Thang Huynh Duc
console.log(devoloper["age"]); // 21

// Thêm, sửa, xóa thuộc tính của Object.
devoloper.gender = "male"; // Thêm
devoloper.age = 22; // Sửa
delete devoloper.gender; // Xóa
console.log(devoloper);

// Lặp qua các thuộc tính của Object dùng for...in.
// Đối tượng chứa các thuộc tính là method function (Lesson08)