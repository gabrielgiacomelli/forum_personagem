document.getElementById("FormLogin").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (email === "adm@gmail.com" && senha === "123") {
        window.location.href = "public/home.html"
    } else {
        document.getElementById("problema").innerHTML = "LOGIN INVÁLIDO";
    }


});