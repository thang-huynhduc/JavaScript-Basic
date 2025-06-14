/**
 * Những bài học liên tiếp về 'bất đồng bộ; trong JavaScript:
 * 1. Asynchronous.
 * 2. Callback (Callback Hell).
 * 3. Promise (Promise Hell).
 * 4. Async/await.
 * 5. Event Loop.
 */
// Part 2. Callback và vấn đề Callback Hell.
/**
 * 1. Callback là một hàm được truyền dưới dạng tham số vào một hàm khác. Được gọi sau khi hàm kia thực hiện xong.
 * 2. Sử dụng Callback để giải quyết vấn đề bất đồng bộ - Asynchronous.
 * 3. Ví dụ thực tế dễ hiểu trong việc gọi cái APIs bất đồng bộ để lấy dữ liệu theo mong muốn.
 * 4. Callback Hell nghĩa là Khi các hàm Callback lồng nhau quá nhiều, dẫn đến việc maintain bảo trì code về sau rất khó khăn.
 */

// 1. Callback.
/**
 * 
 * @param { String } name 
 * @param { Function } callback 
 */
const greet = (name, callback) => {
  console.log(`Hello ${name}`)
  callback()
}
greet('Thang', () => {
  console.log('Chào rồii!')
})

// 2. Sử dụng Callback giải quyết Async
// Bước 1: Khởi tạo biến để lưu trữ dữ liệu của file sau khi đọc xong
let fileData = null
console.log('B1: Bắt đầu đọc file data...')

// Bước 2: Khởi tạo hàm và bắt đầu đọc file dữ liệu
console.log('B2: Đang đọc file data, thực thi hàm readFileData()...')

// Khởi tạo 1 hàm readFileData có nhiệm vụ đọc file. Giả lập sẽ tốn 3 giây (Thực tế còn tùy vào dung lượng file)
const readFileData = (callback) => {
  // Đọc file
  setTimeout(() => {
    // Bước 3: Đọc dữ liệu xong
    console.log('B3: Đọc file data xong, gán data vào biến fileData!')
    fileData = 'Data is already come!'
    // Truyền fileData vào hàm callback()
    callback(fileData)
  }, 3000)
}
// Thực thi hàm readFileData() (Vẫn ở bước 2)
readFileData(() => {
  // Bước 4: In ra kết quả
  console.log('B4: Đọc file data thành công với dữ liệu nhận được là ', fileData)
})

// 3. Ví dụ thực tế dễ hiểu trong việc gọi cái APIs bất đồng bộ để lấy dữ liệu theo mong muốn.
// https://pokeapi.co/
// Sử dụng API cũ XMLHttpRequest để ví dụ với thuần Callback, đọc qua thôi chứ không cần nhớ XMLHttpRequest này.
// Note: XMLHttpRequest chỉ có thể test trên browser, không thể test trên NodeJS.
const getListPokemon = (apiEndpoint, callback) => {
  const requestAPI = new XMLHttpRequest()
  requestAPI.open("GET", apiEndpoint)
  requestAPI.onload = () => {
    // Nếu gọi API thành công.
    if( requestAPI.status >= 200 && requestAPI.status <= 299 ) {
      const responseData = JSON.parse(requestAPI.responseText)
      callback(responseData)
    }
  }
  requestAPI.send()
}
// getListPokemon('https://pokeapi.co/api/v2/pokemon?limit=10', (responseData) => {
//   console.log('Response Data: ', responseData)
//   document.getElementById('list-pokemon').innerHTML = responseData.results.map(pokemon => `<li>${pokemon.name} </li>`).join('')
// })

// 4. Callback Hell
const getPokemonDetails = (apiEndpoint, callback) => {
  const requestAPI = new XMLHttpRequest()
  requestAPI.open("GET", apiEndpoint)
  requestAPI.onload = () => {
    // Nếu gọi API thành công.
    if( requestAPI.status >= 200 && requestAPI.status <= 299 ) {
      const responseData = JSON.parse(requestAPI.responseText)
      callback(responseData)
    }
  }
  requestAPI.send()
}
getListPokemon('https://pokeapi.co/api/v2/pokemon?limit=10', (responseData) => {
  console.log('Response Data: ', responseData)
  document.getElementById('list-pokemon').innerHTML = responseData.results.map(pokemon => `<li>${pokemon.name} </li>`).join('')

  const charmander = responseData.results.find(pokemon => pokemon.name === 'charmander')
  console.log('Charmander: ', charmander)
  if(charmander) {
    getPokemonDetails(charmander.url, (charmanderDetails) => {
      console.log('Charmander Details: ', charmanderDetails)
      document.getElementById('pokemon-details').innerHTML = JSON.stringify(charmanderDetails)

      // Ví dụ lại muốn tìm xem pokemon này thường xuất hiện ở đâu
      if (charmanderDetails.location_area_encounters) {
        getPokemonLocation()
        //...vv
          getPokemonLocationDetails()
          //...vv
           GetABC()
           //...
           // Lồng nhau rất là nhiều => Callback Hell
      }
    })
  }
})
