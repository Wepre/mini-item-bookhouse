const db=wx.cloud.database();
const _=db.command;
Page({
    data:{

    },
    onLoad(e){
        var id=e.id
         db.collection('huanshuList').doc(id).get().then(res => {
              console.log(res)
              this.setData({
                res: res.data
              })
            })
    },
    onShow(){

    }
})