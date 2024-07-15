// Function to update hint input field
function updateHint(hintText) {
  document.getElementById("hint").value = hintText;
}

// Event listeners for hint buttons
document.getElementById("btn1").addEventListener("click", function () {
  updateHint(
    "jomla feha kelmtin lkelma loula 6 hrouf w thenya 5 hrouf wkolha miniscule abl arbi"
  );
});

document.getElementById("btn2").addEventListener("click", function () {
  updateHint(
    "behy lkelma loula dima n9ouloha leb3athna wheya mazder 7obna hehe"
  );
});

document.getElementById("btn3").addEventListener("click", function () {
  updateHint("ltaawaaa ! beeehy lkelma thenya kelma thbni dima naytlk beha");
});

document.getElementById("btn4").addEventListener("click", function () {
  updateHint(
    "HAHAHA KOTLK S3IBA behy lklma loula tbda b 'n' wl kelma thenya b 'a'"
  );
});

document.getElementById("btn5").addEventListener("click", function () {
  updateHint(
    "LE 3AD HAKA BARCHA HAHA umm lakthareya n9oulhelk 9bal mator9od when we say nighty"
  );
});

document.getElementById("lastbtn").addEventListener("click", function () {
  updateHint("shaame on you ! the password is 'nhebek azizi' !!!!");
});

// Function to check the entered password
function check() {
  const password = document.getElementById("psw").value;
  if (password === "nhebek azizi") {
    window.location.href = "main_page.html"; // Replace with the actual main page URL
  } else {
    alert("GHALTA ! AWED");
  }
}
