  /**
   * Part 1: create(), assign(), defineProperty(), defineProperties(), keys(), values(), entries(), fromEntries().
   */

  // 1. Object.creare() tạo ra một đối tượng mới dựa trên đối tượng cho trước làm nguyên mẫu - prototype.
  const person = {
    greet() {
      console.log('Hello world')
    }
  }
  const Thang = Object.create(person) // Tạo ra một đối tượng Thang mới dựa trên person làm prototype. Vì vậy đối tượng 'Thang' sẽ kế thừa class greet() từ 'person'

  Thang.name = 'Thang Huynh Duc'
  Thang.greet()
  console.log('Name:', Thang.name)

  /**
   *  2. Object.assign() sao chép tất cả các thuộc tính của một hoặc nhiều đối tượng nguồn ban đầu vào đối tượng đích, trả về đối tượng đích.
   *  - Nếu một thuộc tính đã tồn tại trong đối tượng địch thì nó sẽ bị ghi đè.
   *  - Phương thức này sẽ làm thay đổi đối tượng đích, không làm thay đổi đối tượng nguồn.
   */
  const targetObj = { a: 1, b: 2 }
  const originObj = { b: 3, d: 4 }
  const resultObj = Object.assign(targetObj, originObj)
  console.log('Object.assign() > targetObj', targetObj) // { a: 1, b: 3, d: 4 } -> Object.assign() sửa đổi targetObj trực tiếp.
  console.log('Object.assign() > originObj', originObj) // { b: 3, d: 4 } originObj không thay đổi
  console.log('Object.assign() > resultObj', resultObj) // { a: 1, b: 3, d: 4 } -> resultObj  là tham chiếu đến targetObj, không phải là một đối tượng mới.

  /**
   * 3. Object.defineProperty() thêm hoặc sửa đổi "MỘT" thuộc tính trên một đối tượng, nó có thể kiểm soát chính xác hành vi của thuộc tính đó.
   */
  const Obj1 = {}
  Object.defineProperty(Obj1, 'name', {
    value: 'Thang Huynh Duc',
    writable: false // Không cho thay đổi giá trị
  })
  console.log('Obj1 name: ', Obj1.name) // Thang Huynh Duc
  Obj1.name = "Modified" // Không thể thay đổi giá trị vì writable = false
  console.log('Obj1 name after: ', Obj1.name) // Thang Huynh Duc

  /**
   *  4. Object.defineProperties() thêm hoặc sửa đổi "Nhiều" thuộc tính trên một đối tượng cùng 1 lúc, cũng có thể kiểm soát hành vi của thuộc tính đó.
  */
  const Obj2 = {}
  Object.defineProperties(Obj2, {
    name: {
      value: "Thang Huynh",
      writable: false
    },
    age: {
      value: 18,
      writable: true
    }
  })
  console.log("Name: ", Obj2.name) // Thang Huynh
  console.log("Age: ", Obj2.age) // 18
  Obj2.name = "Modifed" // Không có tác dụng vì writable = false
  Obj2.age = 21 // Có tác dụng vì writable = true
  console.log("Name: ", Obj2.name) // Thang Huynh
  console.log("Age: ", Obj2.age) // 21

  /**
   * 5. Object.keys() trả về một mảng 'Array' chứa toàn bộ các tên thuộc tính của một đối tượng
   */
  const ObjKey = {name: 'Thang', age: 21, a: 'haha' }
  console.log('Object.key(): ', Object.keys(ObjKey)) //  [ 'name', 'age', 'a' ]

  /**
   * 6. Object.values() trả về một mảng (Array) chứa toàn bộ thuộc tính của một đối tượng
   */
  const ObjValues = {name: 'Thang', age: 21, a: 'haha' }
  console.log('Object.values(): ', Object.values(ObjValues)) // [ 'Thang', 21, 'haha' ]

  /**
   * 7. Object.entries() trả về 1 mảng gồm các cặp [key, value] của các thuộc tính, của một đối tượng.
   */
  const Objentr = { a:1, b:2, c:3}
  console.log('Object.entries(): ', Object.entries(Objentr)) // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

  /**
   * 8. Object.fromEntries() chuyển đổi một mảng các cặp [key, value] thành 1 đối tượng ( Ngược lại của Object.entries() ).
   */
  const ObjFromEntries = [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
  console.log('Object.fromEntries(): ', Object.fromEntries(ObjFromEntries)) //  { a: 1, b: 2, c: 3 }