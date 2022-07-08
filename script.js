const btn = document.querySelector(".buttonOn");
const [username, password] = document.querySelectorAll("input");

btn.classList.add("buttonOnchange");

function handleChange() {
  if (username.value && password.value.length >= 6) {
    btn.classList.remove("buttonOn");
    btn.classList.add("buttonOnchange");
    btn.style.cursor = "pointer";
  } else {
    btn.classList.add("buttonOn");
    btn.classList.remove("buttonOnchange");
    btn.style.cursor = "default";
  }
}

username.addEventListener("input", handleChange);
password.addEventListener("input", handleChange);
