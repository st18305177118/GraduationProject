import axios from 'axios'
import { Message } from 'iview'

// axios 配置
axios.defaults.timeout = 3000 // 设置超时时间为3s
// 配置axios发送请求时携带cookie
axios.defaults.withCredentials = true
// 如果为开发环境，将baseURL设置为服务器地址
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:8888'
}

// 设置content-type
// 这里处理的是 针对SpringMVC Controller 无法正确获得请求参数的问题
axios.interceptors.request.use(
  config => {
    config.data = JSON.stringify(config.data)
    config.headers = {
      // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      'Content-Type': 'application/json;charset=UTF-8'
    }
    // config.headers['Access-Control-Allow-Origin'] = '*'
    const data = config.data
    if (!data) {
      return config
    }
    const key = Object.keys(data)
    // 重写data，由{"name":"name","password":"password"} 改为 name=name&password=password
    config.data = encodeURI(key.map(name => `${name}=${data[name]}`).join('&'))
    // 设置Content-Type
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(response => {
  const res = response.data
  if (res.code !== 200) {
    Message({
      message: res.message,
      type: 'error',
      duration: 5 * 1000
    })
  } else {
    return response.data
  }
}, error => {
  console.log('err:' + error)
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
})
/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url,params={}){
  return new Promise((resolve,reject) => {
    axios.get(url,{
      params:params
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.post(url,data)
      .then(response => {
        resolve(response.data);
      },err => {
        reject(err)
      })
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.patch(url,data)
      .then(response => {
        resolve(response.data);
      },err => {
        reject(err)
      })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.put(url,data)
      .then(response => {
        resolve(response.data);
      },err => {
        reject(err)
      })
  })
}

export default axios
