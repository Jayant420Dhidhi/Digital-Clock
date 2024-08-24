setInterval(() => {
    // get time indicator elements
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    // digits time indicator
    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');

    // dot time indicator
    let dotH = document.querySelector('.h_dot');
    let dotM = document.querySelector('.m_dot');
    let dotS = document.querySelector('.s_dot');

    // get current time
    let now = new Date();
    let h = now.getHours() % 12 || 12; // convert to 12-hour format
    let m = now.getMinutes();
    let s = now.getSeconds();
    let ap = now.getHours() >= 12 ? 'PM' : 'AM';

    // add leading zero to single digits
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    // set time and label
    hours.textContent = h + ' Hours';
    minutes.textContent = m + ' Minutes';
    seconds.textContent = s + ' Seconds';
    ampm.textContent = ap;

    // set time circular indicator
    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;

    // set dot time position indicator
    dotH.style.transform = `rotate(${h * 30}deg)`;
    dotM.style.transform = `rotate(${m * 6}deg)`;
    dotS.style.transform = `rotate(${s * 6}deg)`;
}, 1000);