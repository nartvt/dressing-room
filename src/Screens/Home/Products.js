import React, { Component } from 'react';
import ProductItem from './ProductItem';
import { connect } from 'react-redux';

class Products extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          {this._renderProducerItem(this.props.products)}
        </div>
      </div>
    );
  }
  _renderProducerItem = (data = []) => {
    const filterData = data.filter(item => item.type === this.props.filterByType);
    return filterData.map((prod, i) =>
      <div className='col-4' key={i}>
        <ProductItem prod={prod} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
    filterByType: state.filter.byType
  }
}

export default connect(mapStateToProps)(Products);