const testArr = [1,2,3,4] 
Array.prototype.reduceForEach = function (callback) {
  this.reduce((acc, cur, index, array) => {
    console.log('acc,cur,index,array :>> ', acc,cur,index,array);
    callback(cur, index, array)
  }, [])
}

testArr.reduceForEach((item, index, array) => {
  console.log('item,index :>> ', item,index);
})
