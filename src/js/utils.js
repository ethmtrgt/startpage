const focusToPrompt = () => {
    commandInput.focus();
}

const parseEntry = (entry) => {
    entry = entry.trim().replace(/\s\s+/g, ' ');
    command = entry.split(' ')[0];
    arg = entry.replace(command, '').trim();
    return {command, arg};
}

const _print = (arg, color = null) => {
    let line = document.createElement('div');
    line.classList.add('line');
    if (color == 'red') {
        line.classList.add('red');
    }
    line.innerText += arg;
    let commandInput = document.querySelector('#command-line');
    commandInput.parentNode.insertBefore(line, commandInput);
}

const _clear = () => {
    document.querySelectorAll('.line').forEach((elm) => {
        elm.parentNode.removeChild(elm);
    });
}

const _execute = (rawEntry) => {
    let returns = null
    _print(prompt.innerText + rawEntry);
    parsed = parseEntry(rawEntry);
    if (!(parsed.command in commands) && (parsed.command != '')) {
        _print('Unknown command!', color = 'red');
    } else {
        returns = commands[parsed.command](parsed.arg);
    }
    return returns;
}

