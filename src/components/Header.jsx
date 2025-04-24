import { useEffect, useState } from "react";




const Header = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);   // 80 px threshold
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    return (
        <header className={`header w-full h-[60px] flex justify-between px-[50px] ${scrolled ? 'header_wrapper_light' : 'header_wrapper_dark'}`}>
            <div className="w-fit-content h-[53px]">
                <svg viewBox="220 220 50 105">
                    <g id="root" fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                        <path id="background" fill="transparent" d="M0 0h500v500H0z" />
                        <circle id="shape.accent" cx="110" cy="279" r="18" fill="#b2ebf9" />
                        <circle id="shape.secondary" cx="97" cy="263" r="13" fill="#aea1ea" />
                        <circle id="shape.primary" cx="109" cy="250" r="8" fill="#8c54a1" />
                        <g id="Group" transform="translate(101 230)">
                            <path id="Rectangle-4" d="M0 0h4v74H0z" />
                            <text id="headerText" fill={scrolled ? '#000000' : '#ffffff'} data-text-alignment="L" fontFamily="Roboto Mono" fontSize="42.135" fontStyle="normal" fontWeight="700" letterSpacing="0">
                                <tspan x="0" y="48"> MS Enterprises </tspan>
                            </text>
                        </g>
                    </g>
                </svg>
            </div>
            {/* <nav className="nav flex">
                <ul className="flex items-center gap-8">
                    <li>Home</li>
                    <li>Services</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
            </nav> */}
            <div className="number_grid">
					<div className="h3-title">
						<a className={`${scrolled ? 'light_number' : 'dark_number'}`} href="tel:18004125631">+91-98897 29651</a>
					</div>
					<div className="clearfix"> </div>
				</div>
        </header>
    )
}

export default Header;