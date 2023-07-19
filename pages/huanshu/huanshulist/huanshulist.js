const db=wx.cloud.database();
const _=db.command;
Page({
    data:{

    },
    onLoad(){

    },
    todetail(e){
        console.log(e);
        
        var id=e.currentTarget.dataset.id
        wx.navigateTo({
          url: '../huanshudetail/huanshudetail?id='+id,
        })
    },
    navi(){
        wx.navigateTo({
          url: '../addhuanshu/addhuanshu',
        })
    },
    onShow() {
        wx.showLoading({
          title: '正在加载',
        })
        this.setData({
            msg:wx.getStorageSync('msg')
        })
        wx.cloud.callFunction({
            name: "getdata",
            data: {
                dbname: 'huanshuList'
            }
        }).then(res => {
            console.log(res)
            this.setData({
                res: res.result.data.reverse()
            })
            wx.hideLoading()
        })
    }
})