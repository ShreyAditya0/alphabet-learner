document.addEventListener("DOMContentLoaded", function () {
    const alphabetContainer = document.getElementById("alphabet-container");
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    letters.forEach(letter => {
        const letterBlock = document.createElement("div");
        letterBlock.className = "letter-block";
        
        const letterHeading = document.createElement("h2");
        letterHeading.textContent = letter;
        
        const letterImage = document.createElement("img");
        letterImage.src = `images/${letter.toLowerCase()}.jpg`;
        letterImage.alt = letter;
        
        letterBlock.appendChild(letterHeading);
        letterBlock.appendChild(letterImage);
        alphabetContainer.appendChild(letterBlock);
    });
});
