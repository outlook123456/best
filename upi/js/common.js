var REQ_URL = "https://payment.bestpay.live/merchant";

function toast(msg, duration) {
    duration = isNaN(duration) ? 3000 : duration;
    var m = document.createElement('div');
    m.innerHTML = msg;
    m.style.cssText = "padding:0.06rem; background:#000000; opacity:0.72; color:#FFFFFF; text-align:center; border-radius:0.2rem; position:fixed; top:50%; left:50%; transform:translate(-50%,-50%); -webkit-transform:translate(-50%,-50%); z-index:999; font-size: 0.3rem; min-width:50%; max-width: 70%;";
    document.body.appendChild(m);
    setTimeout(function () {
        var d = 0.5;
        m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
        m.style.opacity = '0';
        setTimeout(function () {
			document.body.removeChild(m)
        }, d * 1000);
    }, duration);
}