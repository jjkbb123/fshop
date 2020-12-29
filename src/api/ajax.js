/* 
ajax请求函数模块
返回值: promise对象(异步返回的数据是: response.data)
*/
import axios from 'axios'

export default function ajax(url, data={}, type='GET') {
  return new Promise((resolve, reject) => {
    let promise
    if(type==='GET') {
      //user=123&pas=123
      let path = ''
      Object.keys(data).forEach(item => {
        path = path + item + '=' + data[item] + '&'
      })
      if(path) {
        path = path.substr(0,path.length-1)
      }
       promise = axios.get(url+ '?' + path)
    }else {
       promise = axios.post(url,data)
    }

    promise.then(
      response => resolve(response.data)
    ).catch(
      error => reject(error)
    )
  })

  
}