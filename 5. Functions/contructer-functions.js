// Constructor Function - Hàm khởi tạo, hàm tạo: Sử dụng để tạo đối tượng mới. Thường được kết hợp với từ khóa new.
function devoloper(username) {
    this.username = username;
    this.greet = function(){
        console.log(`Hello, I am ${this.username}`);
    }
}

const ThangHuynhDev = new devoloper('Huynh Duc Thang');
ThangHuynhDev.greet(); // Hello, I am Huynh Duc Thang

const HuynhDev = new devoloper('Huynh Huynh');
HuynhDev.greet(); // Hello, I am Huynh Huynh