const db = wx.cloud.database();
const _ = db.command;
Page({
    data: {

    },
    todetail(e) {
        console.log(e)
        var id = e.currentTarget.dataset.index
        wx.navigateTo({
            url: './detail?id=' + id,
        })
    },
    onLoad() {
        wx.cloud.callFunction({
            name: "getdata",
            data: {
                dbname: 'yishuList'
            }
        }).then(res => {
            console.log(res)
            this.setData({
                res: res.result.data.reverse()
            })
            wx.hideLoading()

        })
    },
    onShow() {

    }
})