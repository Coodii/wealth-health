import departments from '../assets/department.json'
import states from '../assets/state.json'

export const employee = {
    firstName: "",
    lastName: "",
    startDate : "",
    birthDate : "",
    street: "",
    city:"",
    state:states[0].name,
    stateAbr: states[0].abbreviation,
    zipcode:"",
    department:departments[0].name
}

let array = [];

function returnAtt(){
    states.forEach( value => {
        array.push(value.abbreviation);
    })
}

returnAtt()
console.log(array)



        