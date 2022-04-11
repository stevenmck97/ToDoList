const project = () => {
    let projectStorage = [];
    // let newProject;

    function createProject(title) {
        return {
            title: title,
            tasks: [],
        };
    }

    function addProjectToStorage(title) {
        let newProject = createProject(title);
        projectStorage.push(newProject);
        console.log(projectStorage);
    }

    return { addProjectToStorage };
};

const projects = project();

export default projects;
