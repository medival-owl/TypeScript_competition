// TypeScriptファイル
document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('title') as HTMLElement;
    const button = document.getElementById('changeColorButton') as HTMLButtonElement;
  
    button.addEventListener('click', () => {
      if (title.style.color === 'black') {
        title.style.color = 'blue';
      } else {
        title.style.color = 'black';
      }
    });
  });
  