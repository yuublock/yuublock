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

//import Dropzone from 'react-dropzone';
import UploadImg from './UploadImg.jsx';
import ImgDisplay from './ImgDisplay.jsx'


class Components extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      files: [],
      result: []
    }
    this.handlePreview = this.handlePreview.bind(this);
  }

  handlePreview(e) {
    this.setState({
      files: this.state.files.concat(e.target.files[0])
    });
  }

  handleClose = (e) => {
    const index = e.target.parentElement.getAttribute('datakey')
    const { files } = this.state
    this.setState({
      files: files.slice(0,index).concat(files.slice(index+1))
    })
  }

  componentDidMount() {
    console.log(process.env.GATSBY_YKEY)
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
                </div>
              </GridItem>
              <GridItem>
                <UploadImg onPreview={this.handlePreview}>
                </UploadImg>
              </GridItem>
              <GridItem>
                <ImgDisplay onClose={this.handleClose} files={this.state.files} />
              </GridItem>
            </GridContainer>
          </div>
          <div className="showcase">
            
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
          <SectionLogin />
          <GridItem md={12} className={classes.textCenter}>
            <Link to={"/login-page"} className={classes.link}>
              <Button color="primary" size="lg" simple>
                View Login Page
              </Button>
            </Link>
          </GridItem>
          <SectionExamples />
          <SectionDownload /> */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Components);
