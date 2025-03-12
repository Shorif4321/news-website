import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faWhatsapp, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Footer = () => {

    const navItems = [
        {
            route: 'Home',
            path: '/'
        },
        {
            route: 'Pages',
            path: '/pages'
        },
        {
            route: 'About',
            path: '/about'
        },
        {
            route: 'Categories',
            path: '/categories'
        },
        {
            route: 'Contact',
            path: '/contact'
        },
    ]


    return (
        <div className='p-5 md:p-10 bg-black text-white text-center'>
            <div className='flex justify-center'>
                <div className='flex'>
                    <FontAwesomeIcon className='text-white h-[20px] ms-4' icon={faFacebook} />
                    <FontAwesomeIcon className='text-white h-[20px] ms-4' icon={faYoutube} />
                    <FontAwesomeIcon className='text-white h-[20px] ms-4' icon={faLinkedin} />
                    <FontAwesomeIcon className='text-white h-[20px] ms-4' icon={faXTwitter} />
                    <FontAwesomeIcon className='text-white h-[20px] ms-4' icon={faWhatsapp} />
                </div>
            </div>

            {/* nav item div */}
            <div className='flex justify-center mt-5'>
                <div className="navbar-center px-5 lg:flex flex-wrap">
                    <ul className="block md:flex menu menu-horizontal px-1">
                        {
                            navItems.map(item => <li className='text-white uppercase font-semibold' key={item.path}><Link href={item.path}> {item.route} </Link></li>)
                        }
                        <li className='text-white uppercase font-semibold'>
                            <details>
                                <summary>Recent News</summary>
                                <ul className="p-2 text-black">
                                    <li><a>News coming one</a></li>
                                    <li><a>News coming two</a></li>
                                    <li><a>News coming there</a></li>

                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>

            <p className='text-neutral-500 text-sm'>
                @2025 The News Portal. Design by Developer Shoriful Islaml
            </p>

        </div>
    );
};

export default Footer;