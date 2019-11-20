import {createStore} from "redux"

var defaultState={
    name:'何运正'
}

const store=createStore((state=defaultState,action)=>{

    var {type,payload} =action

    switch (type) {
        case 'MY':
            console.log('123')
            break;
    
        default:
            return state
            break;
    }
})

export default store