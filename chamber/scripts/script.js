const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

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