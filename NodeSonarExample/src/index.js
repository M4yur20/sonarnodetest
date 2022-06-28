// const express =  require('express');
// const app =  express();
// const port =  process.env.PORT  ||  8080
// // Route to be tested
// app.get('/', (req, res) => {
//     return res.status(200).json({ name:  'Mayur Agarwal' });
// });
// // Application running on the door
// let server = app.listen(port, () => {
//     console.log(`Application running on ${port}`);
// });
// module.exports  = server;

module.exports = function sum(a, b) {
    if (a == 0 && b == 0) return 0;
    return a + b;
};

