//
// Replaces the text of a DOM element.
//
function replaceText(selector, text) {
    const element = document.getElementById(selector)
    if (element) element.innerText = text;
}

window.addEventListener('DOMContentLoaded', () => {
    replaceText('chrome-version', process.versions.chrome);
    replaceText('node-version', process.versions.node);
    replaceText('electron-version', process.versions.electron);
});