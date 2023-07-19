const db = wx.cloud.database();
const _ = db.command;
Page({
    data: {

    },
    onLoad() {

    },
    onShow() {

    },
    getNowDate: function () {
        var date = new Date();
        var year = date.getFullYear() //年
        var month = date.getMonth() + 1 //月
        var day = date.getDate() //日
        var hour = date.getHours() //时
        var minute = date.getMinutes() //分
        var second = date.getSeconds() //秒
        var xiaoshi = "";
        if (hour < 10) {
            xiaoshi = "0" + hour;
        } else {
            xiaoshi = hour + "";
        }
        var fenzhong = "";
        if (minute < 10) {
            fenzhong = "0" + minute;
        } else {
            fenzhong = minute + "";
        }
        var miao = "";
        if (second < 10) {
            miao = "0" + second;
        } else {
            miao = second + "";
        }
        var time = year + '-' + month + '-' + day + ' ' + xiaoshi + ':' + fenzhong + ':' + miao
        return time
    },
    submit(e) {
        console.log(e);
        var form = e.detail.value
        var msg=wx.getStorageSync('msg')
        var loginId=wx.getStorageSync('loginId')
        db.collection('huanshuList').add({
            data: {
                ...form,
                time: this.getNowDate(),
                ...msg,
                loginId:loginId
            }
        }).then(res => {
            console.log(res)
            wx.showToast({
                title: '添加成功',
            })
            wx.navigateBack({
              delta: 1,
              success: (res) => {},
              fail: (res) => {},
              complete: (res) => {},
            })
        })
    }
})