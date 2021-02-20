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
                            <li className="f-p"><Link href="/about">About</Link></li>
                            <li className="f-p"><Link href="/features">Features</Link></li>
                            <li className="f-p"><Link href="/contactus">Contact Us</Link></li>
                            <li className="f-p"><Link href="/privacypolicy">Privacy Policy</Link></li>
                            <li className="f-p"><Link href="/">Meet our Team</Link></li>
                            <li className="f-p"><Link href="/downloads">Downloads</Link></li>
                        </ul>
                    </div>
                    <div className="f-FooterIconContainer">
                        <i className="f-FooterIcon" class="fab fa-linkedin"></i>
                        <p className="f-p">Follow us on LinkedIn</p>
                    </div>

                </div>
                <div className="f-FooterColumn" id="f-ContactUsColumn">
                    <h3 className="f-h3">Contact Us</h3>
                    <p className="f-p">Lunar Technologies Ltd t/a Money Advice,
                        Registered in Ireland, Registered No: 504675.
                        <br/>
                        <br/>
                        Station Road,<br/>
                        Ennis,<br/>
                        Co. Clare,<br/>
                        Ireland<br/>
                        V95 FN79
                        <br/>
                    </p>
                    <div className="f-FooterIconContainer">
                        <i class="fas fa-phone-square-alt"></i>
                        <p className="f-p">+353 65 684 9675</p>
                    </div>
                    <div className="f-FooterIconContainer">
                        <i class="fas fa-envelope-square"></i>
                        <p className="f-p">support@moneyadvice.ie</p>
                    </div>                    
                </div>
            </div>            
        </footer>
    )
}