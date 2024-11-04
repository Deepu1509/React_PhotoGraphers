import React, { Component } from 'react'
import Top from './Top';
export default class Images extends Component {
    constructor() {
        super()
        this.state = {
            images: []
        }
    }
    async componentDidMount() {
        const responce = await fetch(`https://api.unsplash.com/search/photos/?query=${this.props.userData || this.props.element}&client_id=fI-PZcd0EazIUK55w6XMvXeCF3zjeUvFN8_ojGGzKxg&per_page=10`);
        this.props.setProgress(100)
        const result = await responce.json()
        this.props.setProgress(0)
        this.setState({
            images: result.results
        });
        const slideImages = document.querySelectorAll(".slide-images ");
        let count = 0
        function left() {
            if (count !== -(slideImages.length - 1)) {
                count--
                moveSlider(count)
            } else {
                count = 0
                moveSlider(count)
            }
        }
        function moveSlider(count) {

            slideImages.forEach((ele) => {
                ele.style.transform = `translateX(${count * 100}%)`
            })
        }
        setInterval(left, 3000)
    }
    render() {
        return (
            <>
                <div className="slider w-full h-[65vh] relative  overflow-hidden mb-4">

                    {this.state.images.map((ele, index) => {
                        return (
                            <div key={index} className='slide-images absolute top-0 w-full h-full' style={{ left: `${100 * index}%` }} id="">
                                <img src={ele.urls.full} alt="" className='absolute top-0 left-0 h-full w-full object-cover ' />
                                <div className='absolute w-full h-full text-white bg-transparent flex flex-col pl-6 pb-6 justify-end'>
                                    <h1 className='font-bold text-4xl'><span className='text-2xl'>Created By</span> <br /> {ele.user.name}</h1>
                                    <p className='text-[13px] w-[50%] my-2'>{ele.user.bio}</p>
                                    <h4>Last Updated on {ele.user.updated_at.slice(0, 10)}</h4>

                                </div>
                            </div>
                        )
                    })}
                </div>
                <Top element={this.state.images} content={this.props.element} />
            </>
        )
    }
}
