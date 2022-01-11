import React from "react";
import {Link} from "react-router-dom";

const LeftBar = (props) => {
    const {getApi} = props;
    return(
    <div>
        <div>
            <Link to="/client/">API</Link>
            <div>
                <div>
                    <button onClick={()=>getApi('https://api.moneyplace.io/statistic/product?mp=wildberries&type=fbo&period=week&sort=-turnover')}>Get API</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default LeftBar;