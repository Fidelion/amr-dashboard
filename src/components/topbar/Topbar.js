import React from 'react'
import "./topbar.css"
import { NotificationsActive, Language, Settings } from '@material-ui/icons/';

function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">ground-zero</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsActive />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://images.pexels.com/photos/2466465/pexels-photo-2466465.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="profilePic" />
                </div>
            </div>
        </div>
    )
}

export default Topbar
