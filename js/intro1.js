document.getElementById("copyButton").addEventListener("click", function () {
    const emailText = document.getElementById("email").innerText;
    const textArea = document.createElement("textarea");
    textArea.value = emailText;

    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    document.getElementById("copyButton").textContent = "COPIED THIS!";
    document.getElementById("copyButton").style.backgroundColor = "green";
});