const obj = {
    *gen() {
        let cnt = 0;
        yield ++cnt;
        yield ++cnt;
        yield ++cnt;
    }
}

const g = obj.gen();
console.log(g.next());
console.log(g.next());
console.log(g.next());