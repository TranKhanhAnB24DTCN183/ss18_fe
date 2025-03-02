let staffYear=+prompt("Nhap so nam vao cong ty:");
console.log(staffYear);
if (staffYear>6) {
    console.log('Quan li');  
}else if(staffYear>=1 && staffYear<=3){
    console.log('Nhan vien co kinh nghiem');
}else if(staffYear>=4 && staffYear<=6){
    console.log('Chuyen vien');
}else if(staffYear<1){
    console.log('Moi vao nghe');
}