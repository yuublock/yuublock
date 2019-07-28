import React from "react";
// import axios from "axios";
import Dropzone from 'react-dropzone';
// import ImgDisplay from './ImgDisplay.jsx';


const divStyle = {
  height: '90%',
  width: '15%',
  backgroundColor: 'white',
 
};

function UploadImg(props) {
    return(
      <div style={divStyle} className="text-center mt-5">
        <Dropzone
          onDrop={(files) => props.onDrop(files)}
          accept="image/jpeg, image/png, image/jpg"
        >
          {({getRootProps, getInputProps}) => (

              <div {...getRootProps()}>
                <input {...getInputProps()} />
                Click me to upload a file!
              </div>
          )}
        </Dropzone>
        
      </div>
    )
}


export default UploadImg;
