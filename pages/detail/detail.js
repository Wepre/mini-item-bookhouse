const db = wx.cloud.database()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //数据
       res:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.showLoading({
            title: '正在加载',
        })
        var id = options.id 
        this.setData({
            id: options.id
        })
        const db = wx.cloud.database()
        db.collection('bookList').doc(id).get().then(res => {
            console.log(res)
            this.setData({
                res:res.data
            })
            wx.hideLoading({
                success: (res) => {},
            })
        })
    },
    viewimg(e) {
        console.log(e)
        wx.previewImage({
            urls: [e.currentTarget.dataset.value],
            current: e.currentTarget.dataset.value
        });
    },

})