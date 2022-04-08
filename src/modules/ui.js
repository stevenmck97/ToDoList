import projects from "./projects";

const newProjectBtn = document.querySelector("#newProjectBtn");
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

function display() {
    function modalDisplay() {
        newProjectBtn.addEventListener("click", () => {
            modal.style.display = "block";
        });

        span.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    function projectDisplay() {
        const addBtn = document.querySelector("#addBtn");

        addBtn.addEventListener("click", () => {
            const title = document.querySelector("#title").value;
            projects.addProjectToStorage(title);
        });
    }

    return { modalDisplay, projectDisplay };
}

const displays = display();

export default displays;
