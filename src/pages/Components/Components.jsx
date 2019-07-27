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

//import Dropzone from 'react-dropzone';
import UploadImg from './UploadImg.jsx';


class Components extends React.Component {

  onDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
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
                <UploadImg>
                </UploadImg>
              </GridItem>
            </GridContainer>
          </div>

        </Parallax>
        

      </div>
    );
  }
}

export default withStyles(componentsStyle)(Components);
