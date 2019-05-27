import Cookies from 'js-cookie'
/*模糊查询根据书名*/
export const getSearchLike = (vm) =>{
  let data ={
    bookName: vm.searchBookName
  }
  vm.$axios.post('/shi/book/findLike',data)
    .then((rep) => {
      console.log('模糊查询',rep.data[0].id)
      vm.books=rep.data
      vm.booksName=vm.books[0].bookName
      console.log('123',vm.books[0].bookName)
      vm.$router.push({path: '/searchBook'})
    })
}
/*模糊查询根据书名*/
export const getSearchLikes = (vm) =>{
  let data ={
    bookName: vm.booksName
  }
  vm.$axios.post('/shi/book/findLike',data)
    .then((rep) => {
      vm.$router.push({path: '/searchBook'})
      console.log('模糊查询',rep.data[0].id)
      vm.books=rep.data
      vm.booksName=vm.books[0].bookName
      console.log('123',vm.books[0].bookName)
    })
}
/*增加到购物车中*/
export const addShop = (vm) =>{
  let data = {
    name:Cookies.get('userName'),
    bookName: vm.booksName,
    bookNumber: vm.bookNumber,
    bookPrice: vm.bookPrice
  }
  vm.$axios.post('/shi/shop/addShop',data)
    .then((rep) => {
      vm.$Message.success('成功添加到购物车中')
    })
}

