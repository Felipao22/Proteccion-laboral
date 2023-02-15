import { SpinnerCircular } from "spinners-react";
import './Loading.css'

export default function Loading(){
    return(
        <div>
            <SpinnerCircular color="black" size="100px" className="spinner"/>
        </div>
    )
}