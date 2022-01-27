import {Component, Fragment} from 'react'
import Alert from '@mui/material/Alert';



class Uploader extends Component {
  /** Uploader component handling input of a <50MB mp4 file.
   * Will display an error if the uploaded file does not match the requirements.
  */
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMsg: ""
    }
  }

  handleFileSelected(evt) {
    /** Checks that the file is a video (< 50MB)
    */
    if (evt.target.files.length <= 0) {
      console.log("No file selected");
      return;
    }

    const file = evt.target.files[0];

    if (file.type !== "video/mp4") {
      this.setState({
        hasError: true,
        errorMsg: "Wrong file type, must be mp4."
      });
    } else if (file.size > 50000000) {
      this.setState({
        hasError: true,
        errorMsg: "File larger than 50MB."
      });
    } else {
      console.log("File matches the requirements!");
      this.setState({hasError: false, errorMsg: ""});
    }
  }

  render() {
    return (
      <Fragment>
        <h2> Upload a video mp4 file lower than 50MB </h2>
        <form method="post">
          <label for="video">Select Video to upload:</label>

          {/*Uses the following syntax for onChange to ensure 'this' binding */}
          <input type="file" accept=".mp4, video/mp4"
            id="video" name="video"
            onChange={(e) => this.handleFileSelected(e)}
            /><br/>
            { this.state.hasError && <Alert severity="error"> {this.state.errorMsg} </Alert> }
          <input type="submit"/>
        </form>
      </Fragment>
    );
  }
}

export default Uploader;
