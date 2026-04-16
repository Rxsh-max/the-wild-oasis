import supabase from "./supabase";

export  async function Login({email,password}){
     if (!email || !password) {
    throw new Error("Email and password are required");
  }
    let { data, error } = await supabase.auth.signInWithPassword({
  email,
  password
  })
    if(error)
        throw new Error(error.message)
   return data
}