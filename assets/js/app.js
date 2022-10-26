// const TOAST = document.querySelector('.toast');
// const TOAST_CONTENT = TOAST.querySelector('[data-toast=content]');

// console.log('toast', TOAST);
// console.log('toast content', TOAST_CONTENT);

import Toastinette from "./toastinette.js";

const TOAST_ME = document.getElementById("toast-me");

TOAST_ME.addEventListener("click", () => {
    new Toastinette({
        position: 'top-center',
        title: 'Succès',
        message: 'Votre message à bien été envoyé.',
        type: 'success',
        autoClose: 3000,
        progress: true
    });
});
