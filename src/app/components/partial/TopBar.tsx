import Image from 'next/image';
import {
    FaEnvelope,
    FaFacebookF,
    FaXTwitter,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
    FaTiktok
} from 'react-icons/fa6';



const TopBar = () => {
    return (
        <div className="bg-brand-800 text-white/90 text-xs md:text-sm">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-wrap items-center justify-between gap-3 py-2.5">

                {/* Contact Links */}
                {/* Contact Links */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-1.5">
                    {[
                        {
                            name: "Australia",
                            code: "AU",
                            phone: "+61 433 674 578",
                            tel: "+61433674578",
                        },
                        {
                            name: "Bangladesh",
                            code: "BD",
                            phone: "+880 9617 990099",
                            tel: "+8809617990099",
                        },
                    ].map((item) => (
                        <a
                            key={item.code}
                            href={`tel:${item.tel}`}
                            aria-label={`Call ${item.name}: ${item.phone}`}
                            className="flex items-center gap-2 hover:text-white transition-colors"
                        >
                            <Image
                                src={`https://flagcdn.com/w20/${item.code.toLowerCase()}.png`}
                                alt={`${item.name} flag`}
                                width={20}
                                height={14}
                                className="h-3.5 w-5 object-cover"
                                unoptimized
                            />

                            <span className='text-xs'>{item.phone}</span>
                        </a>
                    ))}

                    <a
                        href="mailto:info@hbdservices.com"
                        className="hidden sm:flex items-center gap-2 hover:text-white transition-colors"
                    >
                        <FaEnvelope className="text-[10px]" />
                        <span>info@hbdservices.com</span>
                    </a>
                </div>

                {/* Social Media Links */}
                <div className="items-center gap-4 text-white/70 hidden min-[480px]:flex">
                    <a
                        href="https://www.facebook.com/hbdservices"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="hover:text-white transition-colors"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://twitter.com/hbdservicesbd"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        className="hover:text-white transition-colors"
                    >
                        <FaXTwitter />
                    </a>
                    <a
                        href="https://www.instagram.com/hbd_services_bd"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="hover:text-white transition-colors"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://www.youtube.com/channel/UCUKguoDorZOOTbXzfGVLgyA"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                        className="hover:text-white transition-colors"
                    >
                        <FaYoutube />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/hbdservices/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="hover:text-white transition-colors"
                    >
                        <FaLinkedinIn />
                    </a>
                    <a
                        href="https://www.tiktok.com/@hbd_services"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="TikTok"
                        className="hover:text-white transition-colors"
                    >
                        <FaTiktok />
                    </a>
                </div>

            </div>
        </div>
    )
}

export default TopBar