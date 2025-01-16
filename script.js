document.addEventListener("DOMContentLoaded", function() {
    const gameListContainer = document.getElementById("game-list");

    const games = [
        { name: "Shell Shockers", url: "https://shellshock.io", image: "shellshockers.jpg" },
        { name: "1v1.LOL", url: "https://1v1.lol", image: "1v1lol.jpg" },
        { name: "Vex 7", url: "https://vex7.net", image: "vex7.jpg" },
        // Add more games to this array
    ];

    games.forEach(game => {
        const gameCard = document.createElement("div");
        gameCard.classList.add("game-card");

        const gameImage = document.createElement("img");
        gameImage.src = game.image;
        gameCard.appendChild(gameImage);

        const gameLink = document.createElement("a");
        gameLink.href = game.url;
        gameLink.target = "_blank"; // Open in a new tab
        gameLink.textContent = game.name;
        gameCard.appendChild(gameLink);

        gameListContainer.appendChild(gameCard);
    });
});
