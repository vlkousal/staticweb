function initWindowMove() {
    const win = document.querySelector(".windows-95-window");
    const titleBar = win.querySelector(".title-bar");

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    titleBar.style.cursor = "move";

    titleBar.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - win.offsetLeft;
        offsetY = e.clientY - win.offsetTop;
        document.body.style.userSelect = "none";
    });
    document.addEventListener("mouseup", () => {
        isDragging = false;
        document.body.style.userSelect = "";
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const windowHeight = win.offsetHeight;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        let newLeft = e.clientX - offsetX;
        let newTop = e.clientY - offsetY;

        const minTop = 10;
        const maxTop = viewportHeight - windowHeight - 10;

        if (newTop < minTop) newTop = minTop;
        if (newTop > maxTop) newTop = maxTop;

        const minLeft = 10;
        const maxLeft = viewportWidth - 10;

        if (newLeft < minLeft) newLeft = minLeft;
        if (newLeft > maxLeft) newLeft = maxLeft;

        win.style.left = newLeft + 'px';
        win.style.top = newTop + 'px';
    });

}
