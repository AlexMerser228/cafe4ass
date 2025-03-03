document.addEventListener("DOMContentLoaded", function () {
    const watchButton = document.getElementById("watchButton");
    const popup = document.getElementById("popup");
    const popupText = document.getElementById("popupText");
    const popupInput = document.getElementById("popupInput");
    const savePopup = document.getElementById("savePopup");
    const closePopup = document.getElementById("closePopup");

    // Відкрити попап
    watchButton.addEventListener("click", function () {
        popup.style.display = "block";
    });

    // Закрити попап
    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Змінити текст у попапі
    savePopup.addEventListener("click", function () {
        if (popupInput.value.trim() !== "") {
            popupText.textContent = popupInput.value;
            popupInput.value = ""; // Очистити поле вводу
        }
    });
});
