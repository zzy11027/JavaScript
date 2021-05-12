let abc = {
    fun: (state, a) => (again) => again * state * a
};


let abc_fn = {
  fun: function (state, a) {
    return function(again) {
      return again * state * a;
    }
  }
}

const res = abc.fun(1, 2)(3);
const res_1 = abc_fn.fun(1, 2)(3);
console.log('res_1 :>> ', res_1);
console.log("res :>> ", res);