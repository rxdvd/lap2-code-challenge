const post = process.env.PORT || 3000;

const app = require("./server");

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});
