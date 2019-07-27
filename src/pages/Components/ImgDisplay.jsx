import React from "react";
import axios from "axios";

class ImgDisplay extends React.Component {
  constructor(props) {
    super(props);
    
  }
  render () {
    return (
            <div>
                {this.props.files.map(
                  image => {
                    console.log(image);
                    return <img alt="" key={image} src={image} />
                  }

                  )}
            </div>
           )
  }
  
   
}

export default ImgDisplay;
