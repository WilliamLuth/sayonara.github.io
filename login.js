function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "vi" && password == "05/11/2021") {
        window.open('https://williamluth.github.io/seeyou.github.io/')

    } else {
        alert("the username and password you entered don't match!")
    }
}