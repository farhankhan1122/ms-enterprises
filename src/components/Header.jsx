

const Header = () => {
    return (
        <header className="header_wrapper w-full h-24">
            <div className="w-[60px] h-[30px]">
                <svg viewBox="56 220 170 105">
                    <g id="root" fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                        <path id="background" fill="transparent" d="M0 0h500v500H0z" />
                        <circle id="shape.accent" cx="110" cy="279" r="18" fill="#b2ebf9" />
                        <circle id="shape.secondary" cx="97" cy="263" r="13" fill="#aea1ea" />
                        <circle id="shape.primary" cx="109" cy="250" r="8" fill="#8c54a1" />
                        <g id="Group" transform="translate(101 230)">
                            <path id="Rectangle-4" d="M0 0h4v74H0z" />
                            <text id="headerText" fill="#000" data-text-alignment="L" fontFamily="Roboto Mono" fontSize="42.135" fontStyle="normal" fontWeight="700" letterSpacing="0">
                                <tspan x="0" y="48"> MS Enterprises </tspan>
                            </text>
                        </g>
                    </g>
                </svg>
            </div>
            <nav className="nav">
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;