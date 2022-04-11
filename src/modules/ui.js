import projects from "./projects";

function display() {
    function modalDisplay() {
        const newProjectBtn = document.querySelector("#newProjectBtn");
        const modal = document.getElementById("myModal");
        const span = document.getElementsByClassName("close")[0];

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

            const projectView = document.querySelector(".projects");

            const taskBtn = document.createElement("button");
            taskBtn.className = "addTaskBtn";
            taskBtn.textContent = "Add Task";
            taskBtn.addEventListener("click", () => {
                alert("test");
            });
            projectView.appendChild(taskBtn);
        });
    }

    return { modalDisplay, projectDisplay };
}

const displays = display();

export default displays;
