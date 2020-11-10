const request = require('supertest');
const app = require('../app');

describe('test /users CRUD', () => {
    test('用户列表：get /users ', async () => {
        const response = await request(app).get('/users');
        // console.log(response)
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body.data)).toBeTruthy();
        expect(Array.from(response.body.data).length).toBe(2);
        expect(response.headers['content-type'].startsWith('application/json')).toBeTruthy();
    });

    test('用户查询：get /user/:id', async () => {
        const response = await request(app).get('/users/24');
        expect(response.statusCode).toBe(200);
        expect(response.body.data.username).toBe('root');
    });

    test('用户修改：put /users', async () => {
        const res = await request(app).put('/users/24').send({ status: 0 });
        expect(res.body.code).toBe(200);
    })

    test('用户新增：post /user', async () => {
        const response = await request(app).post('/users').send({ username: 'xxx', password: "yyy", status: 1 });
        expect(response.statusCode).toBe(200);
        expect(response.body.code).toBe(200);
    });

    test('用户删除：delete /user/:id', async () => {
        const response = await request(app).get('/users');
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body.data)).toBeTruthy();
        expect(Array.from(response.body.data).length).toBe(5);
        for (const u of Array.from(response.body.data)) {
            if (u.username === 'xxx') {
                const delResp = await request(app).delete('/users/' + u.id);
                expect(delResp.body.code).toBe(200);
                break;
            }
        }
    });

    describe('Name of the group', () => {
        console.log(111);
        test('should ', () => {
            expect(100).toBe(100);
        });
    });
});


describe('Name of the group', () => {
    console.log(111);
    test('should ', () => {
        expect(100).toBe(100);
    });
});
