import request from '@/api/api.js'

export default {
  getInfo: (data) => request.getInfo('/m1/363668-0-default/getUserInfo', 'GET',data)
}