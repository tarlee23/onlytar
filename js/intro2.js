function addCopyButton(buttonId, emailId) {
    const copyButton = document.getElementById(buttonId);
    const emailElement = document.getElementById(emailId);

    if (copyButton && emailElement) {
        copyButton.addEventListener("click", function () {
            const emailText = emailElement.innerText;
            const textArea = document.createElement("textarea");
            textArea.value = emailText;

            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);

            copyButton.classList.add("fade-color");

            // รอ 2 วินาทีแล้วกลับเป็นปุ่มเดิม
            setTimeout(function () {
                copyButton.classList.remove("fade-color");
                copyButton.textContent = "ALREADY COPY";
                copyButton.style.backgroundColor = "#525252";

                emailElement.style.display = "block"; // แสดง email
            }, 1200);
        });
    }
}
addCopyButton("copyButton1", "email1");
addCopyButton("copyButton2", "email2");
addCopyButton("copyButton3", "email3");
addCopyButton("copyButton4", "email4");
addCopyButton("copyButton5", "email5");
addCopyButton("copyButton6", "email6");
addCopyButton("copyButton7", "email7");
addCopyButton("copyButton8", "email8");
addCopyButton("copyButton9", "email9");
addCopyButton("copyButton10", "email10");