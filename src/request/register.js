import QS from 'qs'
export const getAllManager = (vm) => {
  console.log("register")
  vm.$axios.get('/shi/manager/list')
    .then((rep) =>{
      console.log('registersss',rep.data)
    })
}
export const registerUser = (vm) =>{
  let data ={
    username: vm.formItem.username,
    password: vm.formItem.password
  }

  vm.$axios.post('/shi/user/register',data)
    .then((rep) =>{
      console.log("注册????????",rep.data)
      if(rep.data==false){
        vm.$Message.error("用户已存在，请重新注册！")
      }else if(rep.data==true){
        vm.$Message.success("注册成功")
      }
      // if(rep.data='添加成功'){
      //   vm.$Message.success("注册成功")
      // }else if(rep.data='添加失败') {
      //   vm.$Message.error("注册失败")
      // }

    })
}
