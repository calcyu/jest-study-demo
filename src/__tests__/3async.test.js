describe('异步操作测试',  () => {

    function foo(callback) {
        console.log('foo...')
        setTimeout(() => {
            callback && callback();
        }, 1000)
    }
    it('异步测试', (done) => {
        function bar() {
            console.log('bar..')
            done();
        }
        foo(bar);
    });
});
