// ЗАПУСК ВЕБ-СЕРВЕРА
import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
mongoose.connect('mongodb+srv://admin:Eghfdktybt44@cluster0.aljjvf0.mongodb.net/?retryWrites=true&w=majority',)
.then(() =>  console.log('DB ok!'))
.catch((err) => console.log('DB error, err'));//коннектимся с базой данных
import {validationResult} from 'express-validator';
import {registerValidation} from './validations/auth.js';


  
const app = express();

app.use(express.json()); // позволит читать json, который будет приходить в запросах

// app.get('/', (req, res) => {
//     res.send('Hello World!!!');
// }); 

// app.post('/auth/login', (req, res) => {
//     console.log(req.body);//показывает запрос
// });

app.post('/auth/register', registerValidation, (req, res) => { // надо сделать валидацию на корректность
    const errors = validationResult(req);// хотим проверить на ошибки и вытаскиваем инфу из запроса
    if(!errors.isEmpty()) {
        return res.status(400).json(errors.array());// если запрос неверный
    }//мы вернем все ошибки
        //если ошибок нет вернем сообщение success
        res.json({
            success:true,
        });
    
}); 

//     const token = jwt.sign({  //создаем токен на запрос
//         email: req.body.email,
//         fullName: 'Vasia Pupkin',
//     },'secret123',
//     );
    
//     res.json({
// success: true,  
// token, //возвращаем токен
//     });


app.listen(4444, (err) => {
    if(err){
return console.log(err);
    }
    console.log('Server OK');
 
});
// На этом этапе вебсервер запущен на localhost:4444
// так же установили библиотеку nodemon и внесли в package.json ("start:dev": "nodemon index.js")
//  для того: чтобы сервер перезапускался сам при изменении кода (res.send)

