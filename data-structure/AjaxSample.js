function getData() {
    var tableData;
    $.get('https://domain.com/product/1', function(response) {
        tabledata = response;
    });
    return tableData;
}

console.log(getData());