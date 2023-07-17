// pages/alter/alter.js
Page({

    /**
     * 页面的初始数据
     */


    data: {
        imgList: [],
        imgUrl: [],
        
    },
    onShow(){
this.setData({
    res: wx.getStorageSync('msg')
})
    },
    ChooseImage() {
        wx.chooseImage({
            count: 1, //默认9
            sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], //从相册选择
            success: (res) => {
                wx.showLoading({
                    title: '正在上传',
                })
                console.log(res)
                this.setData({
                    res: res
                })
                //foreach



                // 分隔线
                let length = this.data.imgList.length
                if (length != 0) {
                    this.setData({
                        imgList: this.data.imgList.concat(res.tempFilePaths)
                    })
                } else {
                    this.setData({
                        imgList: res.tempFilePaths
                    })
                }
                //写云函数也不行,难搞哦
                //行吧，来个你死我活的，不弄好就不进入下面的函数
                this.data.imgList.forEach(item => {
                    setTimeout(() => {

                    }, 100);
                    let timestamp = (new Date()).valueOf();
                    var list = this.data.imgUrl
                    wx.cloud.uploadFile({
                        // 指定上传到的云路径
                        cloudPath: timestamp + '.png',
                        // 指定要上传的文件的小程序临时文件路径
                        filePath: item,
                        // 成功回调
                        success: res => {
                            console.log('上传成功', res)
                            if (res.fileID) {
                                list.push(String(res.fileID))
                                this.setData({
                                    imgUrl: list
                                })
                            }

                        },
                    })
                })
                while (this.data.imgUrl.length != length) {
                    setTimeout(() => {

                    }, 500);

                }
                wx.hideLoading({
                    success: (res) => {},
                })
            }
        });
    },
    ViewImage(e) {
        console.log(e)
        wx.previewImage({
            urls: this.data.imgUrl,
            current: e.currentTarget.dataset.url
        });
    },
    DelImg(e) {
        wx.showModal({
            title: '提示',
            content: '确定要删除这张照片？',
            cancelText: '取消',
            confirmText: '删除',
            success: res => {
                if (res.confirm) {
                    var indexx = e.currentTarget.dataset.index
                    this.data.imgUrl.splice(e.currentTarget.dataset.index, 1);
                    this.data.imgList.splice(e.currentTarget.dataset.index, 1);

                    //获得被删除的元素值
                    //我真的服了




                    this.setData({
                        imgList: this.data.imgList,
                        imgUrl: this.data.imgUrl
                    })
                }
            }
        })
    },
    upimage() {
        wx.showLoading({
            title: '正在添加',
        })
        let list = []

        this.data.imgList.forEach(item => {
            setTimeout(() => {

            }, 100);
            let that = this;
            let timestamp = (new Date()).valueOf();

            // 将图片上传至云存储空间
            wx.cloud.uploadFile({

                // 指定上传到的云路径
                cloudPath: timestamp + '.png',
                // 指定要上传的文件的小程序临时文件路径
                filePath: item,
                // 成功回调
                success: res => {
                    console.log('上传成功', index)

                    wx.showToast({
                        title: '上传图片成功',
                        icon: 'none'
                    })
                    if (res.fileID) {
                        list.push(String(res.fileID))
                        that.setData({
                            zhaopian: '图片如下',
                            imgUrl: list,
                        })

                    }
                    //写数据库添加

                },
            })

        })
        //到这里完成 

        wx.hideLoading({
            success: (res) => {},
        })

    },
    submit(e) {
        console.log(e)
        var form = e.detail.value
        var name = form.name
        var phone = form.phone
        var image = this.data.res.image
        if (this.data.imgUrl.length == 0) {
            // 说明没有上传新的

        } else {
            image = this.data.imgUrl[0]
        }
        var res = {
            name,
            phone,
            image,
        }
        wx.setStorageSync('msg', res)
        wx.showToast({
            title: '修改成功,即将返回',
        })
        setTimeout(() => {
            wx.navigateBack({
                delta: '1'
            })
        }, 1000);
    }
})