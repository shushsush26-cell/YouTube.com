const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.json());
app.use(express.static('.'));

// Разрешаем CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.post('/send-to-telegram', async (req, res) => {
    const { message } = req.body;
    
    if (!message) {
        return res.status(400).json({ error: 'Сообщение не может быть пустым' });
    }

    try {
        const telegramResponse = await fetch('https://api.telegram.org/bot8591266062:AAEwMbSDWQXYmZ6W9CekGxlnJUqRQIB0v8M/sendMessage', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: '6812452143',
                text: `📨 Новое сообщение с сайта:\n\n${message}`
            })
        });
        
        const result = await telegramResponse.json();
        
        if (result.ok) {
            res.json({ success: true, message: 'Сообщение отправлено в Telegram!' });
        } else {
            res.status(500).json({ error: 'Ошибка Telegram: ' + result.description });
        }
    } catch (error) {
        console.error('Ошибка:', error);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

// Главная страница
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
