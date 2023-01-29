import {  useContext } from "react"
import { UserContext } from "./App"

function Home()
{
    const user = useContext(UserContext)
    return(
        <>
            <h1>{`${user.title}`}</h1>
        </> 
    )
}
export default Home