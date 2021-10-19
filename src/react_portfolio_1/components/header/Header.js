import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Nav, Navbar  } from 'react-bootstrap';

import {NavLink, Link, withRouter} from 'react-router-dom';

import {HomeRounded, Telegram} from '@material-ui/icons'


import resumeData from '../../utils/resumeData';

import CustomButton from '../button/button'

const Header = (props) => {

    const pathName = props?.location?.pathName;


    return (

        <Navbar sticky='top' className='header' expand='lg'>

            {/* Home */}

            <Nav.Link as={NavLink} to='/'>

                <Navbar.Brand className='header_home'>
                    <HomeRounded/>
                </Navbar.Brand>

            </Nav.Link>

            <Navbar.Toggle/>

            <Navbar.Collapse>
                <Nav>

                    {/* Resume Link */}
                    <Nav.Link as={NavLink} to='/' className={pathName==='/'?'header_link_active': 'header_link'}> 
                        Resume
                    </Nav.Link>

                    {/* Portfolio Link */}
                    <Nav.Link as={NavLink} to='/' className={pathName==='/portfolio'?'header_link_active': 'header_link'}> 
                        Portfolio
                    </Nav.Link>




                </Nav>

                <div className='header-right'> 

                    {Object.keys(resumeData.socials).map((key) => (
                        <a href={resumeData.socials[key].link} target='_blank' > 
                            {/* {resumeData.socials[key].text} */}
                            {resumeData.socials[key].icon}
                        </a>
                    ))}

                    <CustomButton text={'Hire Me'}  icon={<Telegram/>}/>

                   

                </div>




            </Navbar.Collapse>




        </Navbar>
    )
}

export default withRouter(Header)
