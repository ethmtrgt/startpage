const main = document.querySelector('#main');
const terminal = document.querySelector('#terminal');
const prompt = document.querySelector('#prompt');
const commandInput = document.querySelector('#command-line input');

commandInput.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        rawEntry = commandInput.value;
        _execute(rawEntry);
        commandInput.value = '';
    };
});


// Set prompt text
prompt.innerText = config.prompt;

// Set background
main.style.backgroundImage = `url('${config.wallpaper}')`;

// Set events
terminal.addEventListener('click', focusToPrompt);
window.addEventListener('load', focusToPrompt);

