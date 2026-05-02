// 1.Получите массив ключей объекта и выведите его.
// 2.Получите массив значений и найдите сумму, если значения – числа.
// 3.Получите массив записей [ключ, значение] и преобразуйте его обратно в новый объект, но с ключами в верхнем регистре.
const person = {
    name: 'Елена',
    age: 32,
    num: 32,
    city: 'Москва',
    profession: 'дизайнер'
};


//Задание 2: Копирование и слияние
//Cоздайте новый объект finalSettings, 
//который объединяет настройки: значения из userSettings перезаписывают значения из defaultSettings.
//Проверьте, что исходные объекты не изменились.

const defaultSettings = {
    theme: 'light',
    fontSize: 14,
    showNotifications: true,
    dudu: {
        sity: 'London'
    }
};
const userSettings = {
    theme: 'dark',
    fontSize: 16
};

//Задание 3: Проверка наличия свойств и методы

const book = {
    title: 'Мастер и Маргарита',
    author: 'Булгаков',
    year: 1967
};

const a = book.hasOwnProperty('year')