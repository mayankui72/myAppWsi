import React from 'react';
class Carousal extends React.Component {

  constructor(props) {
    super(props);  
    this.state = {
          currentImageInd: 0
    }  
  }


  leftButtonClick = () => {
 const {currentImageInd} = this.state;
 const { imageList } = this.props;
    const currentInd = currentImageInd == 0 ? imageList.length - 1 : currentImageInd -1;
    this.setState({currentImageInd: currentInd})
  }

  rightButtonClick = () => {
    const {currentImageInd} = this.state;
    const { imageList } = this.props;
    const currentInd = currentImageInd == imageList.length - 1 ? 0 : currentImageInd + 1;
     this.setState({currentImageInd: currentInd})
  }

	render(){
		const {imageList} = this.props;
    const { currentImageInd } = this.state;
		return (
    <div className="carousal-container">
      <div className="left-btn-section">
        <a className="prev" id="left" onClick={this.leftButtonClick}>❮</a>
      </div>



      <div className="item-container">
        <img src={imageList[currentImageInd].href} alt="product image" />
      </div>
      


      <div className="right-btn-section">
        <a className="next" id="right" onClick={this.rightButtonClick}>❯</a>
      </div>
      

    </div>
  );
	}
}

export default Carousal;
