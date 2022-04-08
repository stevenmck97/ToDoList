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
        const projectList = document.querySelector(".nav-menu");

        // projects.projectStorage.forEach((element) => {
        //     const projectItem = document.createElement("li");
        //     projectItem.className = "projectItem";
        //     projectItem.textContent = element;
        //     projectList.appendChild(projectItem);
        // });

        addBtn.addEventListener("click", () => {
            const title = document.querySelector("#title").value;
            const projectItem = document.createElement("li");
            projectItem.className = "projectItem";
            projectItem.textContent = title;

            projects.addProjectToStorage(title);
            projectList.appendChild(projectItem);
        });
    }

    return { modalDisplay, projectDisplay };
}

const displays = display();

export default displays;
