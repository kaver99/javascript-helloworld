// QUEUE FIFO - First In First Out
const queue = [];
// 새로운 요소 추가
queue.push(1);
queue.push(2);

// queue 안의 데이터를 모두 확인
console.log(queue);

// 1번째 요소를 제거하고 반환 
const r = queue.shift();
// 반환된 데이터 확인
console.log(r);
