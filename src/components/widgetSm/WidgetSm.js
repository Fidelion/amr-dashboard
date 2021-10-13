import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">
                Company Members
            </span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="widgetSmPic" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Karenina</span>
                        <span className="widgetSmJobTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/3153203/pexels-photo-3153203.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="widgetSmPic" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Mark Lee Franz</span>
                        <span className="widgetSmJobTitle">Network Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/1400017/pexels-photo-1400017.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="widgetSmPic" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Joana Hung Li</span>
                        <span className="widgetSmJobTitle">Marketing Assistant</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/4144101/pexels-photo-4144101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="widgetSmPic" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Jason Mark Roberts</span>
                        <span className="widgetSmJobTitle">Security Specialist</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/2682452/pexels-photo-2682452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="widgetSmPic" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Teuta Finney</span>
                        <span className="widgetSmJobTitle">Customer Support</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default WidgetSm
