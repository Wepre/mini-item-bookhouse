const db = wx.cloud.database();
const _ = db.command;
Page({
    data: {

    },
    onLoad() {
        
        wx.getSystemInfo({
            success: res=> {
                console.log(res.windowHeight) // 获取可使用窗口高度
                let windowHeight = (res.windowHeight * (750 / res.windowWidth)); //将高度乘以换算后的该设备的rpx与px的比例
                console.log(windowHeight) //最后获得转化后得rpx单位的窗口高度
                this.setData({
                    windowHeight,
                })
                wx.showToast({
                  title: '3秒后即将跳转到首页',
                  icon:'none'
                })
                setTimeout(() => {
                    wx.switchTab({
                      url: '../index/index',
                    })
                }, 3000);
            }
        })
    },
    onShow() {

    }
})