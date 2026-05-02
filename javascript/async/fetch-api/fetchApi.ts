// Простой GET-запрос
// Используя Fetch API, получите данные с публичного API (например, https://jsonplaceholder.typicode.com/posts/1).
// Выведите полученный объект в консоль. Обработайте возможные ошибки сети и не-OK ответы.
const DEFAULT_URL = 'https://jsonplaceholder.typicode.com/posts'

// async function getPost(URL: string) {
//     // return fetch(URL)
//     // .then(data => {
//     //     if(!data.ok) throw new Error(`HTTP error ${data.status}`)
//     //     return data.json()
//     // })
//     // .catch(err => {
//     //     console.error(err)
//     //     throw err
//     // })
//     try {
//         const response = await fetch(URL)
//         if (!response.ok) {
//             throw new Error(`HTTP error ${response.status}`)
//         }
//         const data = await response.json()
//         return data
//     } catch (error) {
//         throw error
//     }
// }
// getPost(`${DEFAULT_URL}/1`)
//     .then(data => console.log(data))
//     .catch(err => console.error(err))
// (async () => {
//     const data = await getPosts('https://jsonplaceholder.typicode.com/posts/1')
//     console.log(data)
//     return data
// })();


// POST-запрос с телом
// Отправьте POST-запрос на тот же ресурс (/posts) с заголовком Content-Type: application/json и телом,
// содержащим объект { title: 'foo', body: 'bar', userId: 1 }. Выведите ответ сервера.

// async function createPost(URL: string, data: { title: string, body: string, userId: number }) {
//     try {
//         const res = await fetch(URL, {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'aplplication/json'
//             },
//             body: JSON.stringify(data)
//         })
//         if(!res.ok){
//             throw new Error(`HTTP error ${res.status}`)
//         }
//         const result = await res.json()
//         return result
//     } catch (error) {
//         console.error(`Ошибка ${error}`)
//         throw error
//     }
// }
// createPost(
//     DEFAULT_URL,
//     {
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }
// ).then(data => console.log(data))
// .catch(err => console.error(err));
// Загрузка нескольких ресурсов
// Сделайте параллельные GET-запросы к трём разным ресурсам (например, /posts/1, /posts/2, /posts/3) с помощью Promise.all и Fetch.
// Выведите полученные данные в виде массива.

// async function getPosts(URL: string) {
//     const promises = [
//         fetch(`${URL}/1`)
//         .then(res => {
//             if(!res.ok){
//                 throw new Error(`HTTP error ${res.status}`)
//             }
//             return res.json()
//         }),
//         fetch(`${URL}/2`)
//         .then(res => {
//             if(!res.ok){
//                 throw new Error(`HTTP error ${res.status}`)
//             }
//             return res.json()
//         }),
//         fetch(`${URL}/3`)
//         .then(res => {
//             if(!res.ok){
//                 throw new Error(`HTTP error ${res.status}`)
//             }
//             return res.json()
//         }),
//     ]
//     const [post1, post2, post3] = await Promise.all(promises)
//     return [post1, post2, post3]
// }
// ( async () => {
//     const data = await getPosts(DEFAULT_URL)
//     console.log(data)
// })();
// Обработка ошибок HTTP
// Напишите функцию fetchWithErrorHandling(url), которая выполняет запрос и, если ответ не успешен (status не в диапазоне 200-299),
// выбрасывает ошибку с текстом статуса. Протестируйте на заведомо несуществующем URL.
async function fetchWithErrorHandling(url: string) {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            switch (response.status) {
                case 403:
                    throw new Error(`Доступ запрещен ${response.status}`)
                case 404:
                    throw new Error(`Ресурс не найден ${response.status}`)
                case 503:
                    throw new Error(`Сервис временно не доступен ${response.status}`)
                default:
                    throw new Error(`Ошибка ${response.status}`)
            }
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error(`HTTP ${error}`)
        throw error
    }
}

// (async () => {
//     const data = await fetchWithErrorHandling('https://httpbin.org/status/404')
//     console.log(data)
// })()

// Отмена запроса (AbortController)
// Создайте кнопку (или имитацию с setTimeout), которая запускает долгий запрос
// (используйте fetch с задержкой на сервере или искусственную задержку через new Promise).
// Реализуйте возможность отмены запроса с помощью AbortController до его завершения. Выведите сообщение, если запрос был отменён.
async function delayForPromises(ms: number, signal: AbortSignal): Promise<any> {
    return new Promise((resolve, reject) => {
        if (signal.aborted) {
            reject(signal.reason)
            return
        }
        const timerId = setTimeout(resolve, ms)
        const onAbort = () => {
            clearTimeout(timerId)
            reject(signal!.reason)
        }
        signal.addEventListener('abort', onAbort, { once: true });
    })
}

async function fetchWithAbort(
    url: string,
    delayMs: number,
    signal?: AbortSignal
): Promise<any> {
    const controller = new AbortController();

    if (signal) {
        if (signal.aborted) {
            controller.abort(signal.reason);
        } else {
            signal.addEventListener('abort', () => controller.abort(signal.reason), { once: true });
        }
    }

    try {
        const [response] = await Promise.all([
            fetch(url, { signal: controller.signal }),
            delayForPromises(delayMs, controller.signal)
        ]);
        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }
        return response.json();
    } finally {
        controller.abort();
    }
}

(async () => {
    const data = await fetchWithAbort('https://httpbin.org/delay/3', 1000)
    if (data === null) {
        console.log('Результат: запрос не выполнен (отменён или ошибка)')
    }
    console.log(data)
})()

// api.getPost(id)

// api.createPost(data)

// api.getPosts(ids)

// api.fetchWithErrorHandling(url)

// api.fetchWithAbort(url)