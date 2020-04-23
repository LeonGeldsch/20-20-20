const dialog = document.querySelector('dialog')

window.onload = function() {
    registerButtons('./working.html');
    dialogPolyfill.registerDialog(dialog);

    info = this.parseQuery(window.location.search);

    let currentDate = new this.Date().getTime();
    let countDowndate = moment(currentDate).add(info.second_timeval, info.second_timeunit);

    let notificationTitle ='Rest is over';
    let notificationText = `${info.firstTimeVal} ${info.firstTimeUnit} timer starting`;
    handleCountdown(notificationText,notificationTitle);
}
