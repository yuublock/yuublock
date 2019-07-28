import React from "react";
import axios from "axios";

const imgStyle = {
  height: '20%',
  width: '40%',
};

class ImgDisplay extends React.Component {
  constructor(props) {
    super(props);
    
  }
  render () {
    return (
            <div>
                {this.props.files.map(
                  image => {
                    let url = URL.createObjectURL(image)
                    console.log(url)
                    return <img style={imgStyle} alt="" key={image.size} src={url} />
                  }

                  )}
            </div>
           )
  }
  
   
}

export default ImgDisplay;
