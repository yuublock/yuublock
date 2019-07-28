import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "gatsby";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

import axios from "axios";
import UploadImg from './UploadImg.jsx';
import ImgDisplay from './ImgDisplay.jsx'


class Components extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      files: [],
      result: ""
    }    
  }

  onDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
  }

  onPreviewDrop = (files) => {
    //console.log('check', files[0])

    this.setState({
      files: this.state.files.concat(files),
    });
  }

  componentDidMount() {
    let myRequest = {}
    // fetch("https://api.yuuvis.io/dms/objects/59408323-3063-4217-9ca7-661519b08b4a/contents/file", {
    //         method: "GET",
    //         mode: "cors",
    //         headers: {
    //           "Ocp-Apim-Subscription-Key": "e8992fd3dc5b4dfa9ac12a8ca9af5e5d"
    //           "Content-Type: application/x-www-form-urlencoded"
    //         },
            
    //     })
    let url = "https://api.yuuvis.io/dms/objects/59408323-3063-4217-9ca7-661519b08b4a/contents/file";
    let options = {
      method: 'GET',
      headers: {
        "Ocp-Apim-Subscription-Key": "fc6603727a544a4daaf1827a5d651afb"
      }
    }
    fetch(url, options)
        .then(function(data) {
            //alert("success");
            console.log('first', data);
            return data.body
        })
        .then(response => {
          console.log('sanity', response);
          const reader = response.getReader();
          return new ReadableStream({
          start(controller) {
          return pump();
          function pump() {
        return reader.read().then(({ done, value }) => {
          // When no more data needs to be consumed, close the stream
          if (done) {
            controller.close();
            return;
          }
          // Enqueue the next data chunk into our target stream
          controller.enqueue(value);
          return pump();
        });
      }
    }  
  })
})
        .then(stream => new Response(stream))
        .then(response => response.blob())
        .then(blob => {
               console.log('in', blob)
               // let hexToBase64 = (str) => {

               //   return btoa(String.fromCharCode.apply(null, str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));
               //  }
               let url = `data:image/jpeg,${blob}`;
                // let url = "data:image/jpeg;base64," + hexToBase64(blob)
                this.setState({ result: url })
                console.log("execute", this.state.result)
            })

        
  };


  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          brand="Faceblock"
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/bg4.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Faceblock</h1>
                  <h3 className={classes.subtitle}>
                    A data privacy application
                  </h3>
                </div>
              </GridItem>
              <GridItem>
                <UploadImg onDrop={this.onPreviewDrop}>
                </UploadImg>
              </GridItem>
            </GridContainer>
            <ImgDisplay files={this.state.files}>
            </ImgDisplay>
          </div>
          <div className="showcase">
            <img src={this.state.result} />
          </div>

        </Parallax>
        

      </div>
    );
  }
}

export default withStyles(componentsStyle)(Components);
