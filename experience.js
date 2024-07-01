document.addEventListener('DOMContentLoaded', function() {
    const skills = [
        { name: 'Python', img: 'path/to/python.png', level: '90%' },
        { name: 'Java', img: 'path/to/java.png', level: '80%' },
        { name: 'JavaScript', img: 'path/to/javascript.png', level: '85%' },
        { name: 'HTML & CSS', img: 'path/to/html_css.png', level: '95%' },
        { name: 'Swift', img: 'path/to/swift.png', level: '70%' },
        { name: 'R', img: 'path/to/r.png', level: '75%' }
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