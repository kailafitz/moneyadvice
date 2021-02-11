import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import OverviewData from '../JSON_Data/ProductOverview.json'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SectionTitle from './SectionTitle';
import { BlockBulletPoint } from './BlockBulletPoint';

const tableStyles = makeStyles({
    root: {
        width: "50%",
    },
});

export default function ProductOverview() {
    const classesTable = tableStyles();

    const [data, setData] = useState([]);

    const createFunction = () => {
        setData(OverviewData);
    }

    useEffect(() => {
        createFunction();
    }, [data]);

    return (
        <>
            <SectionTitle title="What is MoneyAdvice CRM?" />
            <div id="f-ProductOverview" className="f-MarginAuto">
                {
                    data.map((overview) => {
                        return (
                            <>
                                {/* <div className="f-TextCenter f-MarginAuto">
                                    <img id="f-FeatureMainImage" src={overview.overviewMainImage}/>
                                </div> */}
                                <p className="f-p">{overview.overviewMainDescription}</p>
                                <h3 className="f-h3 f-BlueFont">{overview.overviewSubtitle}</h3>
                                <div id="f-BlockBulletPointWrapper">
                                {
                                overview.overviewBulletPoints.map((bulletpoint) => {
                                    return (
                                    <BlockBulletPoint bulletPoint={bulletpoint} />
                                    );
                                })
                                }
                                </div>
                                <p className="f-p">{overview.overviewSecondaryParagraph}</p>
                                <TableContainer component={Paper} className={classesTable.root}>
                                <Table size="small" aria-label="a dense table">
                                    <TableBody>
                                        {
                                            overview.overviewTable.map((cell) => (
                                                <TableRow>
                                                    <TableCell component="th" scope="row" align="left">
                                                        <i class="fas fa-circle f-BulletPointIcon"></i> {cell}
                                                    </TableCell>
                                                </TableRow>
                                                )
                                            )
                                        }
                                    </TableBody>
                                </Table>
                                </TableContainer>       
                            </>
                        );
                    })
                }
            </div>
        )
    </>
)}