import {Component, Fragment} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const IMAGES_SRC = "https://jsonplaceholder.typicode.com/albums/1/photos"

class Album extends Component {
  /** Main Photo album component.
   * Loads pictures from https://jsonplaceholder.typicode.com/albums/1/photos.
   * Pictures are displayed as a 12 column grid using MaterialUI's ImageList.
   * Each Picture can be clicked and accessed.
  */
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  componentDidMount() {
    // Get the images and load them
    axios.get(IMAGES_SRC)
      .then(response => {
        console.log(response);
        this.setState({images: response.data});
      }).catch(error => {
        console.log(error);
      })
  }

  render() {
    const { images } = this.state;
    // handle if images returned nothing
    if (images.length <= 0) {
      return (<em> Loading... </em>);
    }
    return (
      <Fragment>
        <h3> Photo Album on <a href={IMAGES_SRC}>image source</a> </h3>
        <ImageList cols={12}>
          {images.map((image) =>
            (
            <Link
              to={`/photo/${image.id}`}
              key={image.id}
            >
              <ImageListItem key={image.url}>
                  <img
                    src={image.url}
                    srcSet={image.url}
                    alt={image.title}
                    loading="lazy"
                  />
              </ImageListItem>
            </Link>
        ))}
        </ImageList>
      </Fragment>
    );
  }
}

export default Album;
