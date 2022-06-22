import { FC } from 'react';
import { gallery } from '../../shared/gallery';

import './Gallery.scss';

const Gallery: FC = () => {
  return (
    <section className="outer__container">
      <div className="inner__container">
        <h1 className="h1">Virtual Tour</h1>
        <div className="gallery__wrapper">
          {gallery.map(
            ({
              classNameDiv,
              classNameImg,
              img,
              alt,
              header,
              descriptionFirst,
              descriptionSecond,
              id,
            }) => {
              return (
                <div key={id} className={classNameDiv}>
                  <img className={classNameImg} src={img} alt={alt} />
                  <h2 className="h2">{header}</h2>
                  <h3 className="h3">{descriptionFirst}</h3>
                  <h4 className="h4">{descriptionSecond}</h4>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export { Gallery };
