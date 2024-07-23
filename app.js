// TypeScriptファイル
document.addEventListener('DOMContentLoaded', function () {
    var title = document.getElementById('title');
    var button = document.getElementById('changeColorButton');
    button.addEventListener('click', function () {
        if (title.style.color === 'black') {
            title.style.color = 'blue';
        }
        else {
            title.style.color = 'black';
        }
    });
});
