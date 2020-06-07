
// 합성 함수
// closure : 내부적으로 접근할 수 있는 함수를 선언(price)
const getDiscount = rate => price => rate * price;
const getTenpercentOff = getDiscount(0.1)


console.log(getTenpercentOff(10000));
console.log(getTenpercentOff(12000));

