import React from "react";

// import withStyles from '@material-ui/core/styles/withStyles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

import FunctionalImage from './unknown.jpg';

const staticImgStyle = {
  height: '100%',
  width: '100%',
};


// const CloseButton = (props) => {
//   return (
//     <div datakey={props.datakey} onClick={props.handleClose} style={{margin: '1px'}}>
//       <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 18 18"><path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/></svg>
//     </div>
//   );
// }


function StaticImg(props) {
    let url = props.showcase;

    return (
    <div>  
            <Card style={{maxWidth: '40vw'}}>
              <CardMedia
                component="img"
                image={FunctionalImage}
                style={staticImgStyle}
                title="faces"
              />
            </Card>
          );
    </div>
  )
  
}

export default StaticImg;