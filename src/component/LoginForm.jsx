import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import styles from './LoginForm.module.css'
function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
     const correctName="Ehsanullah";
     const correctPassword="946763149"
  
    const onSubmit = (data) => {
      console.log(data)
      if(data.name === correctName && data.password === correctPassword){
          navigate('/main');
      }else{
          alert("error")
      }
};
    return (
        <div className={styles.contain}> 
        <form onSubmit={handleSubmit(onSubmit)} >
         <div  className={styles.FormContainer}>
          <div className={styles.labelSection}>
            <label htmlFor="UserName">UserName:</label>
            <label htmlFor="Password">Password:</label>
          </div>
          <div className={styles.inputSection}>  
            <input 
              id="name" 
              type="text"
              {...register('name', { required: 'Name is required' })} 
              />
             {/* {errors.name && <span>{errors.name.message}</span>} */}
            <input 
              id="password" 
              type="password" 
              {...register('password', { 
                required: 'Password is required', 
                minLength: { value: 6, message: 'Password must be at least 6 characters' }
              })} 
            />
         {/* {errors.password && <span>{errors.password.message}</span>} */}
          </div>
         </div>
         <Button tip="formBtn">Submit</Button>
        </form>
      </div>
    )
}

export default LoginForm
