import React, { useState } from "react";
import Lightbox from "react-image-lightbox";

import { Button, Grid } from "@material-ui/core";

import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

const CustomImgLightbox = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const public_url = process.env.PUBLIC_URL;
  return (
    <Grid item xs={12} sm={6} md={3}>
      <img
        src={props.img}
        alt={props.alt}
        width={props.width}
        height={props.height}
        onClick={() => setIsOpen(true)}
        style={{cursor: "pointer"}}
      />

      {isOpen && (
        <Lightbox
          mainSrc={public_url + props.src}
          onCloseRequest={() => setIsOpen(false)}
          imagePadding={props.padding}
        />
      )}
    </Grid>
  );
};

export default CustomImgLightbox;
