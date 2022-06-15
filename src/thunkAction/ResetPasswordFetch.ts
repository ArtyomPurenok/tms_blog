
export const ResetPasswordFetch = async (email: any) => {

    const response = await fetch("https://studapi.teachmeskills.by/auth/users/reset_password/", {
        method: "POST",
        body: JSON.stringify(email),
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
    });

     if (response.ok) {
       console.log('okey');
       
       return 'ok'
     }
}
