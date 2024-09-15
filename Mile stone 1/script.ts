const toggleButton = document.getElementById("toggle-skills") as HTMLButtonElement | null;
const skills = document.getElementById('skills') as HTMLElement | null;

if (toggleButton && skills) {
    toggleButton.addEventListener("click", () => {
        if (skills.style.display === "none") {
            skills.style.display = "block";
        } else {
            skills.style.display = "none";
        }
    });
}
