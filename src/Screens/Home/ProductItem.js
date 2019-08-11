import React, { Component } from 'react';
import { connect } from 'react-redux';
import ConstUtils from '../../Const/ConstUtils';

class ProductItem extends Component {
  render() {
    const { imgSrc_jpg, imgSrc_png, name, type } = this.props.prod;
    return (
      <div className='card'>
        <img src={imgSrc_jpg}
          alt='clothes'
          style={{ width: '100%', height: 280 }} />
        <p>{name}</p>
        <button className='btn btn-info' 
        onClick={() => this.props.setModel(imgSrc_png, type)}>Thu</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setModel: (imgPath, type) => {
      dispatch({
        type: ConstUtils.ACTION.SET_MODEL,
        payload: {
          imgPath: imgPath,
          type: type
        }
      })
    }
  }
}


export default connect(undefined, mapDispatchToProps)(ProductItem);