import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import "./App.css"
import LoadingBar from 'react-top-loading-bar'
import Collection from './Components/Collection'
import Images from './Components/Images'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom"
export default class App extends Component {
  state = {
    progress: 0,
    userData: ""
  }
  render() {
    return (
      <>
        <Router>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <Navbar name="Deep" changeData={e => this.setState({ userData: e })} />
          <Collection />
          <Routes>
            <Route exact path='/' element={<Images element="mountain" userData={this.state.userData} key={0} setProgress={(n) => this.setState({ progress: n })} />} />
            <Route exact path='/mountain' element={<Images element="mountain" userData={this.state.userData} key={1} setProgress={(n) => this.setState({ progress: n })} />} />
            <Route exact path='/river' element={<Images element="river" userData={this.state.userData} key={2} setProgress={(n) => this.setState({ progress: n })} />} />
            <Route exact path='/forest' element={<Images element="forest" userData={this.state.userData} key={3} setProgress={(n) => this.setState({ progress: n })} />} />
            <Route exact path='/snow  ' element={<Images element='snow' userData={this.state.userData} key={4} setProgress={(n) => this.setState({ progress: n })} />} />
            <Route exact path='/nature' element={<Images element="nature" userData={this.state.userData} key={5} setProgress={(n) => this.setState({ progress: n })} />} />
            <Route exact path='/animals' element={<Images element="animals" userData={this.state.userData} key={6} setProgress={(n) => this.setState({ progress: n })} />} />
            <Route exact path='/family' element={<Images element="family" userData={this.state.userData} key={7} setProgress={(n) => this.setState({ progress: n })} />} />
            <Route exact path='/space' element={<Images element="space" userData={this.state.userData} key={8} setProgress={(n) => this.setState({ progress: n })} />} />
            <Route exact path='/plants' element={<Images element="plants" userData={this.state.userData} key={9} setProgress={(n) => this.setState({ progress: n })} />} />
            <Route exact path='/games' element={<Images element="games" userData={this.state.userData} key={10} setProgress={(n) => this.setState({ progress: n })} />} />
          </Routes>
          <Footer />
          {/* <Images /> */}
        </Router>
      </>
    )
  }
}
