import React, { Component } from 'react';
import { connect } from 'react-redux';
import ConstUtils from '../../Const/ConstUtils';

class Model extends Component {
  styles = {
    bikinitop: {
      width: "250px",
      height: "500px",
      position: "absolute",
      top: "12%",
      left: "22%",
      zIndex: "3"
    },
    topclothes: {
      width: "250px",
      height: "500px",
      background: 'url(./images/allbody/bikini_branew.png)',
      backgroundSize: 'cover',
      position: "absolute",
      top: "12%",
      left: "22%",
      zIndex: "3"
    },
    // Bottom style
    bikinibottom: {
      width: "250px",
      height: "500px",
      position: "absolute",
      top: "12%",
      left: "22%",
      zIndex: "2"
    },
    // Bottom style
    botclothes: {
      width: "250px",
      height: "500px",
      backgroundSize: 'cover',
      position: "absolute",
      top: "14%",
      left: "22%",
      zIndex: "4"
    },
    footleft: {
      width: "25px",
      height: "41px",
      background: 'url("images/allbody/feet_high_leftnew.png")',
      position: "absolute",
      bottom: "6.5%",
      left: "40.4%",
      zIndex: "1"
    },

    footright: {
      width: "25px",
      height: "41px",
      background: 'url("images/allbody/feet_high_rightnew.png")',
      position: "absolute",
      bottom: "6.5%",
      right: "33.3%",
      zIndex: "1"
    },
    body: {
      width: 250,
      height: 500,
      background: 'url("images/allbody/bodynew.png")',
      position: 'absolute',
      top: '12%',
      left: '22%'

    },
    head: {
      width: 60,
      height: 77,
      background: 'url("images/model/1000new.png")',
      position: 'absolute',
      top: '5%',
      left: '45.5%',
      zIndex: '1'
    },
    contain: {
      width: 460,
      height: 590,
      margin: '0 auto',
      position: 'relative'
    },
    background: {
      width: 460,
      height: 590,
      margin: '0 auto',
      position: 'relative'
    }
  }
  render() {
    return (
      <div style={this.styles.contain}>
         <div style={this.styles.body}></div>
        <div style={this.styles.head}></div>
        <div style={{ ...this.styles.bikinitop, backgroundImage: `url(${this.props.model.bikinitop})` }}></div>
        <div style={{ ...this.styles.bikinibottom, backgroundImage: `url(${this.props.model.bikinibottom})` }}></div>
        <div style={{ ...this.styles.topclothes, backgroundImage: `url(${this.props.model.topclothes})` }}></div>
        <div style={{ ...this.styles.botclothes, backgroundImage: `url(${this.props.model.botclothes})` }}></div>
        <div style={{ ...this.styles.footleft, backgroundImage: `url(${this.props.model.footleft})`}}></div>
        <div style={{ ...this.styles.footright, backgroundImage: `url(${this.props.model.footright})` }}></div>
      </div>
    );
  }
  componentDidMount() {
    this.props.setDefaultModel({
      topclothes: '/images/clothes/topcloth2.png',
      botclothes: '',
      shoes: '',
      handbags: '',
      necklaces: '',
      background: ''
    })
  }
}

const mapStateToProps = state => {
  return {
    model: state.model
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDefaultModel: (model) => {
      dispatch({
        type: ConstUtils.ACTION.SET_ALL,
        payload: model
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Model);