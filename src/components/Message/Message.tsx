 import React from 'react'
 
 type Props = {}
 
 const message = (props: Props) => {
     const successMessage = (
        <div className="success-message">
          Sign up successful!
        </div>
      );
      
       const errorMessage = (
        <div className="error-message">
          Sign up failed! Please check your information and try again.
        </div>
      );
   return (
     <div>message</div>
   )
 }
 
 export default message
 

