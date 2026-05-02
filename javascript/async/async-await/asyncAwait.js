// Переход от промисов к async/await
// Перепишите следующую цепочку промисов с использованием async/await:
// getNumber()
//   .then(double)
//   .then(addTen)
//   .then(console.log);

function getNumber() {
    return Promise.resolve(5);
}
function double(x) {
    return Promise.resolve(x * 2);
}
function addTen(x) {
    return Promise.resolve(x + 10);
}

async function name() {
    const num = await getNumber()
    const doubled = await double(num)
    const add = await addTen(doubled)

    return add
}

(async()=> {
    try {
        const result = await name()
        console.log(result)
    } catch (error) {
        console.error(error)
    }
})()

// Обработка ошибок с try/catch
// Напишите асинхронную функцию fetchData, которая имитирует запрос к серверу: с вероятностью 70% возвращает данные, а иначе выбрасывает ошибку.
// Используйте try/catch для обработки ошибки и вывода сообщения об ошибке.

async function fetchData() {
    const delay = Math.random() *1000 + 500
    await new Promise(resolve => setTimeout(resolve, delay))
    const random = Math.random()
    if (random < 0.1){
        return {
            data: 'Успешный ответ сервера',
            time: new Date().toISOString()
        }
    } else {
        throw new Error('Ошибка сервера')
    }
}
(async () => {
    await fetchData()
    .then(res => console.log(res))
    .catch(err => console.log(err))
})()

// Параллельные запросы с async/await
// Используя Promise.all внутри async функции, выполните параллельно три задачи, каждая из которых возвращает число через setTimeout (разные задержки).
// Дождитесь всех результатов и выведите их сумму.

// Последовательное выполнение
// Создайте массив URL (или идентификаторов) и асинхронную функцию fetchData(id), которая возвращает данные с задержкой. Используя for...of и await, получите данные последовательно и сохраните их в массив. Выведите общее время выполнения (можно измерить с console.time).

// Асинхронные итерации (for await...of)
// Реализуйте асинхронный генератор, который выдаёт числа от 1 до 5 с интервалом в 1 секунду. Затем используйте for await...of для перебора этих значений и вывода их в консоль.
