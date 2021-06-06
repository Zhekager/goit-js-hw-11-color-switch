const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector('body'),
};

const colorsSwitch = {
    isActive: false,
    colorsSwitchId: null,

    start() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        this.colorsSwitchId = setInterval(() => {
            refs.body.style.backgroundColor = `${colors[randomIntegerFromInterval(0, colors.length - 1)]
                }`;
        }, 1000);
    },
    
    stop() {
        clearInterval(this.colorsSwitchId);
        this.isActive = false;
    },
};

refs.startBtn.addEventListener('click', colorsSwitch.start.bind(colorsSwitch));
refs.stopBtn.addEventListener('click', colorsSwitch.stop.bind(colorsSwitch));