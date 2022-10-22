/**
 * Toastinette Notification
 * 
 * Is a simple notification system that can be used to display notifications for your own app.
 * 
 * Version: 1.0.3
 * Author: Skyyinfinity
 * Author URL: https://github.com/SkyyInfinity
 * License: MIT
 */
class Toastinette {
    // Colors
    C_INFO = 'var(--toast-info';
    C_WARNING = 'var(--toast-warning)';
    C_ERROR = 'var(--toast-error)';
    C_SUCCESS = 'var(--toast-success)';

    /**
     * 
     * @param {object} options List of options for the Toastinette notification
     */
    constructor(options) {
        // Properties
        this.body = document.body;
        this.title = options.title;
        this.message = options.message;
        this.type = options.type;
        this.position = options.position;
        this.autoClose = options.autoClose;
        this.progress = options.progress;

        // Create toast
        this.create();

        this.close = document.querySelector('.toast-close button');

        // close toast on click on close button
        if(this.close) {
            this.close.addEventListener('click', () => {
                this.removeToast();
            });
        }

        // else close toast after duration
        if(!isNaN(this.autoClose) && (this.autoClose !== false) && (this.autoClose !== undefined)) {
            if(this.progress === true) {
                // Animate the progress bar
                this.toast.classList.add('toast-auto-close');
                this.animateProgressBar(this.autoClose);
            }

            // Close toast after duration
            setTimeout(() => {
                this.removeToast();
            }, this.autoClose);
        }
    }

    create() {
        this.toast = this.generate(this.position, this.title, this.message, this.type);
        
        this.body.appendChild(this.toast);
    }

    generate(position = 'top-center', title, message = 'message', type = 'success') {
        let 
        progress, 
        toast, 
        toastIcon, 
        toastContent, 
        toastTitle, 
        toastMessage, 
        toastClose, 
        toastCloseButton;
        
        // Generate Toast Progress Bar
        progress = this.generateProgressBar();

        // Generate Toast
        toast = this.generateToast(type, position);

        // Generate Toast Icon
        toastIcon = this.generateToastIcon(type);

        // Generate Toast Content
        toastContent = this.generateToastContent(title, message).toastContent;
        toastTitle = this.generateToastContent(title, message).toastTitle;
        toastMessage = this.generateToastContent(title, message).toastMessage;

        // Generate Toast Close Button
        toastClose = this.generateCloseBtn(type).toastClose;
        toastCloseButton = this.generateCloseBtn(type).toastCloseButton;

        // Append Elements
        toastClose.appendChild(toastCloseButton);
        if(title !== undefined && title !== '') {
            toastContent.appendChild(toastTitle);
        }
        toastContent.appendChild(toastMessage);
        toast.appendChild(toastIcon);
        toast.appendChild(toastContent);
        toast.appendChild(toastClose);
        toast.appendChild(progress);
        
        return toast;
    }

    generateProgressBar() {
        let progress;

        progress = document.createElement('div');
        progress.classList.add('toast-progress');

        return progress;
    }

    generateToast(type, position) {
        let toast;

        toast = document.createElement('div');
        toast.classList.add('toast');
        
        switch(type) {
            case 'success':
                toast.classList.add('toast-success');
                break;
            case 'error':
                toast.classList.add('toast-error');
                break;
            case 'warning':
                toast.classList.add('toast-warning');
                break;
            case 'info':
                toast.classList.add('toast-info');
                break;
        }
        toast.dataset.position = position;

        return toast;
    }

    generateToastIcon(type) {
        let toastIcon;

        toastIcon = document.createElement('div');
        toastIcon.classList.add('toast-icon');
        switch(type) {
            case 'success':
                toastIcon.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path fill=\"none\" d=\"M0 0h24v24H0z\"/><path d=\"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z\" fill=\"" + this.C_SUCCESS + "\"/></svg>";
                break;
            case 'error':
                toastIcon.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path fill=\"none\" d=\"M0 0h24v24H0z\"/><path d=\"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z\" fill=\"" + this.C_ERROR + "\"/></svg>";
                break;
            case 'warning':
                toastIcon.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path fill=\"none\" d=\"M0 0h24v24H0z\"/><path d=\"M12.866 3l9.526 16.5a1 1 0 0 1-.866 1.5H2.474a1 1 0 0 1-.866-1.5L11.134 3a1 1 0 0 1 1.732 0zm-8.66 16h15.588L12 5.5 4.206 19zM11 16h2v2h-2v-2zm0-7h2v5h-2V9z\" fill=\"" + this.C_WARNING + "\"/></svg>";
                break;
            case 'info':
                toastIcon.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path fill=\"none\" d=\"M0 0h24v24H0z\"/><path d=\"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z\" fill=\"" + this.C_INFO + "\"/></svg>";
                break;
        }

        return toastIcon;
    }

    generateToastContent(title, message) {
        let 
        toastContent, 
        toastTitle, 
        toastMessage;

        toastContent = document.createElement('div');
        toastContent.classList.add('toast-content');

        // Toast Title
        if(title !== undefined && title !== '') {
            toastTitle = document.createElement('div');
            toastTitle.classList.add('toast-title');
            toastTitle.innerText = title;
        }

        // Toast Message
        toastMessage = document.createElement('div');
        toastMessage.classList.add('toast-message');
        toastMessage.innerText = message;

        return { toastContent, toastTitle, toastMessage };
    }

    generateCloseBtn(type) {
        let 
        toastClose, 
        toastCloseButton;

        toastClose = document.createElement('div');
        toastClose.classList.add('toast-close');

        // Toast Close Button
        toastCloseButton = document.createElement('button');
        switch(type) {
            case 'success':
                toastCloseButton.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path fill=\"none\" d=\"M0 0h24v24H0z\"/><path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" fill=\"" + this.C_SUCCESS + "\"/></svg>";
                break;
            case 'error':
                toastCloseButton.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path fill=\"none\" d=\"M0 0h24v24H0z\"/><path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" fill=\"" + this.C_ERROR + "\"/></svg>";
                break;
            case 'warning':
                toastCloseButton.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path fill=\"none\" d=\"M0 0h24v24H0z\"/><path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" fill=\"" + this.C_WARNING + "\"/></svg>";
                break;
            case 'info':
                toastCloseButton.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path fill=\"none\" d=\"M0 0h24v24H0z\"/><path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" fill=\"" + this.C_INFO + "\"/></svg>";
                break;
        }

        return { toastClose, toastCloseButton };
    }

    removeToast() {
        const DELETION_DURATION = 600;

        this.toast.style.animation = `toastFadeOut ${DELETION_DURATION}ms ease-out backwards`;
        setTimeout(() => {
            this.toast.remove();
        }, DELETION_DURATION);
    }

    animateProgressBar(duration) {
        let progressBar = this.toast.querySelector('.toast-progress');

        if(this.progress === true) {
            progressBar.style.animation = `progressBar ${duration}ms ease-in-out forwards`;
        }
    }

}

export default Toastinette;
