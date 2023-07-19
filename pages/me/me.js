// pages/template/user/user02/user02.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
       
      iconList: [{
        icon: 'moneybagfill',
        color: 'green',
        badge: 0,
        name: '修改个人信息'
      }, {
        icon: 'presentfill',
        color: 'green',
        badge: 0,
        name: '我的心得',
        
      }, {
        icon: 'formfill',
        color: 'green',
        badge: 0,
        name: '我的换书',
        
      }, {
        icon: 'shopfill',
        color: 'green',
        badge: 0,
        name: '我的留言',
        
      }],

      iconOtherList: [{
        icon: 'location',
        color: 'green',
        badge: 0,
        name: '功能1'
      }, {
        icon: 'service',
        color: 'green',
        badge: 0,
        name: '联系客服',
        
      }, {
        icon: 'mark',
        color: 'green',
        badge: 0,
        name: '功能3',
        
      }, {
        icon: 'mail',
        color: 'green',
        badge: 0,
        name: '功能4',
        
      }, {
        icon: 'settings',
        color: 'green',
        badge: 0,
        name: '功能5',
        
      }],
  
    },
    iconclick(e){
        console.log(e)
        var name=e.currentTarget.dataset.index.name
        if (name=='修改个人信息') {
            wx.navigateTo({
              url: '../alter/alter',
            })
        }else if(name=='我的心得') {
            wx.navigateTo({
              url:'../xinde/myxinde/myxinde'
            })
        }else if(name=='我的换书') {
            wx.navigateTo({
              url:'../huanshu/myhuanshu/myhuanshu'
            })
        }else if(name=='我的留言') {
            wx.navigateTo({
              url:'../huanshu/huanshulist/huanshulist'
            })
        }else if(name=='艺术鉴赏') {
            // 艺术鉴赏
            
        }else if(name=='交流会共享') {
        //   这是什么交流会共享
        }else if(name=='读书心得') {
            wx.navigateTo({
                url:'../xinde/xindelist/xindelist'
              })
        }else if(name=='我的留言') {
            wx.navigateTo({
                url:'../xinde/xindelist/xindelist'
              })
        }else{
            wx.showToast({
              title: '敬请期待',
              icon:'none'
            })
        }
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