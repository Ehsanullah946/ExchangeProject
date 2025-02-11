import LoginForm from "../component/LoginForm";

const Home = () => {
  return (
    <div>
        <LoginForm/>
    </div>
  );
};

export default Home;









// import { Link } from "react-router-dom"
// function Home() {
//     return (
//         <div>
//             <Link to="/main" className="cta">starting now</Link>
//         </div>
//     )
// }

// export default Home;




















// import React from 'react';
// import { useForm } from 'react-hook-form';

// const MyForm = () => {
//   // Initialize the form methods using useForm
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   // Function that gets called when the form is submitted
//   const onSubmit = (data) => {
//     console.log(data);
//   };




//   return (
//     <div>
//       <h1>My Form</h1>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         {/* Name Field */}
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             id="name"
//             {...register('name', { required: 'Name is required' })}
//           />
//           {errors.name && <p>{errors.name.message}</p>}
//         </div>

//         {/* Email Field */}
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             id="email"
//             type="email"
//             {...register('email', {
//               required: 'Email is required',
//               pattern: {
//                 value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
//                 message: 'Invalid email address',
//               },
//             })}
//           />
//           {errors.email && <p>{errors.email.message}</p>}
//         </div>

//         {/* Age Field */}
//         <div>
//           <label htmlFor="age">Age:</label>
//           <input
//             id="age"
//             type="number"
//             {...register('age', { required: 'Age is required' })}
//           />
//           {errors.age && <p>{errors.age.message}</p>}
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default MyForm;
