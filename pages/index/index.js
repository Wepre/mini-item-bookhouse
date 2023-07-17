Page({
  data: {
    activeKey: 0,
    hotbook: [],
    swiper: [],active:'0',
    iconList: [{
      icon: 'moneybagfill',
      color: 'green',
      badge: 0,
      name: '图书分类'
    }, {
      icon: 'shopfill',
      color: 'green',
      badge: 0,
      name: '书屋介绍',
      bindtap: "bindZan"
    }, {
      icon: 'formfill',
      color: 'green',
      badge: 0,
      name: '我要留言',
      bindtap: "showResource"
    }, {
        icon: 'formfill',
        color: 'green',
        badge: 0,
        name: '换书',
        bindtap: "showResource"
      },  {
        icon: 'formfill',
        color: 'green',
        badge: 0,
        name: '艺术鉴赏',
        bindtap: "showResource"
      },  {
        icon: 'formfill',
        color: 'green',
        badge: 0,
        name: '交流会共享',
        bindtap: "showResource"
      },  {
        icon: 'formfill',
        color: 'green',
        badge: 0,
        name: '读书心得',
        bindtap: "showResource"
      },  {
      icon: 'timefill',
      color: 'green',
      badge: 0,
      name: '其他',
      bindtap: "bindPoint"
    }],
  },
  iconclick(e){
    console.log(e)
    var name=e.currentTarget.dataset.index.name
    if (name=='图书分类') {
        wx.switchTab({
          url: '../fenlei/fenlei',
        })
    }else if(name=='书屋介绍') {
        wx.navigateTo({
          url:'../about/about'
        })
    }else if(name=='我要留言') {
        wx.navigateTo({
          url:'../advice/advice'
        })
    }else{
        wx.showToast({
          title: '敬请期待',
          icon:'none'
        })
    }
  }, 
  search(e){
    console.log(e)
    wx.navigateTo({
      url: '../search/search?id='+e.detail.value,
    })
  }   ,
  onLoad: function () {
    wx.showLoading({
      title: '正在加载',
    })
    wx.cloud.callFunction({
      name: "getdata",
      data: {
        dbname: 'swiper'
      }
    }).then(res => {
      console.log(res)
      this.setData({
        swiper: res.result.data[0].images
      })
      wx.hideLoading({
        success: (res) => {},
      })
    })

  },
  onShow() {
    var msg=wx.getStorageSync('msg')
    if (!msg) {
        wx.navigateTo({
          url: '../login/login',
        })
    }
    // 不分页了，直接上
    wx.showLoading({
      title: '正在加载',
    })
    wx.cloud.callFunction({
      name: "getbookbylimit",
      data: {

      }
    }).then(res => {
      console.log(res)
      this.setData({
        hotbook: res.result.data.reverse()
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
  toall(){
    wx.switchTab({
      url: '../fenlei/fenlei',
    })
  },
  onReachBottom(e) {
    console.log(e)
  }
})