const db = wx.cloud.database();
const _ = db.command;
Page({
    data: {
        goods: []
    },
    onLoad(e) {
        wx.showLoading({
          title: '正在加载',
        })
        var content = e.id + ""
        db.collection('bookList').where(_.or([{
            name: db.RegExp({
                regexp: content,
                options: 'i',
            }),

        }, {
            author: db.RegExp({
                regexp: content,
                options: 'i',
            }),
        }])).get().then(res => {
            console.log(res)
            this.setData({
                res:res.data
            })
            wx.hideLoading()
        })
    },
    todetail(e){
        console.log(e)
        var id=e.currentTarget.dataset.index
        wx.navigateTo({
          url: '../detail/detail?id='+id,
        })
      },
})