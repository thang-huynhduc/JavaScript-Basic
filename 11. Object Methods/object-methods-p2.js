/**
 * Part 2: freeze(), isFrozen(), seal(), isSealed(), is(), hasOwn(), groupBy().
 */

/**
 * 1. Object.freeze() đóng băng một đối tượng, nghĩa là không cho phép thêm, sửa, xóa các thuộc tính của đối tượng đó.
 */
const Obj1 = { a: 1, b: 2}
Object.freeze(Obj1)
// Các trường hợp thêm, sửa, xóa đều không có tác dụng.
Obj1.c = 3 // Thêm
Obj1.a = 2 // Sửa
delete Obj1.b // Xóa
console.log('After Object.freeze(): ', Obj1) //  { a: 1, b: 2 }

/**
 * 2. Object.isFrozen() dùng để xác định đối tượng có bị đóng băng hay không?. Trả về giá trị Boolen
 */
console.log('isFrozen: ', Object.isFrozen(Obj1))

/**
 * 3. Object.seal() niêm phong một đối tượng, không cho phép thêm hoặc xóa các thuộc tính, nhưng vẫn cho phép sửa đổi các giá trị của object.
 */
const Obj2 = { a: 1, b: 2}
Object.seal(Obj2)
// Các trường hợp thêm, xóa đều không có tác dụng.
Obj2.c = 3 // Thêm => Not
Obj2.a = 2 // Sửa => OK
delete Obj2.b // Xóa => Not
console.log('After Object.seal(): ', Obj2) // { a: 2, b: 2 }

/**
 * 4. Object.isSeal() dùng để xác định đối tượng có bị seal() không? Trả về giá trị Boolen.
 */
console.log('Object.isSealed(): ', Object.isSealed(Obj2)) // true

/**
 * 5. Object.is() so sánh xem 2 giá trị có giống nhau hay không?
 *  - Tương tự như toán tử ===, tuy nhiên sẽ có sự khác biệt trong việc so sánh (NaN) và ( -0 với +0 ).
 */
// So sánh bình thường.
console.log('(Object.is(42, 42): ', Object.is(42, 42))         // true
console.log('Object.is(hello & hi): ',Object.is('hello', 'hi'))  // false
// So sánh NaN
console.log('NaN === NaN: ',NaN === NaN)               // false
console.log('Object.is(NaN, NaN)', Object.is(NaN, NaN))       // true ✅
// So sánh -0 và +0
console.log('+0 === -0', +0 === -0)                 // true
console.log('Object.is(+0, -0)', Object.is(+0, -0))         // false ✅
// So sánh Object
const a = { x: 1 }
const b = { x: 1 }
console.log(a === b)                   // false
console.log(Object.is(a, b))           // false
console.log(Object.is(a, a))           // true

/**
 * 6. Object.hasOwn() kiểm tra xem một đối tượng có chứa một thuộc tính cụ thể hay không.
 */
const Obj3 = { name: 'Thang', Age: 21 }
console.log('Object.hasOwn() > name', Object.hasOwn(Obj3, 'name')) // true
console.log('Object.hasOwn() > Gender', Object.hasOwn(Obj3, 'Gender')) // false
console.log('Object.hasOwn() > Age', Object.hasOwn(Obj3, 'Age')) // true

/**
 * 7. Object.groupBy() sử dụng để nhóm các giá trị trong một đối tượng dựa trên một tiêu chí cụ thể nào đó.
 * - Important Note: Object.groupBy() chỉ mới xuất hiện, cụ thể vào tháng 3 năm 2024, nó mới chỉ hoạt động trên một số trình duyệt phổ biến đã update phiên bản mới nhất.
 * - Hoặc môi trường NodeJS version > v22.x.x
 * - Chi tiết: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy
 * - Node version: https://github.com/nodejs/node/tags
 * - Destructuring: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring
 */
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];

const result = Object.groupBy(inventory, ({ quantity }) =>
  quantity < 6 ? "restock" : "sufficient",
);
console.log(result.restock);
// [{ name: "bananas", type: "fruit", quantity: 5 }]
