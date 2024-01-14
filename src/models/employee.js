import dayjs from 'dayjs';
import departments from '../assets/department.json'
import states from '../assets/state.json'


export const employee = {
    firstName: "",
    lastName: "",
    startDate : dayjs().$d.toLocaleDateString(),
    birthDate : dayjs().$d.toLocaleDateString(),
    street: "",
    city:"",
    state:states[0].name,
    stateAbr: states[0].abbreviation,
    zipcode:"",
    department:departments[0].name
}




        