let isModalOpen = false;
let darkMode = false;

function toggleContrast() {
    if (!darkMode) {
        document.body.classList += " dark-theme";
        darkMode = true;
    } else {
        document.body.classList.remove("dark-theme");
        darkMode = false;
    } 
}

//mail function
function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible"

    emailjs.sendForm(
            'service_59vl9nc',
            'template_l16zawl',
            event.target,
            'l_Xq_kEPs1w5NT_Sr'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is not functioning currently. Please reach me at matt.mcafee@outlook.com"
            );
        })
}

//contact form function
function toggleModal() {
     if (!isModalOpen) {
        document.body.classList += " modal--open";
        isModalOpen = true;
    } else {
        document.body.classList.remove("modal--open");
        isModalOpen = false;
    } 
}