const display = (() => {
    const newProjectBtn = document.querySelector("#newProjectBtn");
    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];

    function modalDisplay() {
        newProjectBtn.addEventListener("click", () => {
            modal.style.display = "block";
        });

        span.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    return { modalDisplay };
})();

export default display;
