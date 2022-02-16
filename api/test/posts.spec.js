describe('/posts routes', () => {
    let api;
    beforeAll(async () => {
        await initDatabase();
        api = app.listen(port, () =>{
            console.log(`Test server listening on port ${port}`);
        });
    });

    afterAll(done => {
        console.log("Gracefully stopping test server...");
        api.close(done);
    });

    describe('GET /posts/:id', () => {
        it('returns status code 200 on success', done => {
            request(api)
                .get("/posts/1")
                .expect(200, done);
        });

        it('returns status code 404 on failure', done => {
            request(api)
                .get("/posts/100")
                .expect(404, done);
        });

        it('returns json', done => {
            request(api)
                .get("/posts/1")
                .expect('Content-Type', /json/, done);
        });

        it('returns correct response data', done => {
            request(api)
                .get("/posts/1")
                .end((err, res) => {
                    if(err) return done(err);
                    try {
                        expect(res.body).toMatchObject({
                            post_id: 1,
                            title: "test title",
                            name: "tester 1",
                            body: "test message",
                            timestamp: 1234567891234
                        });
                        done();
                    } catch (error) {
                        done(error);
                    }
                });
        });
    });

    describe('POST /posts', () => {
        const testPost = {
            title: "test",
            name: "lytical",
            body: "test body"
        };

        it('returns status code 201 on success', done => {
            request(api)
                .post("/posts")
                .send(testPost)
                .expect(201, done);
        });

        it('accepts post without name field', done => {
            let noNamePost = {
                title: "test",
                body: "test body"
            };
            request(api)
                .post("/posts")
                .send(noNamePost)
                .expect(201, done);
        });

        it('returns status code 422 on failure', done => {
            request(api)
                .post("/posts")
                .send({foo: "bar"})
                .expect(422, done);
        });

        it('returns json on success', done => {
            request(api)
                .post("/posts")
                .send(testPost)
                .expect('Content-Type', /json/, done);
        });

        it('returns correct response data for success', done => {
            request(api)
                .post("/posts")
                .send(testPost)
                .end((err, res) => {
                    if(err) return done(err);
                    try {
                        expect(res.body.post_id).toBe(6);

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
