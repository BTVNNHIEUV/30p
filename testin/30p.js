let Songuyen = Number(prompt("hãy nhập số nguyên dương: "));
let count = 1;
while(true){
    Songuyen = Songuyen % 2;
    if(Songuyen == 0){
        console.log(`là số chẵn`);
    }
    else if(Songuyen !== 0){
        console.log(`là số lẻ`);
    }
    else if(Songuyen >= 0){
        console.log(`là số dương`);
    }
    else if(Songuyen < 0){
        console.log(`là số âm`);
    }
    else if(Songuyen > 0 && count <= Songuyen){
        console.log(`dãy số của số nguyên là ${count + 1}`);
        break;
    }
    else if(Songuyen <= 0){
        console.log("Giá trị n không hợp lệ để tạo dãy số");
    }
    else{
        console.log("Số không hợp lệ");
    }
}