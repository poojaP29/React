import './style.css';
import { useSelector } from 'react-redux';
function Footer(){
    const fname=useSelector((state)=> state.pooja.Firstname)
    const lname=useSelector((state)=> state.pooja.Lastname)
    const image=useSelector((state)=> state.pooja.Image)
    return(
        <div className="footer">
        <span>
                {fname}    
                </span>
                <span>
                    {lname}
                    
                </span>
                <span>
                    {image}
                    
                </span>
                </div>
    );
}
export default Footer;