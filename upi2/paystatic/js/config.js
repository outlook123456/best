/*
 * @Author: your name
 * @Date: 2021-10-26 07:38:02
 * @LastEditTime: 2021-10-28 21:58:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /zhifu_UPI_pay_h5/UPI_pay_new/js/config.js
 */
var upiPayConfig = [
    {
        name: "PayTM",
        icon: "",
    },{
        name: "PhonePe",
        icon: "",
    },{
        name: "Google Pay",
        icon: "",
    },{
        name: "Other Apps",
        icon: "",
    }
]

function GetTime() {
    var date = new Date()
    var time = dateFormat("mm-dd HH:MM", date)
    $("#systemTime").text(time);
}

function dateFormat(fmt, date) {
    let ret;
    const opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "m+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "M+": date.getMinutes().toString(),         // 分
        "S+": date.getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        };
    };
    return fmt;
}