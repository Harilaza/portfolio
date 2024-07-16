let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let whatsappNumber = document.querySelector('.btn-group a span');
let whatsappBtn = document.querySelector('.copyButton span');
let socialSide = document.querySelector('.social-side');
let preloader = document.querySelector('#preloader');
let main = document.querySelector('main');
let notifications = document.querySelector('.notifications');
let success = document.querySelector('.success');
let error = document.querySelector('.error');
let information = document.querySelector('.information');


window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                if (id === 'education' || id === 'project' || id === 'services' || id === 'skills' || id === 'professional') {
                    socialSide.style.opacity = '1';
                    socialSide.style.left = '-210px';
                    socialSide.style.transition = '1s ease'
                } else {
                    socialSide.style.opacity = '1';
                    socialSide.style.left = '-250px';
                }

            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbar.style.display = window.matchMedia('(max-width: 895px)').matches && navbar.style.display === 'block' ? 'none' : 'block';
}

const copyToClipboard = () => {
    information.style.animation = 'notification 4s';
    let numberToCopy = '+261385027232';

    let tempInput = document.createElement('textarea');
    tempInput.value = numberToCopy;
    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    document.execCommand('copy');

    document.body.removeChild(tempInput);
    whatsappNumber.textContent = 'copied';
    whatsappBtn.textContent = 'copied';
    setTimeout(function() {
        whatsappNumber.textContent = '+261 38 50 272 32';
        whatsappBtn.textContent = '+261385027232';
    }, 2000);
}

const downloadCV = () =>{
    let filePath = 'assets/cv/Andrianantenaina-Harilaza.pdf';
    let a = document.createElement('a');
    a.style.display = 'none';
    a.href = filePath;
    a.download = 'Andrianantenaina-Harilaza.pdf';

    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);
}

setTimeout(function() {
    preloader.style.animation = 'fadeOutUp 2.5s forwards';
    preloader.addEventListener('animationend', function() {
        document.body.classList.remove('lock-scroll');
        main.style.display = 'block';
    });
}, 2000);

const sendMail = (event) => {
    event.preventDefault();
    document.getElementById('submit').value = 'sending...';

    let formData = {
        to_name: 'Engineer',
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        from_number: document.getElementById('number').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    emailjs.send("service_4xq3988", "template_8ifrjln", formData)
        .then(function(response) {
            success.style.animation = 'notification 5s';
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('number').value = '';
            document.getElementById('subject').value = '';
            document.getElementById('message').value = '';
            document.getElementById('submit').value = 'Send Message';
        }, function(error) {
            console.log('FAILED...', error);
            error.style.animation = 'notification 5s';
        });
}




