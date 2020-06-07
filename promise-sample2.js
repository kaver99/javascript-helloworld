const fs = require('fs');
const path = require('path');

const STATUS_SUCCESS = 'success';
const STATUS_ERROR = 'error';
const EXT_LIST = ['txt', 'png', 'jpg', 'jpeg', 'gif'];

class FileSendProcess {

    // 결과 리턴 함수
    returnData(filename, status, msg) {
        return JSON.stringify({"filename": filename, "status": status, "msg": msg});
    }

    // 파일명 추출
    watchFileName(filePath) {
        return filePath.substring(filePath.lastIndexOf('/') + 1);
    }
    
    // 비동기 - 파일 존재 유무 확인
    isFileExistsPromise(filePath) {
        return new Promise((resolve, reject) => {
            fs.stat(filePath, (err, stats) => {
                let fileNames = this.watchFileName(filePath);
                if(err) resolve(this.returnData(fileNames, STATUS_ERROR, err));
                else resolve(this.returnData(fileNames, STATUS_SUCCESS, stats.size));
            });
        });
    }

    // 비동기 - 파일 여러개 크기 확인
    arrFileCheckPromise(filePath) {
        return new Promise((resolve, reject) => {
            let ret = [];
            filePath.forEach((items, index) => {
                this.isFileExistsPromise(items).then((stats) => {
                    ret.push(JSON.parse(stats));
                    if(filePath.length -1 === index) resolve(JSON.stringify(ret));
                });
            });
        });
    }

    // 동기 - 파일 존재 유무 확인
    isFileExists(filePath) {
        let fileNames = this.watchFileName(filePath);
        try {
            const stats = fs.statSync(filePath);
            return this.returnData(fileNames ,STATUS_SUCCESS, stats.size);
        } catch(e) {
            return this.returnData(fileNames, STATUS_ERROR, e);
        }
    }

    // 동기 - 파일 여러개 크기 확인(콜백으로도 사용가능)
    arrFileCheckSync(filePath, callback) {
        let ret = [];
        filePath.forEach((items) => {
            ret.push(JSON.parse(this.isFileExists(items)));
        });
        if(callback === undefined) return JSON.stringify(ret);
        else callback(JSON.stringify(ret));
    }

    // 비동기 파일 확장자 검사(전채 경로 방식/파일명 방식 둘다 가능)
    getExtChk(filePath) {
        return new Promise((resolve, reject) => {
            if(filePath.includes('/')) filePath = this.watchFileName(filePath);
            let extName = path.extname(filePath).replace('.', '');
            if(EXT_LIST.includes(extName)) resolve(this.returnData(filePath, STATUS_SUCCESS, extName));
            else resolve(this.returnData(filePath, STATUS_ERROR, "Unusable extension."));
        });
    }

    // 비동기 배열 파일 확장자 검사
    arrFileExtCheck(filePath) {
        return new Promise((resolve, reject) => {
            let ret = [];
            filePath.forEach((items, index) => {
                this.getExtChk(items).then((result) => {
                    ret.push(JSON.parse(result));
                    if(filePath.length -1 === index) resolve(JSON.stringify(ret));
                });
            });
        });
    }

    // 동기 파일 확장자 검사(전채 경로 방식/파일명 방식 둘다 가능)
    getExtChkSync(filePath) {
        if(filePath.includes('/')) filePath = this.watchFileName(filePath);
        let extName = path.extname(filePath).replace('.', '');
        if(EXT_LIST.includes(extName)) return this.returnData(filePath, STATUS_SUCCESS, extName);
        else return this.returnData(filePath, STATUS_ERROR, "Unusable extension.");
    }

    // 동기 배열 파일 확장자 검사(콜백으로도 사용가능)
    arrFileExtCheckSync(filePath, callback) {
        let ret = [];
        filePath.forEach(items => {
            ret.push(JSON.parse(this.getExtChkSync(items)));
        });
        if(callback === undefined) return JSON.stringify(ret);
        else callback(JSON.stringify(ret));
    }
    // 파일 전송

    // 파일 전송 결과 전달
}

var filePath1 = '/Users/minsungkim/Documents/project/javascript-test/currentSampleFile.txt';
var filePath2 = '/Users/minsungkim/Documents/project/javascript-test/currentSampleFile1.txt';

const fsp = new FileSendProcess();

// async ~ await방식
async function app() {
    const result = await fsp.arrFileCheckPromise([filePath1, filePath2]);
    console.log(`비동기 - ${result}`);
}
// app();

// Promise 방식
function apptest() {
    fsp.arrFileCheckPromise([filePath1, filePath2]).then((result) => {
        console.log(`Promise방식 - ${result}`);
    });
}
// apptest();

// 동기 방식
function apps() {
    const result = fsp.arrFileCheckSync([filePath1, filePath2]);
    console.log(`동기 - ${result}`);
}
// apps();

// 동기 방식 (콜백)
function appsCallback() {
    fsp.arrFileCheckSync([filePath1, filePath2], (result) => {
        console.log(`동기(콜백) - ${result}`);
    });
}
// appsCallback();

// 파일 확장자 검사
// const fileExt = fsp.getExtChk(filePath2);
// console.log(fileExt)

// const fileExts = fsp.arrFileExtCheckSync([filePath1, filePath2]);
// console.log(fileExts);

async function fileExtChecker() {
    const result = await fsp.arrFileExtCheck([filePath1, filePath2]);
    console.log(result);
}
fileExtChecker();

// fsp.getExtChk(filePath1).then((result) => {
//     console.log(result);
// })
