import React, { Component } from 'react'
import image1 from "./Images/download1.png"
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
    state = {
        data: ""
    }
    render() {
        return (
            <div className='navigation w-full bg-[#f2f2f2] flex justify-between items-center px-3 py-2'>
                <div className="logo flex items-center gap-2">
                    <img src={image1} alt="" className='w-16 h-16  overflow-hidden rounded-full object-cover object-center' />
                    <p className='font-bold text-2xl text-slate-600'>PhotoGraphy</p>
                </div>
                <div className="search-bar w-[520px] flex shadow-sm text-[14px] items-center bg-white rounded-md overflow-hidden">
                    <input value={this.state.data} onChange={(e) => this.setState({ data: e.target.value })} type="text" name="" id="" placeholder='Search Famous Images' className='text-[13px] w-full border-none outline-none  pl-3 text-slate-600 py-2' />
                    <button onClick={this.props.changeData(this.state.data)} className='py-2 flex items-center curson-pointer justify-center px-2 bg-slate-600'>
                        <span className="material-icons text-white">
                            search
                        </span>
                    </button>
                </div>
                <div className="navigation-menus">
                    <ul className='flex gap-2 font-medium text-slate-600 text-[13px]'>
                        <li className='px-2 font-bold cursor-pointer group relative'>
                            <Link to="/" className='after:absolute after:bottom-0 group-hover:after:block after:w-full after:bg-slate-600 after:h-[2px] after:left-0'>Home</Link>
                        </li>
                        <li className='px-2 cursor-pointer group relative'>
                            <a href="/about" className='after:absolute after:bottom-0 after:hidden group-hover:after:block after:w-full after:bg-slate-600 after:h-[2px] after:left-0'>About</a>
                        </li>
                        <li className='px-2 cursor-pointer group relative'>
                            <a href="/contact" className='after:absolute after:bottom-0 after:hidden group-hover:after:block after:w-full after:bg-slate-600 after:h-[2px] after:left-0'>Contact</a>
                        </li>
                        <li className='px-2 cursor-pointer group relative'>
                            <a href="/services" className='after:absolute after:bottom-0 after:hidden group-hover:after:block after:w-full after:bg-slate-600 after:h-[2px] after:left-0'>Service</a>
                        </li>
                        <li className='px-2 cursor-pointer group relative'>
                            <a href="/services" className='after:absolute after:bottom-0 after:hidden group-hover:after:block after:w-full after:bg-slate-600 after:h-[2px] after:left-0'>Sign In</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
