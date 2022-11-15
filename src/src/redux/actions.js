import { DELETES } from "./reducer";
import { AGREGAR } from "./reducer";


export const deletes = (id) =>{
return{
    type: DELETES,
    payload: id
}

}
export const agregar = (props) =>{
return{
    type: AGREGAR,
    payload: props
}
}