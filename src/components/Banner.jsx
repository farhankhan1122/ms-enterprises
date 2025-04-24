
const Banner = () => {
    return (
        <div className="banner-slider">
            <div className="hero-banner">
                <div className="container m-auto">
                    <div className="hero">
                        <div className="">
                            <div className="banner-content">
                                <div className="hero-text-section">
                                    <h1>AC Service, Repair &amp; Installation In Sitapur</h1>
                                    <ul>
                                        <li>Just a call away.</li>
                                        <li>Quality service at your door step.</li>
                                        <li>Verified &amp; Company trained technicians.</li>
                                        <li>30 days warranty for services.</li>
                                        {/* <!-- <li>Your schedule is our priority.</li>
                                        <li>Appliance Repair for Any Brand, Any Time.</li>	 --> */}
                                    </ul>
                                </div>
                            </div>
                            <div id="service-section" className="pt-3 flex gap-12">
                                <div className="text-center">
                                    <div className="more-service-section">
                                        <a className="flex flex-col items-center gap-2" data-bs-toggle="modal" href="#popupform" role="button">
                                            <img className="w-100 img-thumbnail" alt="AC Service" loading="lazy" src="https://local.dutyguy.com/images/services/split-service.jpg"/>
                                                <span className="text-white">AC Service</span>
                                        </a>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <div className="more-service-section">
                                        <a className="flex flex-col items-center gap-2" data-bs-toggle="modal" href="#popupform" role="button">
                                            <img className="w-100 img-thumbnail" alt="AC Repair" loading="lazy" src="https://local.dutyguy.com/images/services/window-ac-repair989.webp" />
                                                <span className="text-white">AC Repair</span>
                                        </a>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <div className="more-service-section">
                                        <a className="flex flex-col items-center gap-2" data-bs-toggle="modal" href="#popupform" role="button">
                                            <img className="w-100 img-thumbnail" alt="AC Installation" loading="lazy" src="https://local.dutyguy.com/images/services/ac-services11.webp" />
                                                <span className="text-white">AC Installation</span>
                                        </a>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <div className="more-service-section">
                                        <a className="flex flex-col items-center gap-2" data-bs-toggle="modal" href="#popupform" role="button">
                                            <img className="w-100 img-thumbnail" alt="AC Uninstallation" loading="lazy" src="https://local.dutyguy.com/images/services/split-repair.webp" />
                                                <span className="text-white">AC Uninstallation</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;