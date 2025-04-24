
const Footer = () => {
    return (
        <section className="contact-area" id="contact">
            <div className="container m-auto">
                <div className="flex">
                    <div className="w-[80%] m-auto flex flex-col">
                        <div className="contact-content text-center logo-nav-left">
                            <a className="footer-btn" href="tel:98897 29651">+91-98897 29651</a>
                            <br />
                            <div className="footer_logo m-auto">
                                <svg viewBox="220 220 50 105">
                                    <g id="root" fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                                        <path id="background" fill="transparent" d="M0 0h500v500H0z" />
                                        <circle id="shape.accent" cx="110" cy="279" r="18" fill="#b2ebf9" />
                                        <circle id="shape.secondary" cx="97" cy="263" r="13" fill="#aea1ea" />
                                        <circle id="shape.primary" cx="109" cy="250" r="8" fill="#8c54a1" />
                                        <g id="Group" transform="translate(101 230)">
                                            <path id="Rectangle-4" d="M0 0h4v74H0z" />
                                            <text id="headerText" fill="#fff" data-text-alignment="L" fontFamily="Roboto Mono" fontSize="42.135" fontStyle="normal" fontWeight="700" letterSpacing="0">
                                                <tspan x="0" y="48"> MS Enterprises </tspan>
                                            </text>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            {/* <img src="images/logo1.png" width="122" height="80" alt="logo" /> */}
                            <p className="text-white">Our name signifies Loyalty, Accountability and Duty</p>

                            <div className="hr"></div>
                            <div className="footer-call">
                                <p className="text-center mt-2 m-0">Customer Care no:-
                                    <a className="text-white" href="tel:98897 29651">+91-098897 29651</a>
                                    <br />
                                    {/* <i className="fa fa-phone"></i>
                                    <a className="text-white" href="tel:98897 29651">+91-098897 29651</a>
                                    &nbsp;&nbsp;
                                    <i className="fa fa-phone"></i>
                                    <a className="text-white" href="#">+91-98897 29651</a>
                                    &nbsp;&nbsp;
                                    <i className="fa fa-phone"></i>
                                    <a className="text-white" href="tel:098897 29651">+91-098897 29651</a>
                                    <br />
                                    <a className="text-white" href="mailto:info@msenterprises.com">
                                        <i className="fa fa-envelope"></i> info@msenterprises.com
                                    </a> */}
                                </p>
                                <br />
                                <div class="cityLists"><ul class="list-style-one clearfix mt-3"><li>Sitapur</li><li>Lakhimpur </li><li>Naipalapur </li></ul></div>
                                <div>
                                    <h6 className="text-[12px]">U P sitapur U P lakhimpur Sitapur, and, lakhimpur, Uttar Pradesh - 261001</h6>


                                    <div className="contact-social">
                                        <ul>
                                            <li><a className="hover-target" target="_blank" href="https://www.facebook.com/msenterprises"><i className="fa fa-facebook-f"></i></a></li>
                                            <li><a className="hover-target" target="_blank" href="https://www.instagram.com/msenterprises/"><i className="fa fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col pt-3 pb-3 copyright-section flex justify-between text-white">
                            <div className="flex justify-center items-center">
                                <span className="text-center">Copyright © 2018-2023 M.S. Enterprises | All Rights Reserved</span>
                            </div>
                            <div className="max-w-[50%] max-md:max-w-p[100%] m-auto">
                                <ul className="flex justify-between gap-[30px] max-md:gap-[10px]">
                                    <li className="">
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                    <li className="">
                                        <a href="#">Terms of Use</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;