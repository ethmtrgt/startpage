const commands = {
    go: (target) => {
        if (target == '') {
            _print('No target given!', color = 'red');
        } else {
            if (!target.match(/^https?:\/\/.+/g)) {
                target = 'http://' + target;
            }
            window.open(target, "_self");
        }
    },
    google: (query) => {
        if (query == '') {
            window.open("https://google.com/", "_self");
        } else {
            window.open("https://google.com/search?q=" + query, "_self");
        }
    },
    reddit: (subreddit) => {
        if (subreddit == '') {
            window.open("https://reddit.com/", "_self");
        } else {
            window.open("https://reddit.com/r/" + subreddit, "_self");
        }
    },
    print: (string) => {
        _print(string);
    },
    clear: () => {
        _clear();
    },
    date: () => {
        _print('26/04/2022')
    },
    clock: () => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        _print(hours + ':' + minutes);
    },
    show_commands: () => {
        let availableCommands = Object.keys(commands);
        let output = '';
        availableCommands.forEach((cmd) => {
            output += cmd + ' ';
        });
        _print(output);
    }
}
