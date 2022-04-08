const project = () => {
    let projectStorage = [];

    function createProject(title) {
        return {
            title: title,
        };
    }

    function addProjectToStorage(title) {
        let newProject = createProject(title);
        projectStorage.push(newProject);
        console.log(projectStorage);
    }

    // function displayProject() {
    //     let element = projectStorage.length - 1

    // }

    return { addProjectToStorage };
};

const projects = project();

export default projects;
