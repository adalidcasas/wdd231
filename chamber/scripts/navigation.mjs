export function initNavigation() {
    const navigation = document.querySelector('.navigation');

    navigation.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            document.querySelectorAll('.navigation a').forEach(el => el.classList.remove('active'));
            e.target.classList.add('active');
        }
    });
}
