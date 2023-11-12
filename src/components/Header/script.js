export default function LoginCheck() {
    const userLog = localStorage.getItem("userLog");
    const loginAnchor = document.getElementById('loginA');
    if (userLog === "1") {
        loginAnchor.innerHTML = "Logout";
        loginAnchor.href = "/";
    }
}