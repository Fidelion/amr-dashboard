import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">
                    Reported Errors
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">12.299</span>
                    <span className="featuredMoneyRate">-11.2 <ArrowDownward className="featuredArrowIcon negative" /> </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">
                    Removed Errors
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">4.552</span>
                    <span className="featuredMoneyRate">+14.4 <ArrowUpward className="featuredArrowIcon" /> </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">
                    Response Time
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">19.5ms</span>
                    <span className="featuredMoneyRate">-11.2ms <ArrowDownward className="featuredArrowIcon negative" /> </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}

export default FeaturedInfo
