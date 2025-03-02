
let n = Number(prompt("Mời bạn nhập vào 1 số nguyên bất kỳ từ 1 đến 999"));
if (n >= 1 && n < 1000) {
     let hangtram = Math.floor(n / 100);
     let hangchuc = Math.floor((n % 100) / 10);
     let hangdonvi = n % 10;

     let resulthangtram = "";
     let resulthangchuc = "";
     let resulthangdonvi = "";


     switch (hangtram) {
          case 1: 
          resulthangtram = "Một trăm"; 
          break;
          case 2: 
          resulthangtram = "Hai trăm"; 
          break;
          case 3: 
          resulthangtram = "Ba trăm"; break;
          case 4: 
          resulthangtram = "Bốn trăm"; 
          break;
          case 5: 
          resulthangtram = "Năm trăm"; 
          break;
          case 6: 
          resulthangtram = "Sáu trăm"; 
          break;
          case 7: 
          resulthangtram = "Bảy trăm"; 
          break;
          case 8: 
          resulthangtram = "Tám trăm"; 
          break;
          case 9: 
          resulthangtram = "Chín trăm"; 
          break;
     }
     switch (hangchuc) {
          case 1: 
          resulthangchuc = "Mười"; 
          break;
          case 2: 
          resulthangchuc = "Hai mươi"; 
          break;
          case 3: 
          resulthangchuc = "Ba mươi"; 
          break;
          case 4: 
          resulthangchuc = "Bốn mươi"; 
          break;
          case 5: 
          resulthangchuc = "Năm mươi"; 
          break;
          case 6: 
          resulthangchuc = "Sáu mươi"; 
          break;
          case 7: 
          resulthangchuc = "Bảy mươi"; 
          break;
          case 8: 
          resulthangchuc = "Tám mươi"; 
          break;
          case 9: 
          resulthangchuc = "Chín mươi"; 
          break;
          case 0:
               if (hangtram > 0 && hangdonvi > 0) {
                    resulthangchuc = "lẻ";
               }
               break;
     }

     switch (hangdonvi) {
          case 1: 
          resulthangdonvi = "một"; 
          break;
          case 2: 
          resulthangdonvi = "hai"; 
          break;
          case 3: 
          resulthangdonvi = "ba"; 
          break;
          case 4: 
          resulthangdonvi = "bốn"; 
          break;
          case 5: 
          resulthangdonvi = "năm"; 
          break;
          case 6: 
          resulthangdonvi = "sáu"; 
          break;
          case 7: 
          resulthangdonvi = "bảy"; 
          break;
          case 8: 
          resulthangdonvi = "tám"; 
          break;
          case 9: 
          resulthangdonvi = "chín"; 
          break;
     }

     let ketQua = `${resulthangtram} ${resulthangchuc} ${resulthangdonvi}`.trim();
     document.write(ketQua);
} else {
     document.write("Số nhập vào không hợp lệ!");
}
