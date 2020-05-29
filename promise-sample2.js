const fs = require('fs');
const path = require('path');

const STATUS_SUCCESS = 'success';
const STATUS_ERROR = 'error';
const EXT_LIST = ['txt', 'png', 'jpg', 'jpeg', 'gif'];

class FileSendProcess {

    // 결과 리턴 함수
    returnData(filename, status, msg) {
        return {"filename": filename, "status": status, "msg": msg};
    }

    // 파일명 추출
    watchFileName(filePath) {
        return filePath.substring(filePath.lastIndexOf('/') + 1);
    }
    
    // 비동기 - 파일 존재 유무 확인
    async isFileExistsPromise(filePath) {
        return new Promise((resolve, reject) => {
            fs.stat(filePath, (err, stats) => {
                // if(err) console.error(err);
                if(err) resolve({status: STATUS_ERROR, msg: JSON.stringify(err)});
                else resolve({status: STATUS_SUCCESS, msg: stats.size});
            });
        });
    }

    // 비동기 - 파일 여러개 크기 확인
    async arrFileCheckPromise(filePath) {
        return new Promise((resolve, reject) => {
            let ret = [];
            filePath.forEach((items, index) => {
                let fileNames = this.watchFileName(items);
                this.isFileExistsPromise(items).then((stats) => {
                    ret.push(this.returnData(fileNames, stats.status, stats.msg));
                    if(filePath.length -1 === index) resolve(ret);
                });
            });
        });
    }

    // 동기 - 파일 존재 유무 확인
    isFileExists(filePath) {
        try {
            const stats = fs.statSync(filePath);
            return {status: STATUS_SUCCESS, msg: stats.size};
        } catch(e) {
            return {status: STATUS_ERROR, msg: JSON.stringify(e)};
        }
    }

    // 동기 - 파일 여러개 크기 확인(콜백으로도 사용가능)
    arrFileCheckSync(filePath, callback) {
        let ret = [];
        filePath.forEach((items) => {
            let fileNames = this.watchFileName(items);
            let res = this.isFileExists(items);
            ret.push(this.returnData(fileNames, res.status, res.msg));
        });
        if(callback === undefined) return ret;
        else callback(ret);
    }

    // 비동기 파일 확장자 검사(전채 경로 방식/파일명 방식 둘다 가능)
    async getExtChk(filePath) {
        return new Promise((resolve, reject) => {
            if(filePath.lastIndexOf('/') != -1) filePath = this.watchFileName(filePath);
            let extName = path.extname(filePath).replace('.', '');
            if(EXT_LIST.indexOf(extName) != -1) resolve(this.returnData(filePath, STATUS_SUCCESS, extName));
            else resolve(this.returnData(filePath, STATUS_ERROR, "Unusable extension."));
        });
    }

    // 비동기 배열 파일 확장자 검사
    async arrFileExtCheck(filePath) {
        return new Promise((resolve, reject) => {
            let ret = [];
            filePath.forEach((items, index) => {
                this.getExtChk(items).then((result) => {
                    ret.push(result);
                    if(filePath.length -1 === index) resolve(ret);
                });
            });
        });
    }

    // 동기 파일 확장자 검사(전채 경로 방식/파일명 방식 둘다 가능)
    getExtChkSync(filePath) {
        if(filePath.lastIndexOf('/') != -1) filePath = this.watchFileName(filePath);
        let extName = path.extname(filePath).replace('.', '');
        if(EXT_LIST.indexOf(extName) != -1) return this.returnData(filePath, STATUS_SUCCESS, extName);
        else return this.returnData(filePath, STATUS_ERROR, "Unusable extension.");
    }

    // 동기 배열 파일 확장자 검사(콜백으로도 사용가능)
    arrFileExtCheckSync(filePath, callback) {
        let ret = [];
        filePath.forEach(items => {
            ret.push(this.getExtChkSync(items));
        });
        if(callback === undefined) return ret;
        else callback(ret);
    }
    // 파일 전송

    // 파일 전송 결과 전달
}

var filePath1 = '/Users/minsungkim/Documents/project/javascript-test/currentSampleFile.txt';
var filePath2 = '/Users/minsungkim/Documents/project/javascript-test/currentSampleFile2.text';

const fsp = new FileSendProcess();

// Promise 방식
function apptest() {
    fsp.arrFileCheckPromise([filePath1, filePath2]).then((result) => {
        console.log(`Promise방식 - ${JSON.stringify(result)}`);
    });
}
// apptest();


// async ~ await방식
async function app() {
    const result = await fsp.arrFileCheckPromise([filePath1, filePath2]);
    console.log(`비동기 - ${JSON.stringify(result)}`);
}
// app();

// 동기 방식
function apps() {
    const result = fsp.arrFileCheckSync([filePath1, filePath2]);
    console.log(`동기 - ${JSON.stringify(result)}`);
}
// apps();

// 동기 방식 (콜백)
function appsCallback() {
    fsp.arrFileCheckSync([filePath1, filePath2], (result) => {
        console.log(`동기(콜백) - ${JSON.stringify(result)}`);
    });
}
// appsCallback();


// const fileExt = fsp.getExtChk(filePath2);
// console.log(fileExt)

// const fileExts = fsp.arrFileExtCheckSync([filePath1, filePath2]);
// console.log(fileExts);

function arrFileExtCheckerCallbackDone() {
    fsp.arrFileExtCheckSync([filePath1, filePath2], (result) => {
        console.log(`동기(콜백)-${JSON.stringify(result)}`);
    });
}
// arrFileExtCheckerCallbackDone();

async function fileExtChecker() {
    const result = await fsp.arrFileExtCheck([filePath1, filePath2]);
    console.log(result);
}
// fileExtChecker();