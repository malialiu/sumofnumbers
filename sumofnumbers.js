function sumFor(nums){
  let total = 0;
  for(let i = 0; i < nums.length; i++){
    total += nums[i];
  }
  return total;
}

function sumWhile(nums){
  let total = 0;
  let i = 0;
  while(i < nums.length){
    total += nums[i];
    i++;
  }
  return total;
}

function sumRecursion(nums,length){
  if(length <= 0){
    return 0;
  }
  else{
    return nums[length-1] + sumRecursion(nums,length-1);
  }
}

function sumTheSimpleWay(nums){
  return _.reduce(nums,function(memo,num){return memo + num});
}

const nums = [1,2,3,4,5];
console.log(sumFor(nums));
console.log(sumWhile(nums));
console.log(sumRecursion(nums,nums.length));
console.log(sumTheSimpleWay(nums));