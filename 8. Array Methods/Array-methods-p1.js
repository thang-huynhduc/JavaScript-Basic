// Có khá nhiều phương thức - Methods khi xử lý dữ liệu mảng trong JS.
//Dưới đây ta sẽ tập trung vào những phương thức quan trọng và được dùng nhiều trong thực tế.
// Part 1: push(), pop(), shift(), unshift(), forEach(), map(), reduce(), find(), some(), filter().

// Tạo một mảng chứa các số từ 1 đến 5:
let numbers = [1, 2, 3, 4, 5];
console.log('Độ dài của numbers: ', numbers.length); // Kết quả: 5

// Push() - Thêm phần tử vào cuối mảng.
numbers.push(77);
console.log('After push 77: ', numbers); // Kết quả: [1, 2, 3, 4, 5, 77]

// Pop() - Xóa phần tử cuối cùng của mảng.
numbers.pop();
console.log('After pop: ', numbers); // Kết quả: [1, 2, 3, 4, 5]

// Shift() - Xóa phần tử đầu tiên của mảng.
numbers.shift();
console.log('After shift: ', numbers); // Kết quả: [2, 3, 4, 5]

// Unshift() - Thêm phần tử vào đầu mảng.
numbers.unshift(1); // Thêm giá trị true vào đầu mảng.
console.log('After unshift: ', numbers); // Kết quả: [1, 2, 3, 4, 5]

// forEach() - Duyệt qua từng phần tử của mảng.
console.log(`Start forEach:`);
numbers.forEach( (number, index) => {
    console.log(`Position ${index} - Value ${number}`);
});

// Map() - Tạo một mảng mới với các phần tử được biến đổi từ mảng gốc, ví dụ bình phương từng phần tử.
console.log(`Start map:`);
let squareNumbers = numbers.map( (number) => {
    return number * number;
});
// Tạo ra mảng mới squareNumbers, không liên quan tới mảng numbers.
// Mảng numbers không thay đổi.
console.log(`Square numbers: `, squareNumbers); // Kết quả: [1, 4, 9, 16, 25]

// Filter() - Tạo một mảng mới với các phần tử thỏa mãn điều kiện. Ví dụ lấy số chẵn.
console.log(`Start filter:`);
let evenNumbers = numbers.filter( (number) => {
    return number % 2 === 0;
});
console.log(`Even numbers: `, evenNumbers); // Kết quả: [2, 4]

// Find() - Tìm phần tử đầu tiên thõa mãn điều kiện.
console.log(`Start find:`);
let foundNumbers = numbers.find( (number) => {
    return number > 2;
});
console.log(`Found number: `, foundNumbers); // Kết quả: 3

// Reduce() - Tính toán một giá trị dựa trên tất cả các phần tử của mảng, ví dụ tính tổng các phần tử trong mảng.
let sum = numbers.reduce( (total, number) => {
    return total + number;
});
console.log(`Sum of numbers: `, sum); // Kết quả: 15

// Some() - Kiểm tra xem có ít nhất một phần tử thõa mãn điều kiện hay không, trả về boolean.
let hasEvenNumber = numbers.some( (number) => {
    console.log(`Checking number: `, number); // Hàm some() sẽ dừng lại ngay khi tìm thấy phần tử.
    return number % 2 === 0;
});
console.log(`Has even number: `, hasEvenNumber); // Kết quả: true