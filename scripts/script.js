const this_year = document.querySelector("#currentyear");
const last_modified = document.querySelector("#lastModified");
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const menuOptions = document.querySelectorAll('a');

const today = new Date();
const last_date = new Date(document.lastModified).toDateString();

this_year.textContent = today.getFullYear();
last_modified.textContent = `Last Modified: ${last_date}`;

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

navigation.addEventListener('click', function (e) {
    const clickedElement = e.target.closest('a');
    if (!clickedElement) return;
    title.textContent = clickedElement.textContent;
    menuOptions.forEach(element => element.classList.remove('active'));
    clickedElement.classList.add('active');
});

/*array courses*/
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

function resetCourses() {
    const container = document.querySelector('#courses');
    container.innerHTML = "";
    return container;
}

function updateCredits(list) {
    const totalCredits = list.reduce((sum, course) => sum + course.credits, 0);
    const creditsSection = document.querySelector('.credits');
    creditsSection.innerHTML = "";

    const message = document.createElement('p');
    message.classList.add('credits-message');
    message.textContent = `The total number of credits for the courses listed below is ${totalCredits}.`;
    creditsSection.appendChild(message);
}

function displayCourses(list, parent) {
    updateCredits(list);
    const fragment = document.createDocumentFragment();
    list.forEach(course => {
        const item = document.createElement('span');
        item.classList.add('course');
        if (course.completed) item.classList.add('active-course');
        item.textContent = `${course.completed ? '✓ ' : ''}${course.subject} ${course.number}`;
        fragment.appendChild(item);
    });
    parent.appendChild(fragment);
}

const buttons = [
    { id: '#btn-all', filter: () => courses },
    { id: '#btn-cse', filter: () => courses.filter(c => c.subject === 'CSE') },
    { id: '#btn-wdd', filter: () => courses.filter(c => c.subject === 'WDD') },
];

buttons.forEach(({ id, filter }) => {
    document.querySelector(id).addEventListener('click', () => {
        displayCourses(filter(), resetCourses());
    });
});