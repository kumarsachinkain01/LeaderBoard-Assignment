document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("playerForm");
    const leaderboard = document.getElementById("leaderboard");

    let data = [
        {
            firstName: "Rohit",
            lastName: "Sharma",
            country: "India",
            playerScore: 120,
        },
        {
            firstName: "Virat",
            lastName: "Kohli",
            country: "India",
            playerScore: 100,
        },
        {
            firstName: "Ishan",
            lastName: "Kishan",
            country: "India",
            playerScore: 184,
        },
        {
            firstName: "Rinku",
            lastName: "Singh",
            country: "India",
            playerScore: 370,
        }
    ];

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const firstName = document.getElementById("fName").value;
        const lastName = document.getElementById("lName").value;
        const country = document.getElementById("country").value;
        const playerScore = parseInt(document.getElementById("playerScore").value);

        if (firstName.trim() === "" || lastName.trim() === "" || country.trim() === "" || isNaN(playerScore)) {
            alert("Please fill all fields with valid data!");
            return;
        }

        const playerObj = {
            firstName: firstName,
            lastName: lastName,
            country: country,
            playerScore: playerScore,
        };
        data.push(playerObj);

        updateData();

        form.reset();
    });

    function updateData() {
        data.sort((p1, p2) => p2.playerScore - p1.playerScore);

        leaderboard.innerHTML = "";

        data.forEach((item, index) => {
            const playerDiv = document.createElement("div");
            playerDiv.innerHTML = `
                <span>${item.firstName}</span>
                <span>${item.lastName}</span>
                <span>${item.country}</span>
                <span>${item.playerScore}</span>
                <div>
                    <i class="fa-solid fa-trash-can delete" onclick="deletePlayer(${index})"></i>
                    <button class="add" onclick="incrementScore(${index})">+5</button>
                    <button class="sub" onclick="decrementScore(${index})">-5</button>
                </div>
            `;
            leaderboard.appendChild(playerDiv);
        });
    }

    function incrementScore(index) {
        data[index].playerScore += 5;
        updateData();
    }

    function decrementScore(index) {
        data[index].playerScore -= 5;
        updateData();
    }

    function deletePlayer(index) {
        data.splice(index, 1);
        updateData();
    }

    updateData();
});
