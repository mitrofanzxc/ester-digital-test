import React from "react";

import { GalleryImg } from "../../shared/GalleryImg";

import "./Gallery.scss";

const Gallery = () => {
  return (
    <div>
      <section className="outer__container">
        <div className="inner__container">
          <h1 className="h1">Virtual Tour</h1>
          <div className="gallery__wrapper">
            {GalleryImg.map((GalleryImgItem) => {
              return (
                <div className={GalleryImgItem.classNameDiv}>
                  <img
                    className={GalleryImgItem.classNameImg}
                    src={GalleryImgItem.img}
                    alt={GalleryImgItem.alt}
                  />
                  <h2 className="h2">{GalleryImgItem.header}</h2>
                  <h3 className="h3">{GalleryImgItem.descriptionFirst}</h3>
                  <h4 className="h4">{GalleryImgItem.descriptionSecond}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export { Gallery };
