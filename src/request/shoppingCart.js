import Cookies from 'js-cookie'
export const getShopCart = (vm) =>{
  let data ={
    name: Cookies.get('userName')
  }
  vm.$axios.post('/shi/shop/findShop',data)
    .then((rep) => {
      console.log('用户名',Cookies.get('userName'))
      console.log('长度',rep.data.length)
      vm.shops = rep.data
      for (let i = 0; i < rep.data.length; i++) {
        vm.totalPrice = vm.totalPrice+++rep.data[i].bookPrice
      }
    })
}


/*去除购物车里某个*/
export const deleteShop = (vm) =>{
  let data = {
    id: vm.id
  }
  vm.$axios.delete('/shi/shop/deleteShop/'+data.id)
    .then((rep) =>{
      vm.$Message.success('删除成功')
      vm.totalPrice = 0
      getShopCart(vm)
    })
}
/*根据用户名进行用户信息查找*/
export const getUser = (vm) =>{
  let data ={
    username: Cookies.get('userName')
  }
  vm.$axios.post('/shi/user/findUser', data)
    .then((rep => {
      console.log('用户数据',rep.data.trueName)
      vm.formItem.phone = rep.data.phone
      vm.formItem.address = rep.data.address
      vm.formItem.name = rep.data.trueName
    }))
}
