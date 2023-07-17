// pages/fenlei/fenlei.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeKey: 0,
    swiper: [],
    type: [
      '考试用书',
      '课外书',
      '心理学',
      '名',
      '法律',
      '自然科学',
      '社会学',
      '政治军事',
      '宗教哲学',
      '科技工程',
      '语言学习',
      '汽车交通',

    ],
    name: ''
  },
  onChange(e) {
    console.log(e)
    this.setData({
      name: e.detail
    })
  },
  search(e){
    console.log(e)
    wx.navigateTo({
      url: '../search/search?id='+e.detail.value,
    })
  }   ,
  todetail(e) {
    console.log(e)
    var id = e.currentTarget.dataset.index
    wx.navigateTo({
      url: '../detail/detail?id=' + id,
    })
  },
  onLoad() {
    wx.cloud.callFunction({
      name: "getdata",
      data: {
        dbname: "bookList"
      }
    }).then(res => {
      console.log(res)
      this.setData({
        res: res.result.data.reverse()
      })
    })
  }
})