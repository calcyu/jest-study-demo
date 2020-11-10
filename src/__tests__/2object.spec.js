describe('对象测试', () => {

    it("是否同一个对象", () => {
        const foo = { a: 1 }
        expect(foo).toBe(foo)
    })

    it("对象值是否相等", () => {
        expect({ a: 1, foo: { b: 2 } }).toEqual({ a: 1, foo: { b: 2 } })
    })

    test('对象赋值', () => {
        const data = { one: 1 };
        data['two'] = 2;
        expect(data).toEqual({ one: 1, two: 2 });
    });

});
