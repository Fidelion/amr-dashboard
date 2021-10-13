import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { apiData } from '../../dummyData';
import "./home.css";

function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={apiData} title="API Analytics" grid dataKey={["api calls", "errors reported", "errors removed"]} />
            <div className="homeWidget">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default Home
