window.onload = () => {

    let toggle = document.querySelector('#toggle-sidebar');
    let sidebar = document.querySelector('#sidebar');

    toggle.onclick = () => sidebar.classList.toggle('toggled');

}