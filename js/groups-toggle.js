var slider = document.getElementsByClassName("groups-selector")[0];

function setGroup() {
    slider.classList.add('group-selected');
}

function setChat() {
    slider.classList.remove('group-selected');
}