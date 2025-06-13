// Part 2: concat(), slice(), splice(), every(), findIndex(), toString(), join().

//1. concat(): Dùng để nối 2 hay nhiều mảng lại với nhau. Không làm thay đổi mảng gốc mà trả về mảng mới chứa tất cả phần tử của các mảng được nối.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concatResult = arr1.concat(arr2);
console.log(`Kết quả concat(): ${concatResult}`); // Kết quả: [1, 2, 3, 4, 5, 6]

//2. slide(): Trả về mảng con của mảng ban đầu, từ vị trí startIndex đến endIndex (Không bao gốm EndIndex). Mảng ban đầu không bị thay đổi.
const arr3 = [1, 2, 3, 4, 5, 6];
const slideResult = arr3.slice(1,4);
console.log(`Kết quả slide(): ${slideResult}`); // Kết quả: [2, 3, 4]

//3. splice(): Dùng để thay đổi nội dung của mảng bằng cách xóa, thay thế, hoặc thêm phần tử mới. Sẽ làm thay đổi mảng gốc ban đầu.
const arr4 = [1, 2, 3, 4, 5, 6];
const spliceResult = arr4.splice(1, 3, 5, 6, 88, 99); // Bắt đầu từ vị trí 1, xóa 3 phần tử, thêm 4 phần tử mới vào vị trí mà phần tử bị xóa.
console.log(`Kết quả splice():`, spliceResult); // Kết quả: [2, 3, 4]
console.log('Mảng sau khi thực hiện splice(): ', arr4); // Kết quả: [1, 5, 6, 88, 99, 5, 6]

//4. every(): Kiểm tra xem tất cả các phần tử của mảng có thõa mãn điều kiện của hàm callback mà ta truyền vào hay không. Trả về true nếu tất cả đều thõa mãn, ngược lại trả về false.
const arr5 = [1, 2, 3, 4, 5, 6];
const allPositive = arr5.every( (number) => {
    return number >= 1;
    }
);
// Có thể viết tắt thành
const allPositive2 = arr5.every( num => num > 0)
console.log(`Kết quả every(): ${allPositive}`); // Kết quả: true

// 5. findIndex(): Trả về chỉ số index của phần tử đầu tiên trong mảng thõa mãn điều kiện trong hàm callback. Nếu không có phần tử nào thõa mãn, sẽ trả về -1.
const arr6 = [1, 2, 3, 4, 5, 6];
const indexResult = arr6.findIndex( num => num > 3);
console.log(`Kết quả findIndex(): ${indexResult}`); // Kết quả: 3

// 6. toString(): Nối tất cả các phần tử trong mảng thành chuỗi, mỗi phần tử cách nhau bởi dấu phẩy.
const arr7 = [1, 2, 3, 4, 5, 6];
const stringResult = arr7.toString();
console.log(`Kết quả toString(): ${stringResult}`); // Kết quả: 1,2,3,4,5,6
console.log(`Kiểu dữ liệu của stringResult: ${typeof stringResult}`); // Kết quả: string

// 7. join(): Nối tất cả các phần tử trong mảng thành chuỗi String (khác với toString() ở chỗ có thể chọn ký tự nối giữa các phần tử).
const arr8 = [1, 2, 3, 4, 5, 6];
const joinResult = arr8.join(' X ');
console.log(`Kết quả join(): ${joinResult}`); // Kết quả: 1 X 2 X 3 X 4 X 5 X 6