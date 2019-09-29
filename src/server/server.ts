import * as express from 'express';
import * as path from 'path';
import routes from './routes';
import './middlewares/localstrategy';
import './middlewares/bearerstrategy';
import * as passport from 'passport';

const app = express();

app.use(passport.initialize());
app.use(express.static('public'));
app.use(express.json());
app.use(routes);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index/html'))
})


const port = process.env.PORT || 3009;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
