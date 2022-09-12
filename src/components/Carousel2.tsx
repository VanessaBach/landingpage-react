import LdBanner from '../assets/banner.svg';
import Carousel from 'react-responsive-carousel';
import React from 'react';


var DemoCarousel = React.component {
  render() {
    return (
      <Carousel showArrows={false} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
      <div>
        <img src={LdBanner} alt="" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={LdBanner} alt="" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={LdBanner} alt="" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src={LdBanner} alt="" />
        <p className="legend">Legend 4</p>
      </div>
      <div>
        <img src={LdBanner} alt="" />
        <p className="legend">Legend 5</p>
      </div>
      <div>
        <img src={LdBanner} alt="" />
        <p className="legend">Legend 6</p>
      </div>
    </Carousel>
    );
  };
};

export {DemoCarousel}