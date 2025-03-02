let year= parseInt(prompt('Nhap nam ban muon :'));
console.log(year);

if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        console.log(year + " la nam nhuan");
      } else {
        console.log(year + " khong phai la nam nhuan");
      }
    } else {
        console.log(year + " la nam nhuan");
    }
}else{
    console.log(year + " khong phai la nam nhuan");
}