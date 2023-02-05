import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String, // будет с типом  Стринг
        required: true, // будет обязательным
    },
    email:{
        type: String, // будет с типом  Стринг
        required: true, // будет обязательным
        unique: true, //почта долна быть уникальной
    },
    passwordHash: {
        type: String, // будет с типом  Стринг
        required: true, // будет обязательным
    },
    avatarUrl: String,
},  { //у сущности Пользователь долны быть дата содания и обновления
    timestamps: true,
},
);

export default mongoose.model('user', UserSchema);// указываем что схему нужно экспортировать
