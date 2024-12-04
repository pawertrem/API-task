const express = require('express');
const cors = require('cors');  // Импортируем пакет CORS

const app = express();
const PORT = 3000;

app.use(cors());  // Добавляем CORS middleware для разрешения кросс-доменных запросов
app.use(express.json());

// Пример данных альбомов
const albums = [
    { title: "Taylor Swift", coverImage: "images/taylor-swift.jpg" },
    { title: "Reputation", coverImage: "images/reputation.jpg" },
    { title: "1989", coverImage: "images/1989.jpg" },
    { title: "Lover", coverImage: "images/lover.jpg" },
    { title: "Tortured Poets", coverImage: "images/tortured-poets.jpg" },
    { title: "Red", coverImage: "images/red.jpg" }
    
];

// Обработка GET-запроса
app.get('/api/albums', (req, res) => {
    res.json({ albums }); // Отправляем данные в формате JSON
});

//  Обработка POST-запроса
// Для тестирования можно использовать add_albums.html - имиатация добавления нового альбома в базу через веб-интерфейс
app.post('/api/albums', (req, res) => {
    const album = req.body; // Получаем данные из тела запроса
    console.log('Получен новый альбом:', album); // Логируем на сервере
    res.status(201).json({ message: 'Альбом успешно добавлен!', album }); // Ответ клиенту
});

// Статические файлы, например, картинки
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});