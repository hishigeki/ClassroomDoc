// 暗号化されたパスワード (Base64 エンコード済み)
const encryptedPassword = "S2FnaXNlbjI="; // Kagisen2 を Base64 エンコード

function checkPassword() {
  const inputPassword = document.getElementById("password").value;
  const encodedPassword = btoa(inputPassword); // 入力されたパスワードを Base64 エンコード

  if (encodedPassword === encryptedPassword) {
    // パスワードが一致した場合、ページ遷移
    window.location.href = "index.html"; // indexへ遷移
  } else {
    alert("パスワードが間違っています。");
  }
}