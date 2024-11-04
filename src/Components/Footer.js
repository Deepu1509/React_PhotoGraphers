import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <div className='footer bg-[#f2f2f2] px-2 py-3 mt-3'>
                <div className="navigation-f  py-9 max-w-[1000px] w-full text-slate-400 mx-auto flex justify-between items-start">
                    <ul className="nav-f flex flex-col gap-2 list-none">
                        <li className="font-bold text-[16px]">Get to Know Us</li>
                        <li className="text-[13px] cursor-pointer text-slate-500 font-bold"><Link to="/" className="hover:underline">About
                            Amazon</Link>
                        </li>
                        <li className="text-[13px] cursor-pointer text-slate-500 font-bold"><Link to="/"
                            className="hover:underline">Careers</Link></li>
                        <li className="text-[13px] cursor-pointer text-slate-500 font-bold"><Link to="/" className="hover:underline">Press
                            Releases</Link>
                        </li>
                        <li className="text-[13px] cursor-pointer text-slate-500 font-bold"><Link to="/" className="hover:underline">Amazon
                            Science</Link>
                        </li>
                    </ul>
                    <ul className="nav-f flex flex-col gap-2 list-none">
                        <li className="font-bold text-[16px]">Connect with Us</li>
                        <li className="text-[13px] cursor-pointer hover:underline text-slate-500 font-bold"><Link to="/">Facebook</Link>
                        </li>
                        <li className="text-[13px] cursor-pointer hover:underline text-slate-500 font-bold"><Link to="/">Twitter (X)</Link>
                        </li>
                        <li className="text-[13px] cursor-pointer hover:underline text-slate-500 font-bold"><Link to="/">Instagram</Link>
                        </li>
                    </ul>
                    <ul className="nav-f flex flex-col gap-2 list-none">
                        <li className="font-bold text-[16px]">Make Money with Us</li>
                        <li className="text-[13px] cursor-pointer hover:underline  text-slate-500 font-bold"><Link to="/">Sell on Amazon</Link>
                        </li>
                        <li className="text-[13px] cursor-pointer hover:underline  text-slate-500 font-bold"><Link to="/">Sell under Amazon
                            Accelerator</Link></li>
                        <li className="text-[13px] cursor-pointer hover:underline  text-slate-500 font-bold"><Link to="/">Protect and Build
                            Your Brand</Link>
                        </li>
                        <li className="text-[13px] cursor-pointer hover:underline  text-slate-500 font-bold"><Link to="/">Amazon Global
                            Selling</Link></li>
                        <li className="text-[13px] cursor-pointer hover:underline text-slate-500 font-bold"><Link to="/">Supply to
                            Amazon</Link></li>
                        <li className="text-[13px] cursor-pointer hover:underline text-slate-500 font-bold"><Link to="/">Become an
                            Affiliate</Link></li>
                        <li className="text-[13px] cursor-pointer hover:underline text-slate-500 font-bold"><Link to="/">Fulfilment by
                            Amazon</Link></li>
                        <li className="text-[13px] cursor-pointer hover:underline text-slate-500 font-bold"><Link to="/">Advertise Your
                            Products</Link></li>
                        <li className="text-[13px] cursor-pointer hover:underline text-slate-500 font-bold"><Link to="/">Amazon Pay on
                            Merchants
                        </Link></li>
                    </ul>
                    <ul className="nav-f flex flex-col gap-2 list-none">
                        <li className="font-bold text-[16px]">
                            Let Us Help You</li>
                        <li className="text-[13px] cursor-pointer hover:underline text-slate-500 font-bold"><Link to="/">Your Account</Link>
                        </li>
                        <li className="text-[13px] cursor-pointer hover:underline text-slate-500 font-bold"><Link to="/">Careers</Link></li>
                        <li className="text-[13px] cursor-pointer hover:underline text-slate-500 font-bold"><Link to="/">Recalls and
                            Product Safety Alerts</Link>
                        </li>
                        <li className="text-[13px] cursor-pointer hover:underline text-slate-500 font-bold"><Link to="/">100% Purchase
                            Protection</Link></li>
                        <li className="text-[13px] cursor-pointer hover:underline text-slate-500 font-bold"><Link to="/">Amazon App
                            Download</Link></li>
                        <li className="text-[13px] cursor-pointer hover:underline text-slate-500 font-bold"><Link to="/">Help</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}
