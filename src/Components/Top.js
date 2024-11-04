import React, { Component } from 'react'

export default class Top extends Component {
    state = {
        imagesTop: []
    }
    async componentDidMount() {
        const responce = await fetch(`https://api.unsplash.com/search/photos/?query=${this.props.content}&client_id=fI-PZcd0EazIUK55w6XMvXeCF3zjeUvFN8_ojGGzKxg&per_page=15&page=2`);
        const result = await responce.json()
        this.setState({
            imagesTop: result.results
        });
        // console.log(this.state.imagesTop);

    }
    render() {
        return (
            <>
                <div className='max-w-[1300px] w-full mx-auto flex flex-col gap-3'>
                    <h2 className='font-bold text-2xl text-slate-600'>Top PhotoGrapher with there Images</h2>
                    <div className="collection grid grid-cols-4 gap-4">
                        {
                            this.props.element.map((ele, index) => {
                                return (
                                    ele.user.portfolio_url && <div key={index} className="cart overflow-hidden w-full rounded-md shadow-sm px-2 py-3 bg-[#f2f2f2] flex flex-col">
                                        <div className="profie flex gap-2 items-center">
                                            <a href={ele.user.profile_image.medium} target='_blank' rel='noreferrer' className='h-[45px] rounded-full overflow-hidden block w-[45px]'>
                                                <img src={ele.user.profile_image.medium} className='object-contain w-full object-center h-full' alt="" />
                                            </a>
                                            <div className="profile-info flex flex-col text-[13px]">
                                                <p className='font-bold'>{ele.user.name}</p>
                                                <span>Profile Info : <br /> <a className='text-blue-800 hover:underline' href={ele.user.portfolio_url} rel='noreferrer' target='_blank'>
                                                    {ele.user.portfolio_url.slice(0, 20).concat("...")}</a></span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <h2 className='font-bold text-2xl text-slate-600'>Beautifull Images Created by Best Photographers</h2>
                    <div className="collection-images max-w-[1300px] w-full mx-auto grid grid-cols-5 gap-5">
                        {this.state.imagesTop.map((element, index) => {
                            return (
                                element.user.portfolio_url && element.created_at && <div key={index} className="item overflow-hidden flex flex-col w-full bg-[#f2f2f2] rounded-sm shadow-sm">
                                    <a href={element.urls.regular} target='_blank' rel='noreferrer' className='cursor-pointer block w-full max-h-[175px] h-full'><img src={element.urls.regular} className='w-full h-full object-cover object-center' alt="" /></a>
                                    <div className="details_of_images flex flex-col px-2 py-3">
                                        <p><span className='text-[13px] font-medium'>Created By <br /> </span><span className='font-bold'>{element.user.name}</span></p>
                                        <p className='text-[11px] font-medium'>Created on {element.created_at.slice(0, 10)}</p>
                                        <p className='text-[11px] font-medium'>Last Updated on {element.updated_at.slice(0, 10)}</p>

                                        <p><span className='text-[13px]'>for more info please visit :</span> <br />
                                            <a className='text-[12px] text-blue-800 hover:underline' href={element.user.portfolio_url} target='_blank' rel='noreferrer'>{element.user.portfolio_url.slice(0, 31) + "..."}</a>
                                        </p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>

            </>
        )
    }
}
