import React from 'react'
import { Link } from 'react-router-dom'
import FooterLogo from '../Images/FooterLogo.png'

export default function Footer() {
    return (
        <footer>
            <div id="f-BigColumnDiv">
                <div className="f-FooterColumn" id="f-LogoColumn">
                    <img alt="Logo" src={FooterLogo} />
                </div>
                <div className="f-FooterColumn" id="f-OurCompanyColumn">
                    <div id="f-FooterLinks">
                        <h3 className="f-h3">Our Company</h3>
                        <ul>
                            <li className="f-h4"><Link exact path="/about">About</Link></li>
                            <li className="f-h4"><Link exact path="/productfeatures">Poduct Features</Link></li>
                            <li className="f-h4"><Link exact path="/additionalfeatures">Additional Features</Link></li>
                        </ul>
                    </div>
                    <div id="f-FooterLinkedIn">

                    </div>
                </div>
                <div className="f-FooterColumn" id="f-ContactUsColumn">
                    <h3 className="f-h3">Contact Us</h3>
                    <h4 className="f-h4">Lunar Technologies Ltd t/a Money Advice,
                        Registered in Ireland, Registered No: 504675.
                        <br/>
                        <br/>
                        Station Road,<br/>
                        Ennis,<br/>
                        Co. Clare,<br/>
                        Ireland<br/>
                        V95 FN79
                    </h4>
                </div>
            </div>            
        </footer>
    )
}