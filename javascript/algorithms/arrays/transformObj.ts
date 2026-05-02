// Создать новый массив, содержащий только имена активных пользователей (active: true)

const users = [
  { name: 'Анна', age: 25, active: true },
  { name: 'Иван', age: 30, active: false },
  { name: 'Мария', age: 28, active: true },
  { name: 'Петр', age: 35, active: false }
];

interface UsersProps{
  name: string
  age: number
  active: boolean
}

function getActiveUsers(arr: UsersProps[]): string[] {
  return arr.reduce<string[]>((acc, user) => {
    if(user.active){
      acc.push(user.name)
    }
    return acc
  }, [])
  // const arrName: string[] = []
  // const newArray = arr.filter(isActive => isActive.active === true)
  // newArray.forEach((item) => {
  //   arrName.push(item.name)
  // })
  // return arrName
}

console.log(getActiveUsers(users))
