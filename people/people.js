let people = [{
  name: "Fereeca",
  age: 23,
  city: "Kathmandu"
},

{
  name: "Utsukta",
  age: 23,
  city: "Lalitpur"
},

{
  name: "Ujjwal",
  age: 23,
  city: "Bhaktapur"
}
];

function sortByCity(acc,current){
  return {...acc,[current.city]: current};

}
console.log(people.reduce(sortByCity, {}));


