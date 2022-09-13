import styles from './Carousel.module.css';
import Carousel from 'react-elastic-carousel';
import Item from './Item';
import { Banner } from './Banner';
import { Banner2 } from './Banner2';
import { Banner3 } from './Banner3';



export function  CarouselBanner() {
  return(
    <div className={styles.item}>
      <Carousel itemsToShow={1}>
        <Item><Banner/></Item>
        <Item><Banner2/></Item>
        <Item><Banner3/></Item>
      </Carousel>
    </div>

  );

}