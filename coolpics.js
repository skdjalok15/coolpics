const menuButton = document.getElementById('menu-button');
const navigation = document.getElementById('navigation');

menuButton.addEventListener('click', () => {
    if (navigation.style.display === 'block') {
        navigation.style.display = 'none';
    } else {
        navigation.style.display = 'block';
    }
});
