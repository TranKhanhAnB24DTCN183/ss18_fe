let hours = Number(prompt("Nhập giờ (0-24):"));
let minutes = Number(prompt("Nhập phút (0-59):"));
let seconds = Number(prompt("Nhập giây (0-59):"));
if (0 <= hours <= 24 && 0 <= minutes < 60 && 0 <= seconds < 60) {
    let aOrPm = hours >= 12 ? `PM` : `AM`
    let newHours = parseInt(hours % 12)
    document.write(`Giờ sau khi chuyển sang định dạng 12 giờ AM/PM là: ${newHours}:${minutes}:${seconds} ${aOrPm}`)
} else{
    document.write(`Dữ liệu nhập ko hợp lệ`)
}