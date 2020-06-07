// 서버에서 받은 데이터 response를 callback에 넘겨줌
function getData(callback) {
    $.get('https://domain.com/products/1', function(response) {
        callback(response);
    });
}

// $.get을 통한 response 값이 tableData에 전달됨
getData(function(tableData) {
    console.log(tableData);
});


function* 함수명() {
}