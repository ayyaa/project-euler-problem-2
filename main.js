function fibonacci(num){
  var x = 1, y = 0, temp;

  while (num >= 0){
    temp = x;
    x = x + y;
    y = temp;
    num--;
  }
  
  if(y>=4000000) {
    alert("melebihi limit, limit 4.000.000");
  } else {
    return y;
  }
};

console.log(fibonacci(5));
