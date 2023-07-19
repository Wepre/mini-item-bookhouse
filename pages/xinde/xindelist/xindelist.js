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
          url: '../xindedetail/xindedetail?id='+id,
        })
    },
    navi(){
        wx.navigateTo({
          url: '../addxinde/addxinde',
        })
    },
    onShow() {
        this.setData({
            msg:wx.getStorageSync('msg')
        })
        wx.cloud.callFunction({
            name: "getdata",
            data: {
                dbname: 'xindeList'
            }
        }).then(res => {
            console.log(res)
            this.setData({
                res: res.result.data.reverse()
            })
        })
    }
})