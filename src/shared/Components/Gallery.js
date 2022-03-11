import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app
import { Grid } from "@material-ui/core";

import styles from "@/shared/Assets/style/galleryStyle";

const useStyles = makeStyles(styles);

const Gallery = ({ images }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
        {images.map((value, key) => (
          <Grid item key={key}>
            <img
              src={value}
              alt={`Chart ${key + 1}`}
              onClick={() => {
                setPhotoIndex(key);
                setOpen(true);
              }}
              className={classes.images}
            ></img>
          </Grid>
        ))}
      </Grid>

      {open && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={
            photoIndex + 1 >= 0 && photoIndex + 1 < images.length
              ? images[photoIndex + 1]
              : undefined
          }
          prevSrc={
            photoIndex - 1 >= 0 && photoIndex - 1 < images.length
              ? images[photoIndex - 1]
              : undefined
          }
          onMovePrevRequest={() => setPhotoIndex(photoIndex - 1)}
          onMoveNextRequest={() => setPhotoIndex(photoIndex + 1)}
          onCloseRequest={() => setOpen(false)}
        />
      )}
    </div>
  );
};

export default Gallery;
