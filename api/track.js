import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { action = 'Посетил сайт', userAgent } = req.body;
    
    const clientIP = req.headers['x-forwarded-for'] || 
                     req.connection.remoteAddress ||
                     'Неизвестно';
    
    const referer = req.headers.referer || 'Прямой заход';
    const time = new Date().toLocaleString('ru-RU');

    try {
      await fetch('https://api.telegram.org/bot8591266062:AAEwMbSDWQXYmZ6W9CekGxlnJUqRQIB0v8M/sendMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: '6812452143',
          text: `🔍 НОВЫЙ ПОСЕТИТЕЛЬ 🔍

📱 Действие: ${action}
🖥 IP: ${clientIP}
🌐 Браузер: ${userAgent || req.headers['user-agent']}
📍 Источник: ${referer}
⏰ Время: ${time}`
        })
      });
      
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'Ошибка сервера' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
