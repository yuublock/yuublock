import React from "react";

// import withStyles from '@material-ui/core/styles/withStyles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';


const imgStyle = {
  height: '80%',
  width: '80%',
};

const CloseButton = (props) => {
  return (
    <div datakey={props.datakey} onClick={props.handleClose} style={{margin: '1px'}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 18 18"><path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/></svg>
    </div>
  );
}

function ImgDisplay(props) {
    return (
    <div>
      {
        props.files.map((image, key) => {
          console.log(image,'!!!')
          let url = URL.createObjectURL(image)
          console.log(url)
          return (
            <Card key={image.size} style={{maxWidth: '40vw'}}>
              <CardHeader style={{padding:'3px', height: '33px'}} action={<CloseButton datakey={key} handleClose={props.handleClose}/>}/>
              <CardMedia
                component="img"
                image={url}
                style={imgStyle}
                title="faces"
                datatype={key} 
              />
            </Card>
          );
        })
      }
    </div>
  )
  
}

export default ImgDisplay;
