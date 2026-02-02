let n = Number(prompt("hãy nhập số nguyên dương: "));
if (n % 2 === 0) {
    console.log(`Số ${n} là số chẵn`);
} else {
    console.log(`Số ${n} là số lẻ`);
}
if (n > 0) {
    console.log(`Số ${n} là số dương`);
} else if (n < 0) {
    console.log(`Số ${n} là số âm`);
} else {
    console.log(`Số ${n} bằng 0`);
}
if (n > 0) {
    for (let number = 1; number <= n; number++) {
        console.log(number);
    }
} else {
    console.log("Giá trị n không hợp lệ để tạo dãy số");
}
