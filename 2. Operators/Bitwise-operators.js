// Bitwise operators: Toán tử bitwise
// Toán tử bitwise được sử dụng để thực hiện các phép toán bit trong hệ nhị phân.
// https://vi.wikipedia.org/wiki/Ph%C3%A9p_to%C3%A1n_thao_t%C3%A1c_bit

let x = 10; // 1010
let y = 5; // 0101

console.log(x & y); // AND: 0000 (Nhị phân) và 0 (Thập phân)
console.log(x | y); // OR: 1111 (Nhị phân) và 15 (Thập phân)
console.log(x ^ y); // XOR: 1111 (Nhị phân) và 15 (Thập phân)
console.log(~x); // NOT: 0101 (Nhị phân) và -11 (Thập phân)
console.log(x << 1); // Left shift: 10100 (Nhị phân) và 20 (Thập phân)
console.log(y >> 1); // Right shift: 0010 (Nhị phân) và 2 (Thập phân)

// Vì làm việc trực tiếp với các bit của dữ liệu nên toán tử bitwise có thể thực hiện các phép toán nhanh hơn so với các toán tử số học thông thường.
// Ứng dụng nhiều trong các ứng dụng đòi hỏi hiệu suất cao như trò chơi, ứng dụng đồ họa, mã hóa, nén dữ liệu, v.v.