import React, { useState } from 'react';
import {Dropdown} from 'react-bootstrap';
import ChatList from './ChatList';
import Aux from "../../../../../hoc/_Aux";
import DEMO from "../../../../../store/constant";
import Avatar1 from '../../../../../assets/images/user/avatar-1.jpg';
import Avatar2 from '../../../../../assets/images/user/avatar-2.jpg';
import Avatar3 from '../../../../../assets/images/user/avatar-3.jpg';
import { useHistory } from 'react-router-dom';
import { message } from 'antd';
import { getUserFromLocalStorage } from '../../../../../helpers/common';
import { saveUser } from '../../../../../helpers/common';
import { Remove } from '../../../../../helpers/common';
const NavRight =({rtlLayout})=> {

 const [listOpen,setlistOpen]=useState(false)
 const history=useHistory()
 const data=getUserFromLocalStorage()
 const name=data.user_infor.user_name
 const logout=()=>{
    localStorage.clear();
    history.push('/auth/signin')
    message.success("Đăng Xuất Thành Công")
    
}
   

  
        return (
            <Aux>
                <ul className="navbar-nav ml-auto">
                    <li>
                        <Dropdown alignRight={!rtlLayout}>
                            <Dropdown.Toggle variant={'link'} id="dropdown-basic">
                                <i className="icon feather icon-bell"/> <i className="icon feather icon-chevron-down"/>
                            </Dropdown.Toggle>
                            <Dropdown.Menu alignRight className="notification">
                                <div className="noti-head">
                                    <h6 className="d-inline-block m-b-0">Notifications</h6>
                                    <div className="float-right">
                                        <a href={DEMO.BLANK_LINK} className="m-r-10">mark as read</a>
                                        <a href={DEMO.BLANK_LINK}>clear all</a>
                                    </div>
                                </div>
                                <ul className="noti-body">
                                    <li className="n-title">
                                        <p className="m-b-0">NEW</p>
                                    </li>
                                    <li className="notification">
                                        <div className="media">
                                            <img className="img-radius" src={Avatar1} alt="Generic placeholder"/>
                                            <div className="media-body">
                                                <p><strong>John Doe</strong><span className="n-time text-muted"><i
                                                    className="icon feather icon-clock m-r-10"/>30 min</span></p>
                                                <p>New ticket Added</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="n-title">
                                        <p className="m-b-0">EARLIER</p>
                                    </li>
                                    <li className="notification">
                                        <div className="media">
                                            <img className="img-radius" src={Avatar2} alt="Generic placeholder"/>
                                            <div className="media-body">
                                                <p><strong>Joseph William</strong><span className="n-time text-muted"><i
                                                    className="icon feather icon-clock m-r-10"/>30 min</span></p>
                                                <p>Prchace New Theme and make payment</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="notification">
                                        <div className="media">
                                            <img className="img-radius" src={Avatar3} alt="Generic placeholder"/>
                                            <div className="media-body">
                                                <p><strong>Sara Soudein</strong><span className="n-time text-muted"><i
                                                    className="icon feather icon-clock m-r-10"/>30 min</span></p>
                                                <p>currently login</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="noti-footer">
                                    <a href={DEMO.BLANK_LINK}>show all</a>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    {/* <li className={this.props.rtlLayout ? 'm-r-15' : 'm-l-15'}> */}
                    <li>
                        <a href={DEMO.BLANK_LINK} className="displayChatbox" onClick={() => setlistOpen}><i className="icon feather icon-mail"/></a>
                    </li>
                    <li>
                        <Dropdown alignRight={!rtlLayout} className="drp-user">
                            <Dropdown.Toggle variant={'link'} id="dropdown-basic">
                                <i className="icon feather icon-user"/> <i className="icon feather icon-chevron-down"/>
                            </Dropdown.Toggle>
                            <Dropdown.Menu alignRight className="profile-notification">
                                <div className="pro-head">
                                    <img src={Avatar2} className="img-radius" alt="User Profile"/>
                                    <span>{name}</span>
                                    <a href={DEMO.BLANK_LINK} onClick={()=>logout()} className="dud-logout" title="Logout">
                                        
                                        <i className="feather icon-log-out"/>
                                    </a>
                                </div>
                                <ul className="pro-body">
                                    <li><a href={DEMO.BLANK_LINK} className="dropdown-item"><i className="feather icon-settings"/> Cài đặt</a></li>
                                    <li><a href={DEMO.BLANK_LINK} className="dropdown-item"><i className="feather icon-user"/> Tài khoản</a></li>
                                    <li><a href={DEMO.BLANK_LINK} className="dropdown-item"><i className="feather icon-mail"/> Tin nhắn</a></li>
                                    <li><a href={DEMO.BLANK_LINK} className="dropdown-item"><i className="feather icon-bell"/> Thông báo</a></li>
                                </ul>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                </ul>
                <ChatList listOpen={listOpen} closed={() => setlistOpen} />
            </Aux>
        );
    }


export default NavRight;
