
var api = getApp().globalData.api
function request({ url, method, data, header }){
  wx.showLoading({
    title: '请求中...',
  })
  return new Promise((resolve,reject)=>{
    wx.request({
      url: api + url,
      method: method || 'GET',
      data: data || {},
      header: header || {},
      success: res=>resolve(res.data),
      fail: reject,
      complete:()=>{
        wx.hideLoading({
          success: (res) => {},
        })
      }
    })
  })
}
module.exports = request