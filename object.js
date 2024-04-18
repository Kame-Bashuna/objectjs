//no1
function age(people){
    return people.filter(a=>a.age >=18).map(a=>a.name)
  }
  const people=[
    { name: 'alice', age: 17 },
    { name: 'eunice', age: 22 },
    { name: 'charlie', age: 14 },
    { name: 'max', age: 19 }
  ]
  console.log(age(people))


//no2
const products = [
    { name: 'Laptop', price: 1200, category: 'Electronics' },
    { name: 'Shirt', price: 25, category: 'Clothing' },
    { name: 'Headphones', price: 80, category: 'Electronics' },
    { name: 'Shoes', price: 60, category: 'Clothing' },
  ];

  const getProduct=products.reduce((group, product)=>{
    const {category}  =product;
    group[category]  = group[category]??[]
    group [category].push(product)
    return group
  },{})
  console.log(getProduct)


  
//no3
function averageMarks(students){
    return students.filter(student=>{
    const totalScore=student.scores.reduce((acc,current)=>acc+current,)/student.scores.length
    return totalScore>=85
  }).map(student=>student.name)
  }
  const students = [
    { name: 'John', scores: [90, 80, 85] },
    { name: 'Jane', scores: [95, 92, 88] },
    { name: 'Jim', scores: [70, 80, 75] },
    { name: 'Jill', scores: [85, 90, 84] },
  ];
  const totalMarks=averageMarks(students)
  console.log(totalMarks)



  //no4
  function carNewAge(car){
    car["age"]=(2024-car.year)
    console.log(car)
    

  }
  const car = {
    make: 'Ford',
    model: 'Ranger',
    year: 2023,
    displayInfo: function() {
      console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    },
  };
carNewAge(car)
 


  
