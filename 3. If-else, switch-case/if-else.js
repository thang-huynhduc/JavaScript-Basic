// Câu Lệnh Điều Kiện
// if-else: Nếu điều kiện đúng thì thực hiện một hành động, nếu không thì thực hiện một hành động khác.
let weather = "rain";
if (weather === "rain") {
  console.log("Bring an umbrella.");
} else {
  console.log("Wear sunglasses.");
}

// if-else if-else: Nếu điều kiện đúng thì thực hiện một hành động, nếu không thì kiểm tra điều kiện tiếp theo, nếu không thì thực hiện một hành động khác.
let score = '7.5';
if (score >=9){
    console.log('Rank: SSS');
} else if (score >=7) {
    console.log('Rank: A')
} else if (score >= 5) {
    console.log('Rank: B')
} else {
    console.log('Rank: C')
}