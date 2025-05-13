const this_year = document.querySelector("#currentyear");
const last_modified = document.querySelector("#lastModified");
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const title = document.getElementById('tittle-album');
const menuOptions = document.querySelectorAll('a');

let today = new Date();
let last_date = new Date(document.lastModified);

this_year.innerHTML = today.getFullYear();
last_modified.innerHTML = `Last Modified:  <span class="highlight">${last_date}</span>`;

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

navigation.addEventListener('click', function (e) {
    const clickedElement = e.target;
    title.textContent = clickedElement.textContent;
    menuOptions.forEach(element => {
        element.classList.remove('active')
    });
    clickedElement.classList.toggle('active');
})



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
    const courses_div = document.querySelector('#courses');
    courses_div.innerHTML = "";
    return courses_div;
}

function displayCourses(listCourses, parentElement) {
    const credits = listCourses.reduce((sum, c) => sum + c.credits, 0);

    const credits_message = document.createElement('p');
    const credits_section = document.querySelector('.credits');
    credits_message.classList.toggle('credits-message');
    credits_message.innerHTML = `The total number of course listed below is ${credits}`;
    credits_section.innerHTML = "";
    credits_section.appendChild(credits_message);

    listCourses.forEach(c => {
        const item = document.createElement('span');
        item.classList.toggle('course');
        if (c.completed) {
            item.innerHTML = `✓  ${c.subject} ${c.number}`;
            item.classList.toggle('active-course');
        } else {
            item.innerHTML = `${c.subject} ${c.number}`;
            item.classList.remove('active-course');
        }
        parentElement.appendChild(item);
    });
}

const select_all = document.querySelector('#btn-all');
select_all.addEventListener('click', () => {
    displayCourses(courses, resetCourses());
});

const select_cse = document.querySelector('#btn-cse');
const cse_courses = courses.filter(c => c.subject === 'CSE');
select_cse.addEventListener('click', () => {
    displayCourses(cse_courses, resetCourses());
});

const select_wdd = document.querySelector('#btn-wdd');
const wdd_courses = courses.filter(c => c.subject === 'WDD');
select_wdd.addEventListener('click', () => {
    displayCourses(wdd_courses, resetCourses());
});