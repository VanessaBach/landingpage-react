import styles from './Carousel.module.css';
import Carousel from 'react-elastic-carousel';
import Item from './Item';
import { Banner } from './Banner';



export function  CarouselBanner() {
  return(
    <div className={styles.item}>
      <Carousel itemsToShow={1}>
        <Item><Banner/></Item>
        <Item><Banner/></Item>
        <Item><Banner/></Item>
        <Item><Banner/></Item>
      </Carousel>
    </div>

  );

}