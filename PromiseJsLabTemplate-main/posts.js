// Use https://gorest.co.in/ REST API for Testing and Prototyping
// Write function to fetch data from https://gorest.co.in/public/v2/posts
// This function should print in console array of obects with the following structure {id, title, user_id}
// and handle possible errors 

// put your code here

// Функція для отримання та форматування постів
async function fetchPosts() {
    try {
        // Робимо запит до API
        const response = await fetch('https://gorest.co.in/public/v2/posts');
        
        // Перевіряємо, чи успішний статус відповіді (200-299)
        if (!response.ok) {
            throw new Error(`Помилка HTTP: статус ${response.status}`);
        }

        // Парсимо JSON з відповіді
        const posts = await response.json();

        // Форматуємо масив об'єктів, залишаючи лише потрібні поля
        const formattedPosts = posts.map(post => ({
            id: post.id,
            title: post.title,
            user_id: post.user_id
        }));

        // Виводимо результат у консоль
        console.log(formattedPosts);
        
    } catch (error) {
        // Обробляємо будь-які можливі помилки (наприклад, немає інтернету або API впало)
        console.error('Помилка при завантаженні постів:', error.message);
    }
}

// Запускаємо функцію
fetchPosts();