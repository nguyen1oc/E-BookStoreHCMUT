import { useState } from 'react';

function LFooter() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            {/* About Us Section */}
            {/* Footer Section */}
            <footer id="lfooter" className="bg-[#424769] text-black">
                <div className="py-8 ml-4">
                    <div className="container mx-auto grid lg:grid-cols-2 gap-8">
                        {/* Logo and Description */}
                        <div>
                            <a href="#home" className="flex items-center space-x-2">
                                <span className="text-5xl font-bold text-white ml-0">HCMUT E-Bookstore</span>
                            </a>
                            <p className="mt-4 mb-6 text-white mb-2">
                                E-BookStore - A collection of new, unique, and interesting books, constantly updating with the latest titles based on readers' requests. Offering a wide variety of books in diverse genres, from sci-fi, mystery, horror, romance, to adventure. <b>One of the most reputable websites in Vietnam.</b>
                            </p>
                            <h6 className="text-lg font-semibold mb-2 text-white text-2xl">Join with us</h6>
                            <ul className="flex items-center space-x-4">
                                <li>
                                    <a href="https://www.facebook.com/nnnguyen.loc/">
                                        <img
                                            alt="fb"
                                            className="w-8 h-8"
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/__nnguyenloc/00">
                                        <img
                                            alt="insta"
                                            className="w-14 h-15"
                                            src="https://static.vecteezy.com/system/resources/previews/018/930/413/non_2x/instagram-logo-instagram-icon-transparent-free-png.png"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Section */}
                        <div className="text-white lg:text-end mr-10">
                            <h6 className="text-lg font-bold text-3xl">Contact with us via</h6>
                            <p className="text-white">nguyenlocdeptrai@gmail.com</p>
                            <p className="text-white">0933366454 (Mr. Loc)</p>
                            <p className="text-white">268 Ly Thuong Kiet P4 D10 HCMC</p>
                            <div className="hidden 2xl:flex">
                                <img
                                    src="https://www.internship.edu.vn/wp-content/uploads/Logo-OISP-260x260-1-200x200.png"
                                    alt="logo"
                                    className="lg:w-15 lg:h-15 lg:right-0 lg:absolute lg:mr-12 lg:mt-3"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="container flex lg:flex-row flex-col justify-between w-full p-5">
                    {/* Section for 2024 Resources */}
                    <div className="text-center lg:text-start text-white font-bold mt-4">
                        @2024. Resources related to
                        <a href="/"> HCMUT E-Bookstore</a>.
                    </div>

                    {/* Section for Policies */}
                    <div className="text-center md:text-end text-white font-bold mt-4">
                        <div className="text-white">
                            <a href="#">Privacy Policy</a>
                            <a href="#" className="ps-2">Comment Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default LFooter;
