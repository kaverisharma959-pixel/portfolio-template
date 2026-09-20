const userData = document.getElementById("userData");
const refreshButton = document.getElementById("refreshUser");

async function fetchUser() {
    try {
        userData.innerHTML = "<p>Loading...</p>";
        const randomId = Math.floor(Math.random() * 10) + 1;
        const url = "https://jsonplaceholder.typicode.com/users/" + randomId;
        const response = await fetch(url);
        const data = await response.json();

        userData.innerHTML =
            "<h3>" + data.name + "</h3>" +
            "<p><strong>Username:</strong> " + data.username + "</p>" +
            "<p><strong>Email:</strong> " + data.email + "</p>" +
            "<p><strong>Phone:</strong> " + data.phone + "</p>" +
            "<p><strong>Website:</strong> " + data.website + "</p>";
    } catch (error) {
        userData.innerHTML = "<p>Unable to load user data.</p>";
        console.error(error);
    }
}

refreshButton.addEventListener("click", fetchUser);
fetchUser();
