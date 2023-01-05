const app = require('./sever');
const port = process.env.PORT

app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log(`URL: http://localhost:${port}/`);
})