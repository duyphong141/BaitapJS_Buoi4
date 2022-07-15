//! Bài tập 1: Xuất 3 số theo thứ tự tăng dần
document.getElementById('btnSapXep').onclick = function () {
    var so1 = Number(document.getElementById('so1').value);
    var so2 = Number(document.getElementById('so2').value);
    var so3 = Number(document.getElementById('so3').value);

    var ketQua = '';
    if (so1 > so2) {
        if (so2 > so3) {
            ketQua = so3 + ' < ' + so2 + ' < ' + so1;
        } else if (so1 > so3) {
            ketQua = so2 + ' < ' + so3 + ' < ' + so1;
        } else {
            ketQua = so2 + ' < ' + so1 + ' < ' + so3;
        }
    } else {
        if (so2 < so3) {
            ketQua = so1 + ' < ' + so2 + ' < ' + so3;
        } else if (so1 < so3) {
            ketQua = so1 + ' < ' + so3 + ' < ' + so2;
        } else {
            ketQua = so3 + ' < ' + so1 + ' < ' + so2;
        }
    }

    document.getElementById('hienThiSapXep').innerHTML = ketQua;
}

//! Bài tập 2: Chương trình "Chào hỏi"
document.getElementById('btnChao').onclick = function () {
    var person = document.getElementById('person').value;
    var loiChao = '';
    switch (person) {
        case 'B':
            loiChao = 'Xin chào Bố!'
            break;
        case 'M':
            loiChao = 'Xin chào Mẹ!'
            break;
        case 'A':
            loiChao = 'Xin chào Anh trai!'
            break;
        case 'E':
            loiChao = 'Xin chào Em gái!'
            break;
        default:
            loiChao = 'Xin chào Người lạ ơi!'
            break;
    }
    document.getElementById('hienThiLoiChao').innerHTML = loiChao;
}

//! Bài tập 3: Đếm số chẵn lẻ
document.getElementById('btnDem').onclick = function () {
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    var num3 = Number(document.getElementById('num3').value);

    var soChan = 0;
    var soLe = 0;
    if (num1 % 2 == 0) {
        soChan++;
    }
    if (num2 % 2 == 0) {
        soChan++;
    }
    if (num3 % 2 == 0) {
        soChan++;
    }
    soLe = 3 - soChan;
    document.getElementById('hienThiDem').innerHTML = 'Có ' + soChan + ' số chẵn, ' + soLe + ' số lẻ'
}

//! Bài tập 4: Đoán hình tam giác
document.getElementById('btnDuDoan').onclick = function () {
    var canh1 = Number(document.getElementById('canh1').value);
    var canh2 = Number(document.getElementById('canh2').value);
    var canh3 = Number(document.getElementById('canh3').value);

    var ketQua = '';
    if (canh1 == canh2 && canh2 == canh3 && canh3 == canh1) {
        ketQua = 'Hình tam giác đều';
    } else if (canh1 == canh2 || canh2 == canh3 || canh3 == canh1) {
        ketQua = 'Hình tam giác cân';
    } else if (canh1 == Math.sqrt(canh2 * canh2 + canh3 * canh3) || canh2 == Math.sqrt(canh1 * canh1 + canh3 * canh3) || canh3 == Math.sqrt(canh1 * canh1 + canh2 * canh2)) {
        ketQua = 'Hình tam giác vuông';
    } else {
        ketQua = 'Một loại tam giác nào đó';
    }

    document.getElementById('hienThiDuDoan').innerHTML = ketQua;
}