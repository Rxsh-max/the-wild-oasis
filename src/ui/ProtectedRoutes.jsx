import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import {useEffect} from 'react'

const FullPage = styled.div`
    height : 100vh;
    background-color : var(--color-grey-50);
    display : flex;
    align-items : center;
    justify-content : center;

`
export default function ProtectedRoutes({children}){
            const navigate = useNavigate()
        //1.Load the authenticated User

            let {isLoading , isAuthenticatd} = useUser();


        


        //2.If there is no authenticated user,redirect to Login Page
                useEffect(function(){
                    if(!isAuthenticatd && !isLoading)
                        navigate("/login")
                },[isAuthenticatd,isLoading,navigate])

        //3. While Loading , Show a spinner
            if(isLoading) return<FullPage>
                    <Spinner/>
            </FullPage> 


        //4. If there is User render the app
                if(isAuthenticatd)    return children ;

 
  
}
