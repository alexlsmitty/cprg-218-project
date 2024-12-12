// Select the menu opener button and navigation elements
const menuOpener = document.getElementById('menu-opener');
const navigation = document.getElementById('navigation');

// Add click event listener to toggle the 'invisible' class
menuOpener.addEventListener('click', () => {
  navigation.classList.toggle('invisible');
});