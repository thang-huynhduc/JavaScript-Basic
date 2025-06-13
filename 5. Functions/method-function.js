// Method Function - Hàm phương thức: Là hàm được định nghĩa/khai báo bên trong một đối tượng, được coi là một phương thức của đối tượng
// Nhớ lại lesson4 - reference-type.js

let devoloper = {
    username: "Thang Huynh Duc",
    age: 21,
    greet: function(){
        console.log(`Hello, I am ${this.username} and I am ${this.age} years old.`);
    },
    greetArrowFn: () => {
        console.log(`Hello, I am ${this.username} and I am ${this.age} years old.`); //Arrow Function sẽ không dùng được this
    }
}
devoloper.greet(); // Hello, I am Thang Huynh Duc and I am 21 years old.
devoloper.greetArrowFn(); // Hello, I am undefined and I am undefined years old.
// Như chúng ta thấy, khi sử dụng Arrow Function, this sẽ không trỏ tới đối tượng mà nó đang nằm trong, mà sẽ trỏ tới đối tượng mà nó được khai báo ban đầu.