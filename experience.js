document.addEventListener('DOMContentLoaded', function() {
    const skills = [
        { name: 'Python', img: './images/pythonlogo.png', level: '90%' },
        { name: 'Java', img: './images/javalogo.svg', level: '80%' },
        { name: 'JavaScript', img: './images/JSLogo.png', level: '55%' },
        { name: 'HTML & CSS', img: './images/html_css_logo.png', level: '85%' },
        { name: 'Swift', img: './images/swiftlogo.png', level: '40%' },
        { name: 'R', img: './images/Rlogo.png', level: '40%' }
    ];

    /* Certifcations part commented out because used HTML/CSS instead
    const certifications = [
        { name: 'AWS Cloud Practitioner', img: 'path/to/aws.png' },
    ];
    */

    const skillsList = document.getElementById('skills-list');
    skills.forEach(skill => {
        const skillBox = document.createElement('div');
        skillBox.className = 'skill-box';

        const img = document.createElement('img');
        img.src = skill.img;
        img.alt = skill.name;

        const p = document.createElement('p');
        p.textContent = skill.name;

        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';

        const progress = document.createElement('div');
        progress.className = 'progress';
        progress.style.width = skill.level;

        progressBar.appendChild(progress);
        skillBox.appendChild(img);
        skillBox.appendChild(p);
        skillBox.appendChild(progressBar);

        skillsList.appendChild(skillBox);
    });

    // For the certifications part
    /*
    const certificationsList = document.getElementById('certifications-list');
    certifications.forEach(cert => {
        const certBox = document.createElement('div');
        certBox.className = 'certification-box';

        const img = document.createElement('img');
        img.src = cert.img;
        img.alt = cert.name;

        const p = document.createElement('p');
        p.textContent = cert.name;

        certBox.appendChild(img);
        certBox.appendChild(p);

        certificationsList.appendChild(certBox);
    });
    */
    
});