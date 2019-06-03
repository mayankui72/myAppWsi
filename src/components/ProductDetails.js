import React, { Component } from 'react';
import Carousal from './Carousal';

class ProductDetails extends Component {
  constructor(props) {
    super(props);  
    this.state = {
      showImgOverlay: false
    }  
  }


onImgClick = () => {
  this.setState({showImgOverlay: true});
}

hidePopUp = () => {
  this.setState({showImgOverlay: false});
}



  render() {
    console.log('props---', this.props);
    const { name } = this.props;
    const {href, width, height} = this.props.hero;
    const {high, low} = this.props.priceRange.selling;
    const {showImgOverlay} = this.state;

    return (
      <div className="products-item">
       <div className="product">
        <img src={href} width={width} onClick={this.onImgClick}
          alt="product icon" height={height}/>          
          <p>{name}</p>
          <p> price range :: {low}-{high}</p>
        </div>

        {showImgOverlay && this.renderOverLay()}

      </div>
    );
  }

  renderOverLay = () => {
    const {images} = this.props;
    return (<div className="modal-open">
            <div className="modal">
            <div className="modal-header">
              <button className="close" onClick={this.hidePopUp}> <span>X</span></button>
            </div>
            <div className="modal-body">
              <Carousal imageList={images} />
            </div>
            <div className="modal-footer">
              <button onClick={this.hidePopUp}>Close</button>
            </div>
              
         </div>
         </div>)
  }


}

export default ProductDetails;