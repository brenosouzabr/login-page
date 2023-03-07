const showPassword = () => {

    const checkbox = document.querySelector("#check");
    const password = document.querySelector("#password");

    checkbox.checked ? password.type = "text" : password.type = "password";
}