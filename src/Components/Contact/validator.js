const validateForm = {
    errors:{},
    name:(form) => {
        if(form.name.length<2){
            validateForm.errors.name = 'Name must have more than 1 letter'
        }else if(form.name.length>20){
            validateForm.errors.name = 'Name must have less than 20 letters'
        }else if(!form.name){
            validateForm.errors.name = 'Name cannot be empty'
        }else{
            delete validateForm.errors.name
        }
        return validateForm.errors
    },
    email:  (form) => {
      if(!form.email){
          validateForm.errors.email = 'Email cannot be empty'
      }else if(!form.email.match(/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/)){
          validateForm.errors.email = "Invalid email format"
      }else{
          delete validateForm.errors.email
      }
      return validateForm.errors
  },
    message: (form) =>{
      if (!form.message){
        validateForm.errors.message= 'Message cannot be empty'
      }
      else{
        delete validateForm.errors.message
      }
      return validateForm.errors
    }
  }

  export default validateForm;