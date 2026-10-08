let ans:Array<any> = new Array()

const nums: number[] = [1, 3, 5, 7]

ans.push(nums.map(x => x + 1))

console.log(ans)


const users = [{ name: "张三", age: 16 }, { name: "李四", age: 22 }, { name: "王五", age: 19 }]

ans.push(users.filter(x => {return x.age >= 18 }))

const scores: number[] = [80, 92, 75, 88]
ans.push(
    scores.reduce((acc, cur) => {
        return acc+cur
    },0)
)

interface Student {
  id: number;
  name: string;
}
const studentList: Student[] = [
  {id:1, name:"小明"},
  {id:2, name:"小红"},
  {id:3, name:"小刚"}
]
ans.push(
    studentList.reduce((a, c) => {
        a[c.id] = c
        return a
    },{} as Record<number,Student>)
)

const data:number[] = [1,2,3,4,5,6,7,8]
ans.push(
    data.reduce((a, c) => {
        if (c % 2 === 0) {
            return a + c * 3
        } else {
            return a
        }
    },0)
)

console.log(ans)