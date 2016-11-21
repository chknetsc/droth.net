(function () {

    if (document.execCommand) {

        var eMailEl = document.getElementById("email-address");
        var eMailAddr = eMailEl.textContent;
        eMailEl.href = "#";

        eMailEl.addEventListener("click", function () {
            if (copyToClipboard(eMailAddr)) {
                console.log("copied");
            }
        });

        eMailEl.addEventListener("mouseover", function() {
           eMailEl.textContent = "Copy to Clipboard";
        });

        eMailEl.addEventListener("mouseout", function() {
            eMailEl.textContent = eMailAddr;
        });
    }

    function copyToClipboard(text) {

        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("value", text);
        eMailEl.appendChild(input);

        input.style.visibility = "visible";
        input.focus();
        input.select();
        var success = document.execCommand("copy");

        input.remove();

        return success;
    }

})();