import { Fragment, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Alert from '@mui/material/Alert';
import axios from 'axios'


const IMAGES_SRC = "https://jsonplaceholder.typicode.com/albums/1/photos"


function Photo() {
  /**
  * Function component handling the view of a single image.
  */
  let params = useParams();
  const photoId = parseInt(params.photoId, 10);
  const [image, setData] = useState(null);

  useEffect(() => {
    // getimage from the given photo id.
    // Sets an error message if the id is not valid
    axios.get(IMAGES_SRC).then(response => {
        if (photoId < 0 || photoId >= response.data.length) {
          setData({"error": "Image not found. Index out of bounds."})
        } else {
          setData(response.data[photoId - 1]);
        }
      }).catch(error => {
        console.log(error)
        setData({"error": error});
      })
  }, []);

  if(!image) {
    // Waiting message
    return (<span>loading picture {photoId}...</span>);
  } else if (image.error) {
    // Error message if photo not found
    return (<Alert severity="error"> {image.error} </Alert>);
  } else {
    // Return a full image. Displaying the photoId.
    return (
      <Fragment>
        <h2> Picture #{ photoId } </h2>
        <img
          src={image.url}
          srcSet={image.url}
          alt={image.title}
          loading="lazy"
        />
      </Fragment>
    );
  }
}

export default Photo;
