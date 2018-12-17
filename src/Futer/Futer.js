import React, { Component } from "react";
import "./Futer.css"
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Futer extends Component {
    state = {
        d: new Date(),
        dropdownOpen: false,
        stil:{
            background:'orangered', 
            color:'white', 
            border:'2px solid white'
        }
    }
    toggleDropDown = () => {
        let dropDownHandler = this.state.dropdownOpen
        this.setState({
            dropdownOpen: !dropDownHandler
        });
    }
    hovrHandler=()=>{
        this.setState({
            stil:{
                background:'#333', 
            color:'white', 
            border:'2px solid white'
            }
        })
    }
    mouseLeaveHandler=()=>{
        this.setState({
            stil:{
                background:'orangered', 
            color:'white', 
            border:'2px solid white'
            }
        })
    }
    render() {
        return <div className="podFuterac" style={{ paddingTop: '10px' }}>
                        <a href="https://cv-josifv.firebaseapp.com/indexEn.html" target="_blank" style={{fontSize:'80%'}}>Made by Josif Vacić &copy; <span>{this.state.d.getFullYear()}</span></a>
                       
                        <ul style={{ marginBottom: '0' , width:'95%'}}>
                            <li><a href="https://www.linkedin.com/in/josif-vacic-657660165/"target="_blank"><i style={{ fontSize: '30px', padding: '10px' }} class="fa">&#xf08c;</i></a></li>
                            <li><a href="https://stackoverflow.com/users/9685324/jozev"target="_blank"><i style={{ fontSize: '30px', padding: '10px' }} class="fa">&#xf16c;</i></a></li>
                            <li><a href="https://github.com/JosifV"target="_blank"><i style={{ fontSize: '30px', padding: '10px' }} class="fa">&#xf092;</i></a></li>
                            <li><a href="https://www.facebook.com/iosif.vacic"target="_blank"><i style={{ fontSize: '30px', padding: '10px' }} class="fa">&#xf082;</i></a></li>
                            <li style={{ float: 'right' }}><Dropdown direction="up" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                                <DropdownToggle caret style={this.state.stil} onMouseOver={this.hovrHandler} onMouseLeave={this.mouseLeaveHandler}>
                                   Language
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>Lang1</DropdownItem>
                                    <DropdownItem>Lang2</DropdownItem>
                                </DropdownMenu>
                            </Dropdown></li>
                        </ul>
                        <p style={{margin:'0'}}>*images used are not mine - page made for non commercial use</p>

        </div>
    }
}
export default Futer
