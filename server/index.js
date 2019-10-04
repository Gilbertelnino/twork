import express from 'express';
import bodyParser from 'body-parser';
import newEmployee from './routes/signupEmployee';
import currEmployee from './routes/signin'; 

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1/auth/signup', newEmployee);
app.use('/api/v1/auth/signin', currEmployee);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server is running on the port ${PORT}`))
