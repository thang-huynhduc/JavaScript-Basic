// - JS là ngôn ngữ được định kiểu dữ liệu linh hoạt (Dynamic), điều này sẽ rất tiện lợi nhưng lại đồng nghĩa với việc dễ xảy ra những bug phát sinh trong quá trình phát triển nếu bạn chưa nắm rõ các cốt lõi về kiểu dữ liệu.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#dynamic_and_weak_typing
// Vậy nên, mới có một thứ gọi là TypeScript sinh ra.

let x;
x = 10;
x ="Hello";
x = true;
x = null;
x = undefined;
console.log(x);

// Ví dụ nhanh về sự khác nhau giữa Primitive và Reference Types.
// Primitive Types
let username = "Thang Huynh Duc";
let usernameCopy = username;
usernameCopy = "Thang Huynh Duc - Coppyyy";
console.log('username',username);
console.log('username2',usernameCopy);

// Reference Types
let objectA = { name: "Thang Huynh Duc" };
let objectB = objectA;
objectB.name = "Thang Huynh Duc - Một NewBie";
console.log('objectA', objectA);   
console.log('objectB', objectB);
// In ra cả objectA và objectB đều thay đổi giá trị name thành "Thang Huynh Duc - Một NewBie".
// Điều này xảy ra vì objectA và objectB đều trỏ đến cùng một vùng nhớ.