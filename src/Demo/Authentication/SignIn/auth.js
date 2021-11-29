
        export const authenticate=(data,next)=>{
            if(typeof window!== 'undefined'){
                localStorage.setItem("id", data.user._id)
                localStorage.setItem("role", data.user.role)
                localStorage.setItem("username", data.user.Username)
                localStorage.setItem("token", data.token)
                localStorage.setItem("email", data.user.email)
  
                next();
            }
        }
    