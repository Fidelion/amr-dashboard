import "./widgetLg.css";
import { ArrowUpward, ArrowDownward } from "@material-ui/icons";
function WidgetLg() {

    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    }

    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">
                Latest Updates
            </h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Status</th>
                    <th className="widgetLgTh">Logs</th>
                    <th className="widgetLgTh">Monitor</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgCustomer">
                        <img src="https://channel24.pk/wp-content/uploads/2021/06/microsoft-80658_1280.png" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Microsoft SNG</span>
                    </td>
                    <td className="widgetLgStatus"><Button type="Approved" /></td>
                    <td className="widgetLgLogs">2.212 <ArrowUpward className="widgetLgIcon" /></td>
                    <td className="widgetLgMonitor">+22 <ArrowDownward className="widgetLgIcon" /></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgCustomer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Texas_flag_map.svg/1200px-Texas_flag_map.svg.png" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Texas A&M</span>
                    </td>
                    <td className="widgetLgStatus"><Button type="Declined" /></td>
                    <td className="widgetLgLogs">3.323 <ArrowUpward className="widgetLgIcon" /></td>
                    <td className="widgetLgMonitor">-22 <ArrowDownward className="widgetLgIcon" /></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgCustomer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/TNT_Logo_2016.svg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">TNT</span>
                    </td>
                    <td className="widgetLgStatus"><Button type="Pending" /></td>
                    <td className="widgetLgLogs">29 <ArrowUpward className="widgetLgIcon" /></td>
                    <td className="widgetLgMonitor">0 <ArrowDownward className="widgetLgIcon" /></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgCustomer">
                        <img src="https://i.pinimg.com/originals/b0/46/8c/b0468c61baa72515ada2838c236466e8.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">StreamLink</span>
                    </td>
                    <td className="widgetLgStatus"><Button type="Approved" /></td>
                    <td className="widgetLgLogs">2494 <ArrowUpward className="widgetLgIcon" /></td>
                    <td className="widgetLgMonitor">+77 <ArrowDownward className="widgetLgIcon" /></td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLg
