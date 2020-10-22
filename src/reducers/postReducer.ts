import {LOGIN,LOGOUT} from './types';

const initialState =  {
  loggedIn:false,  
  username: null,
  token: null
}

export default function(state = initialState,action:any){

    switch(action.type){
        case LOGIN:
            return{
                ...state,
                ...action.payload
            }
        case LOGOUT:
            return{
                ...state,
                loggedIn:false,  
                username: null,
                token: null
            }
                 
            
        default : 
            return state;
    }

}