let math=+prompt("Nhap diem:");
let literature=+prompt("Nhap diem:");
let english=+prompt("Nhap diem:");
let averege=(math+literature+english)/3;
console.log('Trung binh cong cua 3 mon hoc la : '+averege);
if (averege>=8.0) {
    console.log('Gioi');  
}else if(averege>=6.5 && averege<=7.9){
    console.log('Kha');
}else if(averege>=5.0 && averege<=6.4){
    console.log('Trung binh');
}else if(averege<5){
    console.log('Yeu');
}