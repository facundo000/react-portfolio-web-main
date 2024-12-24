import classNames from 'embla-carousel-class-names'
import image1 from '../../assets/projectsImg/coffee-blog.webp'
import image2 from '../../assets/projectsImg/nekode.webp'
import {
  Carousel,
  CarouselButtons,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselSlides,
} from 'keep-react'

export const CarouselComponent = () => {
  const images = [image1, image2]  
  return (
        <Carousel options={{ loop: false }} plugins={[classNames()]}>
<CarouselSlides>
{images.map((image, index) => (
          <CarouselItem
            key={index}
            className="flex-[0_0_80%] [&:not(.is-snapped)]:opacity-[0.16]"
          >
            <img className="rounded-xl" src={image} alt={`Carousel Item ${index + 1}`} />
          </CarouselItem>
        ))}
</CarouselSlides>
<CarouselControl>
<CarouselPrevButton />
<CarouselNextButton />
</CarouselControl>
</Carousel>
    )
}