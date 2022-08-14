// Importing module
import express, {Request, Response} from 'express';

const app = express();
const PORT:Number = 3000;

// Hanling GET / Request
app.get('/', (req: Request, res: Response)=>{
	res.send("welcome to typescript backend!");
})

// Serve setup
app.listen(PORT, ()=>{
console.log(`The application is listening`
	    + `on port https://localhost:` + PORT);
})
