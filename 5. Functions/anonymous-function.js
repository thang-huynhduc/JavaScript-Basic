// Anonymous function - Hàm ẩn danh: Là hàm không có tên.
// Thường được sử dụng làm đối số cho các hàm khác, ví dụ như trong các hàm xử lý sự kiện hoặc các hàm gọi lại (callback function).
 setTimeout(function(){
    console.log('Sau một giây thì hiện dòng message này');
 }, 1000);

 setTimeout(() => {
    console.log('Sau ba giây thì hiện dòng message này');
 }, 2000);