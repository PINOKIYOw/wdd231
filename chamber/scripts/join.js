document.addEventListener("DOMContentLoaded", () => {

    // Timestamp
    document.getElementById("timestamp").value =
        new Date().toLocaleString();

    // Open modal buttons
    const modalButtons =
        document.querySelectorAll(".modal-btn");

    modalButtons.forEach(button => {
        button.addEventListener("click", () => {

            const modalId =
                button.dataset.modal;

            const modal =
                document.getElementById(modalId);

            modal.showModal();
        });
    });

    // Close modal buttons
    const closeButtons =
        document.querySelectorAll(".close-modal");

    closeButtons.forEach(button => {
        button.addEventListener("click", () => {

            const dialog =
                button.closest("dialog");

            dialog.close();
        });
    });

});

const dialogs = document.querySelectorAll("dialog");

dialogs.forEach(dialog => {
    dialog.addEventListener("click", (event) => {

        const rect =
            dialog.getBoundingClientRect();

        const clickedInside =
            rect.top <= event.clientY &&
            event.clientY <= rect.bottom &&
            rect.left <= event.clientX &&
            event.clientX <= rect.right;

        if (!clickedInside) {
            dialog.close();
        }
    });
});