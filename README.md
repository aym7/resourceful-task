# Frontend Developer Test Submission

This project uses the following: ReactJS, React-Router, MaterialUI, axios.

## Execute and launch tests

Go to acollange directory and run the following:
```
npm start
```
You then should be able to access the application through [http://localhost:3000](http://localhost:3000).


Sadly, no tests were made. However, the command to launch the tests is:
```
npm test
```

When the application is launched, three links are displayed (Album, Uploader and Authentication UX), each linking to a different part of the application.

## Album

[http://localhost:3000/album](http://localhost:3000/album)

Display of a photo album reading the items from https://jsonplaceholder.typicode.com/albums/1/photos.

The photos are rendered in a 12 column grid.

Clicking on a photo switch to the single photo view. The uri is formatted as follow : http://localhost:3000/photo/`<photo_id>`. An error message is displayed if the photo was not found.

## Uploader

[http://localhost:3000/uploader](http://localhost:3000/uploader)

Display a form with a single file input accepting mp4 videos lower than 50MB.

## Authentication UX

[http://localhost:3000/authenticationux](http://localhost:3000/authenticationux)

Display the example explanations for the required application.


