// const request = require('supertest')
// const server = require('../index')
// describe('Get Endpoints', () => {
//     it('Get', async (done) => {
//         const res = await request(server)
//             .get('/')
//             .send({
//                 userId: 1,
//                 title: 'test is cool',
//             });
//         expect(res.statusCode).toEqual(200);
//         expect(res.body).toHaveProperty('name');
//         done();
//     })
// })
// afterAll((done) => {
//     // close server conection
//     server.close();
//     done();
// });

const sum = require("../index");

describe("Sum", () => {
    test("sum two numbers", () => {
        expect(sum(1, 1)).toEqual(2);
    });
});