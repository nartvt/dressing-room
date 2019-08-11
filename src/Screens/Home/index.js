import React, { Component } from 'react';
import Header from '../../Layouts/Header';
import Tabs from './Tabs';
import Products from './Products';
import '../../Assets/css/style.css';
import Model from './Model';
import Footer from '../../Layouts/Footer';

class Home extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='w-100 '>
            <Header />
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <Tabs />
            <Products />
          </div>
          <div className='col-6'>
            <Model />
          </div>
        </div>
        <div className='row'>
          <div className='w-100 mb-4'>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;