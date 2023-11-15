import React, { useEffect, useState } from 'react'
import './Navbar.css';
import { Nav, Navbar} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';


export default function AppNavbar() {
    const [auth, setAuth] = useState(false);
    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')
    // const navigate = useNavigate();
    
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get('http://localhost:8081')
        .then((res) => {
            if(res.data.Status === "Success"){
                setAuth(true)
                setEmail(res.data.email)
            } else {
                setAuth(false);
                setMessage(res.data.Error)
            }
        })
        .catch((err) => {
            console.error(err);
        })
    }, [])

    const handleDelete = () => {
        axios.get('http://localhost:8081/logout')
        .then(res => {
            window.location.reload(true);
            alert("You have been loged out!")
        }).catch(err => console.log(err));
    }

  return (

    <>
        
        { 
        auth ?

        <div>
            <Navbar collapseOnSelect expand="lg" className="navbar-color" variant="dark">
                <Navbar.Brand href="/login" className='logo'>
                    WorkWord
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='burger-button'/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto navigation-container">
                        <Nav.Link href="/Profile" className='nav-link'>Profile</Nav.Link>
                        <Nav.Link href="" className='nav-link'  onClick={handleDelete}>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
        :
        <div>
        <Navbar collapseOnSelect expand="lg" className="navbar-color" variant="dark">
            <Navbar.Brand href="/login" className='logo'>
                WorkWord
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className='burger-button'/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto navigation-container">
                    <Nav.Link href="/Profile" className='nav-link'>Profile</Nav.Link>
                    {/* <Nav.Link href="SigninAccount" className='nav-link'>Signin</Nav.Link>
                    <Nav.Link href="CreateAccount" className='nav-link'>Signup</Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
        }
    </>
  );
}