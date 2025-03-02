let Toán= +prompt("nhập điểm toán");
let VĂn= +prompt("nhập điểm Văn");
let Anh= +prompt("nhập điểm Anh");

let ĐiểmTB = (Toán + Văn + Anh) / 3;
if (ĐiểmTB >= 8.0) {
Học_lực = "Giỏi";
} else if (ĐiểmTB >= 6.5) {
Học_lực = "Khá";
} else if (ĐiểmTB >= 5.0) {
 Học_lực = "Trung bình";
} else {
 Học_lực = "Yếu";
}

alert("Xếp loại Học lực: " + Học_lực);
