import React from "react";
// import Dropzone from 'react-dropzone';
// import ImgDisplay from './ImgDisplay.jsx';
// import $ from 'jquery'

const divStyle = {
  height: '90%',
  width: '15%',
  backgroundColor: 'white',
 
};

class UploadImg extends React.Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendDataToPythonServer = this.sendDataToPythonServer.bind(this);
  }
  sendDataToPythonServer(file) {
    let formData = new FormData();
    formData.append('file', file.file.files[0])
    for (let key in file) {
      formData[key] = file[key];
    }
      
    let url = 'http://0.0.0.0:5001/usemetoupload';
    var request = new XMLHttpRequest();
    request.open('POST', url)
    request.send(formData)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.sendDataToPythonServer(e.target);
  }

  render() {
    return(
      <div style={divStyle} className="text-center mt-5">
        <form onSubmit={this.handleSubmit} method="POST" enctype="multipart/form-data">
          <input onChange={this.onPreview} type="file" name="file" />
          <input type="submit" value="Upload"/>
        </form>
      </div>
    );
  }
}


export default UploadImg;
