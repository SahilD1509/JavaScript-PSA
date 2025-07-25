let cars = [
    {
        "id": 1,
        "make": "Toyota",
        "model": "Camry",
        "year": 2021,
        "color": "Silver",
        "price": 24000
    },
    {
        "id": 2,
        "make": "Honda",
        "model": "Civic",
        "year": 2020,
        "color": "Blue",
        "price": 21000
    },
    {
        "id": 3,
        "make": "Ford",
        "model": "Mustang",
        "year": 2022,
        "color": "Red",
        "price": 35000
    },
    {
        "id": 4,
        "make": "Tesla",
        "model": "Model 3",
        "year": 2023,
        "color": "White",
        "price": 40000
    },
    {
        "id": 5,
        "make": "Chevrolet",
        "model": "Malibu",
        "year": 2019,
        "color": "Black",
        "price": 18000
    }
]

let white_cars = cars.filter(car=> car.color === 'Silver')
console.log(white_cars)