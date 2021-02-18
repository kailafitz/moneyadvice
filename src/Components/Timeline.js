import React, { useEffect, useState } from "react";
import JSONData from "../JSON_Data/TimelineData.json";

export default function Timeline() {

    const [data, setData] = useState([]);
    const createFunction = () => {
        setData(JSONData);
    }

    useEffect(() => {
        createFunction();
    }, [data]);

    return (
        <>
            <section classNameName="section intro">
                <div classNameName="container">
                    <h1>Horizontal Timeline &rarr;</h1>
                </div>
            </section>

                <section className="timeline">
                <ol>
                    {
                        data.map(timeline => {
                            return (
                                <>
                                    <li>
                                        <div>
                                            <time>{ timeline.timelineYear }</time>
                                            { timeline.timelineDetails }
                                        </div>
                                    </li>
                                </>
                            )                      
                        
                        })
                    }
                </ol>
                <div className="arrows">
                    <button className="arrow arrow__prev disabled" disabled>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/arrow_prev.svg" alt="prev timeline arrow" />
                    </button>
                    <button className="arrow arrow__next">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/arrow_next.svg" alt="next timeline arrow" />
                    </button>
                </div>
            </section>
        </>
    )
};