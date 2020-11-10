describe('定时器相关测试', () => {
    // 开启定时函数模拟
    jest.useFakeTimers();
    
    function foo(callback) {
        console.log('foo...')
        setTimeout(() => {
            callback && callback();
        }, 1000)
    }
    it('断言异步测试', () => {
        //mock函数
        const callback = jest.fn();
        foo(callback);
        expect(callback).not.toBeCalled();
        //快进，使所有定时器回调
        jest.runAllTimers();
        expect(callback).toBeCalled();
    })
});