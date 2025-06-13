// - Có khá nhiều methods - phương thức khi xử lý dữ liệu String trong JS.
// Dưới đây, ta sẽ tập trung vào các phương thức quan trọng, và được dùng nhiều trong thực tế ( Phần 1): 
// charAt(): concat(): includes(): indexOf(): slice(): split(): substring():

// 1. charAt(): Trả về ký tự ở vị trí index trong chuỗi. Vị trí index bắt đầu từ 0. Trả về String rỗng nếu vị trí index không tồn tại.
const str1 = 'Hello World';
console.log(str1.charAt(0)); // Kết quả: H
console.log(str1.charAt(6)); // Kết quả: W
console.log(str1.charAt(70)); // Kết quả: ''
console.log(typeof str1.charAt(70)); // Kết quả: string

// 2. concat(): Dùng để nối chuỗi với chuỗi khác hoặc với giá trị khác. Trả về chuỗi mới sau khi nối. Không làm thay đổi chuỗi gốc ban đầu.
const str2 = 'Hello';
const str3 = 'World';
const str4 = '!!!';
const concatResult = str2.concat(' ', str3, str4);
const concatRe = str2.concat("-").concat(str3).concat(str4);
console.log(`Kết quả concat(): ${concatRe}`); // Kết quả: Hello-World!!!
console.log(`Kết quả concat(): ${concatResult}`); // Kết quả: Hello World!!!

// 3. includes(): Kiểm tra xem chuỗi có chứa chuỗi con hay không. Trả về true nếu có, ngược lại trả về false.
const str5 = 'Thang Huynh Duc';
const isInclude = str5.includes('Huynh');
console.log(`Kết quả includes(): ${isInclude}`); // Kết quả: true

// 4. indexOf(): Trả về vị trí index đầu tiên của chuỗi con trong chuỗi. Nếu không tìm thấy trả về -1.
const str6 = 'Thang Huynh Duc';
const indexResult = str6.indexOf('Duc');
console.log('Kết quả indexOf():', indexResult); // Kết quả: 12

// 5. split(): Chia chuỗi thành một mảng các chuỗi con dựa trên một ký tự nhận diện. Không làm thay đổi chuỗi gốc.
const str7 = 'JS, TS, Python, Java, Ruby';
const splitResult = str7.split(', ');
console.log('Kết quả split():', splitResult); // Kết quả: ['JS', 'TS', 'Python', 'Java', 'Ruby']
console.log(`Kiểu dữ liệu của splitResult: ${typeof splitResult}`); // Kết quả: object

// 6. slice(): Trả về chuỗi con của chuỗi ban đầu từ vị trí startIndex đến endIndex (Không bao gồm endIndex). Chuỗi ban đầu không bị thay đổi.
const str8 = 'Thang Huynh Duc';
const sliceResult1 = str8.slice(6, 11);
console.log(`Kết quả slice_01: ${sliceResult1}`); // Kết quả: Huynh
// Đảo ngược lại thì không đươc
const sliceResult2 = str8.slice(11, 6);
console.log(`Kết quả slice_02: ${sliceResult2}`); // Kết quả: ''

// 7. substring(): Khá giống slice(), nó cũng trả về một chuỗi con từ chuỗi gốc ban đầu, từ chỉ số startIndex đến endIndex (Không bao gồm EndIndex).
// Tuy nhiên khác với silde() ở một điểm: substring() sẽ hoán đổi startIndex và endIndex nếu chúng ta vô tình để startIndex > endIndex.
const str9 = 'Thang Huynh Duc';
const subStringResult = str9.substring(6, 11);
console.log(`Kết quả substring(): ${subStringResult}`); // Kết quả: Huynh
const subStringResult2 = str9.substring(11, 6);
console.log(`Kết quả substring(): ${subStringResult2}`); // Kết quả: Huynh
