const request = require('supertest');
const app = require('../server');
const posts = require('../data/posts');

describe('/posts routes', () => {
    describe('GET /posts/:id', () => {
        it('returns status code 200 on success', done => {
            request(app)
                .get("/posts/1")
                .expect(200, done);
        });

        it('returns status code 404 on failure', done => {
            request(app)
                .get("/posts/100")
                .expect(404, done);
        });

        it('returns json', done => {
            request(app)
                .get("/posts/1")
                .expect('Content-Type', /json/, done);
        });

        it('returns correct response data', done => {
            request(app)
                .get("/posts/1")
                .expect(posts[0], done);
        });
    });

    describe('POST /posts', () => {
        const testPost = {
            title: "test",
            name: "lytical",
            body: "test body"
        };

        it('returns status code 201 on success', done => {
            request(app)
                .post("/posts")
                .send(testPost)
                .expect(201, done);
        });

        it('accepts post without name field', done => {
            let noNamePost = {
                title: "test",
                body: "test body"
            };
            request(app)
                .post("/posts")
                .send(noNamePost)
                .expect(201, done);
        });

        it('returns status code 422 on failure', done => {
            request(app)
                .post("/posts")
                .send({foo: "bar"})
                .expect(422, done);
        });

        it('returns json on success', done => {
            request(app)
                .post("/posts")
                .send(testPost)
                .expect('Content-Type', /json/, done);
        });

        it('returns correct response data for success', done => {
            request(app)
                .post("/posts")
                .send(testPost)
                .end((err, res) => {
                    if(err) return done(err);
                    try {
                        expect(res.body.post_id).toBe(3);

                        expect(res.body).toMatchObject(testPost);

                        let validTime = (new Date(res.body.timestamp)).getTime() > 0;
                        expect(validTime).toBe(true);
                        done();
                    } catch (error) {
                        done(error);
                    }
                });
        });
    });
});
