const Validation = (values) => {
    let errors = {}


    if(!values.name){
        errors.name="Name is required"
    }
    else if(values.name.length < 5){
        errors.name ="Name must be at least five characters long."
    }

    
    if(!values.password){
        errors.password="Password is required"
    }
    else if(values.password.length < 9){
        errors.password ="Password must be more five characters long."
    }
    

    return errors;
    

}


export default Validation;