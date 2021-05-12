// computed: {
//   localComputed () { /* ... */ },
//   // 使用对象展开运算符将此对象混入到外部对象中
//   ...mapState({
//     // ...
//   })
// }

function fn() {
    return { a: 1, b: 2 };
}

// var test = {
//     fn(); //报错
// }
var test = {
  ...fn()
}
console.log('test :>> ', test);



var a = {
    id: 1,
    user: "admin"
};
//如何深拷贝a到b里面?
var b = {
    ...a,
    info: "拷贝a的内容到b的对象里面",
    name: "快到碗里来"
};
console.log('b :>> ', b);