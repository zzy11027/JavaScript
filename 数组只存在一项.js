const indexArr = [1,1,1,2,2,3,3,6];
let indexArrFun = (arr) => {
  let pushArr = [];
  arr.forEach((item, index) => {
    indexArr.indexOf(item) !== indexArr.lastIndexOf(item) ? null : pushArr.push(item)
  })
  return pushArr
}



let test = indexArrFun(indexArr);
console.log('test :>> ', test);