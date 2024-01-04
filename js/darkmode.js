const body = document.querySelector("body")
toggle = document.querySelector(".toggle");

    let getMode = localStorage.getItem("mode");
    if(getMode && getMode === "dark"){
        body.classList.add("dark");
        toggle.classList.add("active")
    }

toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (!body.classList.contains("dark")) {
        return localStorage.setItem("mode", "light");
    } 
    return localStorage.setItem("mode", "dark");
});

toggle.addEventListener("click", () => toggle.classList.toggle("active"));
