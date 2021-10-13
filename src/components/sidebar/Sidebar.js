import React from 'react'
import "./sidebar.css"
import { LineStyle, Timeline, Dns, Group, Extension, Assessment, Widgets } from "@material-ui/icons"

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <LineStyle className="sidebarIcon" />
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Dns className="sidebarIcon" />
                            SMTPD
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Links</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Group className="sidebarIcon" />
                            Users
                        </li>
                        <li className="sidebarListItem">
                            <Extension className="sidebarIcon" />
                            API Calls
                        </li>
                        <li className="sidebarListItem">
                            <Assessment className="sidebarIcon" />
                            Reports
                        </li>
                        <li className="sidebarListItem">
                            <Widgets className="sidebarIcon" />
                            Extensions
                        </li>
                    </ul>
                </div>


            </div>
        </div>
    )
}

export default Sidebar
