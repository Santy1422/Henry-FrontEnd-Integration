export const DELETES = "DELETES";
export const AGREGAR = "AGREGAR"

const initialState = {
    myFavorites: []
}

 const rootReducer =(state = initialState, action) =>{
switch(action.type){
case DELETES: 
return{
...state, myFavorites: state.myFavorites.filter(fav => fav.id !== action.payload)
}
case AGREGAR: 
return{
    ...state, myFavorites: [...state.myFavorites, action.payload]
}
default:
    return {
        ...state, 
       
    }
}
}
export default rootReducer