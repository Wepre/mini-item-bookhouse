// pages/template/user/user02/user02.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
       
      iconList: [{
        icon: 'moneybagfill',
        color: 'blue',
        badge: 0,
        name: '修改个人信息'
      }, {
        icon: 'presentfill',
        color: 'red',
        badge: 0,
        name: '功能二',
        bindtap: "bindZan"
      }, {
        icon: 'formfill',
        color: 'purple',
        badge: 11,
        name: '功能三',
        bindtap: "showResource"
      }, {
        icon: 'shopfill',
        color: 'green',
        badge: 0,
        name: '功能四',
        bindtap: "bindPoint"
      }],
      iconOtherList: [{
        icon: 'location',
        color: 'blue',
        badge: 0,
        name: '功能1'
      }, {
        icon: 'service',
        color: 'blue',
        badge: 0,
        name: '联系客服',
        bindtap: "bindZan"
      }, {
        icon: 'mark',
        color: 'blue',
        badge: 0,
        name: '功能3',
        bindtap: "showResource"
      }, {
        icon: 'mail',
        color: 'blue',
        badge: 0,
        name: '功能4',
        bindtap: "bindCollect"
      }, {
        icon: 'settings',
        color: 'blue',
        badge: 0,
        name: '功能5',
        bindtap: "bindZan"
      }],
  
    },
    toalter(e){
      wx.navigateTo({
        url: '../alter/alter',
      })
    },
    onShow(){
        this.setData({
            res:wx.getStorageSync('msg')
        })
    }
  })