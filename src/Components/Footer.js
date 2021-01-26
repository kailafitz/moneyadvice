import React from 'react'
import Link from '@material-ui/core/Link';
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
                            <li className="f-h4"><Link href="/about">About</Link></li>
                            <li className="f-h4"><Link href="/features">Features</Link></li>
                            <li className="f-h4"><Link href="#">Additional Features</Link></li>
                            <li className="f-h4"><Link href="/privacypolicy">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div className="f-FooterIconContainer">
                        <i className="f-FooterIcon" class="fab fa-linkedin"></i>
                        <h4 className="f-h4">Follow us on LinkedIn</h4>
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
                        <br/>
                    </h4>
                    <div className="f-FooterIconContainer">
                        <i class="fas fa-phone-square-alt"></i>
                        <h4 className="f-h4">+353 65 684 9675</h4>
                    </div>
                    <div className="f-FooterIconContainer">
                        <i class="fas fa-envelope-square"></i>
                        <h4 className="f-h4">support@moneyadvice.ie</h4>
                    </div>
                    
                </div>
            </div>            
        </footer>
    )
}