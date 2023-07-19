const db = wx.cloud.database();
const _ = db.command;
Page({
    data: {

    },
    onLoad() {

    },
    todetail(e) {
        console.log(e);

        var id = e.currentTarget.dataset.id
        wx.navigateTo({
            url: '../xindedetail/xindedetail?id=' + id,
        })
    },
    del(e) {
        console.log(e);

        var id = e.currentTarget.dataset.id
        wx.showModal({
            title: '提示',
            content: '是否删除',
            complete: (res) => {
                if (res.cancel) {

                }

                if (res.confirm) {
                     db.collection('xindeList').doc(id).remove().then(res => {
                          wx.showToast({
                            title: '删除成功',
                          })
                          this.onShow()
                    
                        })
                }
            }
        })
    },
    navi() {
        wx.navigateTo({
            url: '../addxinde/addxinde',
        })
    },
    onShow() {
        this.setData({
            msg: wx.getStorageSync('msg')
        })
        var loginId = wx.getStorageSync('loginId')
        db.collection('xindeList').where({
            loginId,
        }).get().then(res => {
            console.log(res)
            this.setData({
                res: res.data.reverse()
            })
        })
    }
})