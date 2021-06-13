const initState=0;

const SaveReducer =(state=initState, action)=>{
        switch(action.type)
        {
            case "save":
                    return state+1;
                default: return state;
        }
        

}

export default SaveReducer;
