/**
 * Created by CL on 2017/11/14.
 */
import axios from 'axios';
import {toast_bm, toast_md} from '../util/msg'

/*axios配置*/
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://localhost:1234/';

axios.interceptors.request.use((config) => {
  if (config.method == 'post') {
    config.data = JSON.stringify(config.data)
  }
  return config
}, (error) => {
  toast_md("错误的传参", 'fail');
  return Promise.reject(error);
})

axios.interceptors.response.use((res) => {
  if (!res.data.success) {
    return Promise.reject(res)
  }
  return res;
}, (error) => {
  toast_bm('网络错误');
  return Promise.reject(error)
})

export function fetch(url, param) {
  return new Promise((resolve, reject) => {
    axios.post(url, param).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}
