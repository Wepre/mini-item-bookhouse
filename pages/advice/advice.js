const db = wx.cloud.database();
const _ = db.command;
Page({
    data: {
        content: ''
    },
    input(e) {
        console.log(e)
        this.setData({
            content: e.detail.value
        })
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
    // 支付操作
    
    submit(e) {
        console.log(e)
        wx.showModal({
            title: '提示',
            content: '确定留言？',
            complete: (res) => {
                if (res.cancel) {

                }

                if (res.confirm) {
                    db.collection('adviceList').add({
                        data: {
                            time: this.getNowDate(),
                            content: e.detail.value,
                            name:this.data.msg.name,
                            image:this.data.msg.image
                        }
                    }).then(res => {
                        wx.showToast({
                            title: '发布成功',
                        })
                        this.setData({
                            content: ''
                        })
                        this.onShow()
                    })
                }
            }
        })
    },
    onShow() {
        this.setData({
            msg:wx.getStorageSync('msg')
        })
        wx.cloud.callFunction({
            name: "getdata",
            data: {
                dbname: 'adviceList'
            }
        }).then(res => {
            console.log(res)
            this.setData({
                res: res.result.data.reverse()
            })
        })
    }
})