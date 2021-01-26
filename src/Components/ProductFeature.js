import React, { useEffect, useState } from 'react'
import FeatureData from '../JSON_Data/FeatureData.json'

export const ProductFeature = () => {
    const [data, setData] = useState([]);
    const [validData, setValidData] = useState(false);

    const createFunction = () => {
        setData(FeatureData);
    }

    useEffect(() => {
        if (data && data.length > 0) {
          setValidData(true);
        } else {
          createFunction();
        }
    }, [data]);

    return (
        <div id="f-FeaturesBody">
            {validData ? (
                data.map((feature) => {
                    return (
                        <div>
                            <h2 className="f-h2">{ feature.featureName }</h2>
                            <p className="f-p">{ feature.featureDescription }</p>
                        </div>
                    );
                })
            )  : (
                <h2>Data not found</h2>
            )}
        </div>
    )
}