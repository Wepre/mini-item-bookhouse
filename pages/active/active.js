Page({
    data: {
        goods: [],
        res: [],
        nowtime: ''
    },
    search(e) {
        console.log(e)
        wx.navigateTo({
            url: '../activesearch/activesearch?id=' + e.detail.value,
        })
    },
    onLoad() {
        wx.showLoading({
            title: '正在加载',
        })
        this.setData({
            nowtime: this.getNowDate()
        })
        wx.cloud.callFunction({
            name: "getdata",
            data: {
                dbname: 'activeList'
            }
        }).then(res => {
            console.log(res)
            this.setData({
                res: res.result.data.reverse()
            })
            wx.hideLoading()

        })
    },
    todetail(e) {
        console.log(e)
        var id = e.currentTarget.dataset.index
        wx.navigateTo({
            url: '../activedetail/activedetail?id=' + id,
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

})