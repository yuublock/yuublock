import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// import { Link } from "gatsby";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
// import HeaderLinks from "components/Header/HeaderLinks.jsx";
// import SectionBasics from "./Sections/SectionBasics.jsx";
// import SectionNavbars from "./Sections/SectionNavbars.jsx";
// import SectionTabs from "./Sections/SectionTabs.jsx";
// import SectionPills from "./Sections/SectionPills.jsx";
// import SectionNotifications from "./Sections/SectionNotifications.jsx";
// import SectionTypography from "./Sections/SectionTypography.jsx";
// import SectionJavascript from "./Sections/SectionJavascript.jsx";
// import SectionCarousel from "./Sections/SectionCarousel.jsx";
// import SectionCompletedExamples from "./Sections/SectionCompletedExamples.jsx";
// import SectionLogin from "./Sections/SectionLogin.jsx";
// import SectionExamples from "./Sections/SectionExamples.jsx";
// import SectionDownload from "./Sections/SectionDownload.jsx";

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

import axios from "axios";
import UploadImg from './UploadImg.jsx';
import ImgDisplay from './ImgDisplay.jsx';
import StaticImg from './StaticImg.jsx'

const divStyle = {
  'position': 'relative'
  //'display': 'inline-block'
 
};

const mainStyle = {
   'left': '-100px',
   'width': '50%',
   'float': 'right',
   'position': 'relative'
  //'text-align': 'center' 
 
};

class Components extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      files: [],
      showcase: "./unknown.jpg"
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
    
    //console.log('flag', process.env.GATSBY_YKEY)

    let url = "https://api.yuuvis.io/dms/objects/{}/contents/file";
    let options = {
      method: 'GET',
      headers: {
        "Ocp-Apim-Subscription-Key": process.env.GATSBY_YKEY
      }
    }
    fetch(url, options)
        .then(function(data) {
            //alert("success");
            //console.log('first', data);
            return data.body
        })
        .then(response => {
          //console.log('sanity', response);
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
               
            })

        
  };


  handleClose = (e) => {
    const index = e.target.parentElement.getAttribute('datakey')
    const { files } = this.state
    this.setState({
      files: files.slice(0,index).concat(files.slice(index+1))
    })
  }

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
            <GridContainer justify="center" direction="column" alignItems="center" >
              <GridItem item xs={12} md={8}>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Faceblock</h1>
                  <h3 className={classes.subtitle}>
                    A data privacy application
                  </h3>
                </div>
              </GridItem>
              <GridItem item xs={12} md={8}>
                <UploadImg onDrop={this.onPreviewDrop}>
                </UploadImg>
              </GridItem>
            </GridContainer>
            <ImgDisplay handleClose={this.handleClose} files={this.state.files}>
            </ImgDisplay>
          </div>
          <div className="showcase" style={mainStyle}>
            <StaticImg style={divStyle} handleClose={this.handleClose} showcase={this.state.showcase}>
            </StaticImg>
          </div>

        </Parallax>
        

        <div className={classNames(classes.main, classes.mainRaised)}>
          {/* <SectionBasics />
          <SectionNavbars />
          <SectionTabs />
          <SectionPills />
          <SectionNotifications />
          <SectionTypography />
          <SectionJavascript />
          <SectionCarousel />
          <SectionCompletedExamples />
          <SectionLogin /> */}
          {/* <GridItem md={12} className={classes.textCenter}>
            <Link to={"/login-page"} className={classes.link}>
              <Button color="primary" size="lg" simple>
                View Login Page
              </Button>
            </Link>
          </GridItem> */}
          {/* <SectionExamples /> */}
          {/* <SectionDownload /> */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Components);
