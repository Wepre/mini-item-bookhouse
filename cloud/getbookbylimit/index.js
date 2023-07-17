// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const MAX_LIMIT = 20 //分页的大小
// 云函数入口函数
exports.main = async (event, context) => {

  return  db.collection('bookList').limit(MAX_LIMIT).get()

}
