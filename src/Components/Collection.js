import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Collection extends Component {
    state = {
        point: 0
    }
    render() {
        return (
            <div className='collection-of-images flex items-center justify-center px-2 py-2 text-[13px] bg-[#e4e3e3] list-none gap-1 text-slate-600 font-medium'>
                <li className='px-2 cursor-pointer group relative transition-transform hover:scale-105'>
                    <Link to="/mountain" onClick={() => this.setState({ point: 0 })} className={this.state.point === 0 ? "font-bold" : ""}>Mountains</Link>
                </li>
                <li className='px-2 cursor-pointer group relative transition-transform hover:scale-105'>
                    <Link to="/river" onClick={() => this.setState({ point: 1 })} className={this.state.point === 1 ? "font-bold" : ""}>Rivers</Link>
                </li>
                <li className='px-2 cursor-pointer group relative transition-transform hover:scale-105'>
                    <Link to="/forest" onClick={() => this.setState({ point: 2 })} className={this.state.point === 2 ? "font-bold" : ""}>Rain Forest</Link>
                </li>
                <li className='px-2 cursor-pointer group relative transition-transform hover:scale-105'>
                    <Link to="/snow" onClick={() => this.setState({ point: 3 })} className={this.state.point === 3 ? "font-bold" : ""}>Snow Mountain</Link>
                </li>
                <li className='px-2 cursor-pointer group relative transition-transform hover:scale-105'>
                    <Link to="/nature" onClick={() => this.setState({ point: 4 })} className={this.state.point === 4 ? "font-bold" : ""}>Nature</Link>
                </li>
                <li className='px-2 cursor-pointer group relative transition-transform hover:scale-105'>
                    <Link to="/animals" onClick={() => this.setState({ point: 5 })} className={this.state.point === 5 ? "font-bold" : ""}>Animals</Link>
                </li>

                <li className='px-2 cursor-pointer group relative transition-transform hover:scale-105'>
                    <Link to="/family" onClick={() => this.setState({ point: 6 })} className={this.state.point === 6 ? "font-bold" : ""}>Humans</Link>
                </li>

                <li className='px-2 cursor-pointer group relative transition-transform hover:scale-105'>
                    <Link to="/space" onClick={() => this.setState({ point: 7 })} className={this.state.point === 7 ? "font-bold" : ""}>Universe</Link>
                </li>
                <li className='px-2 cursor-pointer group relative transition-transform hover:scale-105'>
                    <Link to="/plants" onClick={() => this.setState({ point: 8 })} className={this.state.point === 8 ? "font-bold" : ""}>Plants</Link>
                </li>
                <li className='px-2 cursor-pointer group relative transition-transform hover:scale-105'>
                    <Link to="/games" onClick={() => this.setState({ point: 9 })} className={this.state.point === 9 ? "font-bold" : ""}>Games</Link>
                </li>
            </div>
        )
    }
}
