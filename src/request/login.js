import QS from 'qs'
import Cookies from 'js-cookie'
export const login = (vm)=>{
  let data ={
    username: vm.formItem.username,
    password: vm.formItem.password
  }
  vm.$axios.post('/shi/user/login',data)
    .then((rep)=>{
      console.log("登录")
      if(rep.data==false){
        vm.$Message.error("用户名或密码错误，请重新登录！")
      }else if(rep.data==true){
        vm.$Message.success("登录成功")
        vm.$router.push({path:'/'})
        // Cookies.set('isLogin',false)
        // Cookies.set('isShows',true)
        Cookies.set('userName',vm.formItem.username)
        // vm.isShow=false
        // vm.isShows=true
      }
  })
    .catch((e)=>{
      vm.$Message.error("用户名或密码错误！！！")
    })
}
