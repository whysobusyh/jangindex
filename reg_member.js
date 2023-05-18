var sign_ID;
var sign_PW;
var sign_PWE;
var sign_Name;
var sign_Email;
var sign_Date;
var sign_Tel1;
var sign_Tel2;
var sign_Tel3;
var sign_;
var checkall;

// 가입창 id 연결 var

var id;
var pw;
var pwe;
var name;
var email;
var date;
var tel1;
var tel2;
var tel3;
//.value  var

var info;


window.onload = function () {
    sign_ID = document.getElementById("sign_id")
    sign_PW = document.getElementById("sign_pw")
    sign_PWE = document.getElementById("sign_pwe")
    sign_Name = document.getElementById("sign_name")
    sign_Email = document.getElementById("sign_email")
    sign_Date = document.getElementById("sign_birth")
    sign_Tel1 = document.getElementById("sign_tel1")
    sign_Tel2 = document.getElementById("sign_tel2")
    sign_Tel3 = document.getElementById("sign_tel3")
    checkall = document.getElementById("sign_submit")



}

function testsubmit() {
    error_area_id.innerHTML = "";
    error_area_pw.innerHTML = "";
    error_area_pwe.innerHTML = "";
    error_area_name.innerHTML = "";
    error_area_email.innerHTML = "";
    // error_area 초기화 문구

    id = sign_ID.value;
    pw = sign_pw.value;
    pwe = sign_pwe.value;
    Name = sign_name.value;
    email = sign_email.value;
    date = sign_birth.value;
    tel1 = sign_tel1.value;
    tel2 = sign_tel2.value;
    tel3 = sign_tel3.value;
    // .vlaue 를 계속 넣으니깐 가독성이 떨어져서 설정

    info =
        "id: " + id + "\n"
    + "pw: " + pw + "\n"
    + "pwe: " + pwe + "\n"
    + "name: " + Name + "\n"
    + "email: " + email + "\n"
    + "date: " + date + "\n"
    + "tel: " + tel1 + " - " + tel2 + " - " + tel3;


    if (checkid() && checkpw() && checkpwe() && checkname() && checkemail()) {
        alert(info);
        alert("회원가입완료");
    } else {
        alert("회원가입실패");
    }
    // function check()들이 전부 true일때 
}

function checkid() {
    if (id.length < 6 || id.length > 12) {
        error_area_id.innerHTML = "6글자에서 12글자 사이로 입력해주세요";
        console.log("id false");
        return false;
    } else {
        console.log("id true");
        return true;
    }
}
function checkpw() {
    if (pw.length < 6 || pw.length > 12) {
        error_area_pw.innerHTML = "6글자에서 12글자 사이로 입력해주세요";
        console.log("pw false");
        return false;
    } else {
        console.log("pw true");
        return true;
    }
}

// 문제점은 pwe 랑 pw 둘 중 하나만 나와서 에러
function checkpwe() {
    if (pwe.length < 6 || pwe.length > 12) {
        error_area_pwe.innerHTML = "6글자에서 12글자 사이로 입력해주세요";
        console.log("pwe length false");
        return false;
    } else if (pwe == pw) {
        console.log("pwe same");
        return true;
    } else {
        error_area_pwe.innerHTML = "비밀번호가 일치하지 않아요."
        console.log("pwe same false");
        return false;
    }
}

function checkname() {
    if (Name.length < 6 || Name.length > 12) {
        error_area_name.innerHTML = "6글자에서 12글자 사이로 입력해주세요";
        console.log("name false");
        return false;
    } else {
        console.log("name true");
        return true;
    }
}
function checkemail() {
    if (email.length < 6 || email.length > 12) {
        error_area_email.innerHTML = "6글자에서 12글자 사이로 입력해주세요";
        console.log("email false");
        return false;
    } else {
        console.log("email true");
        return true;
    }
}
