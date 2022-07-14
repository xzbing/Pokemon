import request from '@/utils/request'

export default {
  getInfo(url,type,data) {
    if(type == 'GET'){
      console.log(url,type,data);
      return request({
        type: type,
        url: url,
        params: data
      })
    }
    return request({
      type: type,
      url: url,
      data: data
    })
  }
}