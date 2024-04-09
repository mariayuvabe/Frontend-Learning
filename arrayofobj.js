let cars=[
    {
        "color":"purple",
        "type":'minivan',
        "registration":new Date('2023-04-02'),
        "capactity":'7'
        
    },
    {
        "color":"green",
        "type":'maruthi',
        "registration":new Date('2020-04-02'),
        "capactity":'5'
        
    },
    {
        "color":"white",
        "type":'inova',
        "registration":new Date('2013-02-04'),
        "capactity":'7'
        
    },

]

/* 
1.add object in array = Array.unshift

*/

//console.log(cars)
let car1 ={
    "color":"yellow",
    "type":"benz",
    "registration":new Date('2014-04-09'),
    "capacity":6
}

cars.unshift(car1)

//2.add object at end = Array.push()

let car2 ={
    "color":"red",
    "type":"cabrio",
    "registration":new Date('2014-04-09'),
    "capacity":'2'
}
cars.push(car2)
//console.log(cars)

//3. add object into middle = Array.splice({index where to start},{how many item to remove},{items to add})

let car={
    "color":"red",
    "type":"cabrio",
    "registration":new Date('2014-04-09'),
    "capacity":'2'
}

cars.splice(3,0,car)
//console.log(cars)

//4. array.find

let fcar = cars.find(car=>car.color==='red' && car.capacity ==='2')
//console.log(fcar)

//5.array.filter(to find multiple items)

let redcars = cars.filter(car=>car.color==='red')
//console.log(redcars)

//6.array.map (transform an array of objects into an array of different objects)
console.log(cars)
let sizes = cars.map(car=>{
    if(car.capacity<=2){
        return 'small'
    }
    else if(car.capacity<=5){
        return 'medium'
    }
    return 'large'
})
console.log(sizes)