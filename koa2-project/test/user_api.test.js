const request = require('supertest');
const app = require('../app.js');

describe('user_api', () => {
    
    it('getUser', (done) => {

        request(app.listen())
            .get('/api/users/getUser?id=1')     //get方法
            .end((err, res) => {

                console.log(res.body);
                done();
            });
    })

    it('registerUser', (done) => {

        // 请求参数，模拟用户对象
        var user = {
            name: "哈哈",
            des: "测试哈哈哈"
        }

        request(app.listen())
            .post('/api/users/registerUser')            //post方法
            .send(user)                                 //添加请求参数
            .set('Content-Type', 'application/json')    //设置header的Content-Type为json
            .end((err, res) => {

                console.log(res.body);
                done();
            })
    })
})
