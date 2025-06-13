// Phần 2: toLowerCase(), toUpperCase(), trim(), replace(), math(regex), search(regex), startsWith(), endsWith().

// 1. toLowerCase(): Chuyển đổi tất cả ký tự trong  chuỗi thành chữ thường.
const str1 = 'Thắng dep trai';
console.log(str1.toLowerCase()); // Kết quả: thắng dep trai

// 2. toUpperCase(): Chuyển đổi tất cả ký tự trong chuỗi thành chữ hoa.
const str2 = 'Thắng dep trai';
console.log(str2.toUpperCase()); // Kết quả: THẮNG DEP TRAI

// 3. trim(): Xóa khoảng trắng (space) ở đầu và cuối chuỗi. Không làm thay đổi chuỗi ban đầu.
const str3 = '   Thắng Dep Trai   ';
console.log('After trim(): ',str3.trim()); // Kết quả: Thắng dep trai
console.log (str3);

// 4. replace(): Thay thế chuỗi con trong chuỗi bằng chuỗi khác. Nó chỉ thay thế lần xuất hiện đầu tiên, muốn thay thế toàn bộ thì phải dùng biểu thức chính quy (regex) với flag g (golobal).
const str4 = 'Hello World World World World';
// Chỉ thay đổi chuỗi đầu tiên.
const replaceStr = str4.replace('Hello', 'Good Bye');
console.log('After Replace 1: ', replaceStr); // Kết quả: Good Bye World World World World
// Muốn thay đổi toàn bộ thì
const replaceAllStr = str4.replace(/World/g , 'Good');
console.log('After Replace All: ', replaceAllStr); // Kết quả:  Hello Good Good Good Good

// 5. match(regex): Tìm kiếm và trả về một mảng chứa kết quả khớp với biểu thức chính quy (regex) trong chuỗi. Nếu không có kết quả khớp, nó trả về null. Chỉ trả về kết quả của lần đầu tiên xuất hiện. Muốn trả về tất các kết quả thì phải dùng flag g (global).
const str5 = "Thang Huynh - Handsome Man in the World Man Man Man Man";
const matches = str5.match(/Man/g);
// Dùng flag global để tìm hết tất cả các chuỗi cần tìm
console.log('After Match(): ', matches); // Kết quả: [ 'Man', 'Man', 'Man', 'Man', 'Man' ]
console.log('Before Match(): ', str5);

// 6. search(regex): Tìm kiếm và trả về vị trí của kết quả khớp với biểu thức chính quy (regex) trong chuỗi. Nếu không có kết quả khớp, nó trả về -1. Chỉ trả về vị trí của lần đầu tiên xuất hiện. Muốn trả về vị trí của tất cả kết quả thì phải dùng flag g (global).
const str6 = "Thang Huynh - Handsome Man in the World Man Man Man Man";
const foundIndex = str6.search(/Man/g);
console.log('After Search(): ', foundIndex); // Kết Quả 23.


// 7. startsWith(): Kiểm tra xem chuỗi có bắt đầu bằng một chuỗi con cụ thể hay không. Trả về boolen.
const str7 = "Thang Huynh - Handsome Man in the World Man Man Man Man";
const isStart = str7.startsWith('Thang Huynh');
console.log('Found: ', isStart); // true

// 8. endsWith(): Kiểm tra xem chuỗi có kết thúc bằng một chuỗi con cụ thể hay không. Trả về boolen.
const str8 = "Thang Huynh - Handsome Man in the World Man Man Man Man";
const isEnd = str8.endsWith('Man');
console.log('Found: ',isEnd); // true