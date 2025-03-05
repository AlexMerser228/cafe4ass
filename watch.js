document.addEventListener("DOMContentLoaded", function () {
    const watchButton = document.getElementById("watchButton");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");

    // Відкрити попап
    watchButton.addEventListener("click", function () {
        popup.style.display = "block";
    });

    // Закрити попап
    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
    });
});
