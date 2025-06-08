import { useNavigate } from "react-router-dom"

export const Error = () => {
    const navigate = useNavigate();

    const hangleBackButton = () => {
        navigate(-1); 
    }
return (
    <>
        <h1>Error page 404</h1>

        <button onClick={hangleBackButton}>Go Back</button>
    </>
)
}