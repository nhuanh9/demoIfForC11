function check() {
    let usn = document.getElementById('name').value;
    let cmt = document.getElementById('cmt').value;
    if (usn == ""){
        alert("Nhập đủ đi!");
    }
    if (isNaN(usn)) { //is not a number
        alert("Nhập vào số nhé bro!")
    }
}

// email, sdt...
