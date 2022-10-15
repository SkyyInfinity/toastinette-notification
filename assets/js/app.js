// const TOAST = document.querySelector('.toast');
// const TOAST_CONTENT = TOAST.querySelector('[data-toast=content]');

// console.log('toast', TOAST);
// console.log('toast content', TOAST_CONTENT);

import Toast from "./toast.js";

const TOAST_ME = document.getElementById("toast-me");

TOAST_ME.addEventListener("click", () => {
    new Toast({
        position: 'top-center', // top-left, top-center, top-right, bottom-left, bottom-center, bottom-right
        title: 'Succès', // optional
        message: 'Votre message à bien été envoyé.', // required
        type: 'success', // info, success, error, warning
        autoClose: 5000, // false or number
        progress: true // true or false
    });
});
