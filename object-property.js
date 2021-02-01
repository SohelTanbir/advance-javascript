let Student = [
    {id:21, name:'Omor Sunny'},
    {id:31, name:'Omor faruk'},
    {id:41, name:'shakib khan'},
    {id:71, name:'amir khan'},
]

let names = [];
for(let i = 0; i<Student.length; i++){
    let obj = Student[i];
    names.push(obj.name);
}
console.log(names);
let names = Student.map( s => s.name);
let ids = Student.map( id => id.id);
let filters = Student.filter(s => s.id > 40);
console.log(names);
console.log(ids);
console.log(filters);