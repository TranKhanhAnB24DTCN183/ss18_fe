let a=+prompt('Nhap vao canh cua tam giac');
let b=+prompt('Nhap vao canh cua tam giac');
let c=+prompt('Nhap vao canh cua tam giac');
console.log('Ba cach lan luot la : '+a,b,c);

if(a+b>c&&b+c>a&&a+c>b){
    if(a===b&&b===c){
        console.log('Tam giac deu');
    }else if(a===b||b===c||c===a){
        console.log('Tam giac can');
    }else if(Math.pow(a,2)+Math.pow(b,2)===Math.pow(c,2)||Math.pow(a,2)+Math.pow(c,2)===Math.pow(b,2)||Math.pow(b,2)+Math.pow(c,2)===Math.pow(a,2)){
        console.log('Tam giac vuong');
    }else{
        console.log('Tam giac thuong');
    }
}else{
    console.log('Khong phai tam giac');
}