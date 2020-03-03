import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';


const port = process.env.PORT || 3000;
const app = express()

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

// Middleware
app.use(morgan());
app.use(bodyParser.json())
export default app;