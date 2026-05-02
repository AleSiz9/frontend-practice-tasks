// Дан массив чисел: [10, 20, 30, 40, 50]. Напишите функцию, которая находит:
// 1.Сумму всех чисел.
// 2.Среднее арифметическое.
// 3.Произведение всех чисел.
const arr = [10, 20, 30, 40, 50]

arr.reduce((acc, item) => acc + item, 0)
arr.reduce((acc, item) => (acc + item) / arr.length, 0)
arr.reduce((acc, item) => acc * item, 1)

type Value = number[]
type Action = 'multiply' | 'profit' | 'average' | 'summ' | 'subtract';

function mathSolver(value: Value, action: Action) {
    if (!Array.isArray(value)) {
        throw new Error('функция принимает не массив')
    }

    switch (action) {
        case 'summ':
            return value.reduce((acc, item) => acc + item, 0)
        case 'average':
            return value.reduce((acc, item) => acc + item / value.length, 0);
        case 'profit':
            return value.reduce((total, current, index, arr) => {
                if (index > 0 && current > arr[index - 1]) {
                    return total + (current - arr[index - 1])
                }
                return total
            }, 0);
        case 'multiply':
            return value.reduce((acc, item) => acc * item, 1)
        default:
            throw new Error(`Неверно указан тип ${action}`)
    }
    // const a = value.reduce((acc, item) => acc + item, 0)
    // const b = value.reduce((acc, item) => acc + item / value.length, 0 )
    // const c = value.reduce((acc, item) => acc * item, 1)

    // return [
    //     a,
    //     b,
    //     c,
    // ]
}

console.log(mathSolver(arr, 'average'))