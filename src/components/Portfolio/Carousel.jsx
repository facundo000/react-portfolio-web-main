import classNames from 'embla-carousel-class-names'
import image1 from '../../assets/projectsImg/coffee-blog.webp'
import image2 from '../../assets/projectsImg/blog-cafe-2.webp'
import image3 from '../../assets/projectsImg/blog-cafe-3.webp'
import {
  Carousel,
  CarouselControl,
  CarouselItem,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselSlides,
  CardDescription
} from 'keep-react'
import { useTranslation } from 'react-i18next'
import ReactMarkdown from 'react-markdown'

export const CarouselComponent = () => {
  const [t] = useTranslation("global");
  const functionalityPossible = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjJ2cTZ5ZWMydGk4cm5memV3eThlZmY1NW1iYThvbTIzbjF6ODFkbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jUwpNzg9IcyrK/giphy.gif"
  const images = [image1, image2, image3, functionalityPossible]
  const projectInfo = {
    name: "Coffee Blog",
    deployedLink: "https://sitiodcafe.netlify.app/",
    GitName: "facundo000/Blog_coffee",
    fadeDuration: '1000',
    description: t("portfolio-item-description3"),
    toolsUsed: [
      <div className="bg-zinc-800 rounded-md">
        <div
          className="flex items-center justify-center p-2 cursor-pointer rounded-md text-neutral-500 hover:text-neutral-100 hover:bg-neutral-500 font-medium relative z-[9999999999] data-[tooltip]:after:content-[attr(data-tooltip)] data-[tooltip]:after:mt-2 data-[tooltip]:after:text-sm data-[tooltip]:after:invisible data-[tooltip]:after:scale-50 data-[tooltip]:after:origin-top data-[tooltip]:after:opacity-0 hover:data-[tooltip]:after:visible hover:data-[tooltip]:after:opacity-100 hover:data-[tooltip]:after:scale-100 data-[tooltip]:after:transition-all data-[tooltip]:after:absolute data-[tooltip]:after:bg-white data-[tooltip]:after:top-[calc(100%+4px)] data-[tooltip]:after:left-1/2 data-[tooltip]:after:-translate-x-1/2 data-[tooltip]:after:-z-[1] data-[tooltip]:after:px-2.5 data-[tooltip]:after:py-1 data-[tooltip]:after:min-h-fit data-[tooltip]:after:min-w-fit data-[tooltip]:after:rounded-md data-[tooltip]:after:drop-shadow data-[tooltip]:before:mt-2 data-[tooltip]:before:drop-shadow data-[tooltip]:after:text-center data-[tooltip]:after:text-zinc-800 data-[tooltip]:after:whitespace-nowrap data-[tooltip]:after:text-[10px] data-[tooltip]:before:invisible data-[tooltip]:before:opacity-0 hover:data-[tooltip]:before:visible hover:data-[tooltip]:before:opacity-100 data-[tooltip]:before:transition-all data-[tooltip]:before:bg-white data-[tooltip]:before:[clip-path:polygon(50%_0,0_100%,100%_100%)] data-[tooltip]:before:absolute data-[tooltip]:before:top-full data-[tooltip]:before:left-1/2 data-[tooltip]:before:-translate-x-1/2 data-[tooltip]:before:z-0 data-[tooltip]:before:w-3 data-[tooltip]:before:h-[4px]"
          data-tooltip="HTML5"
        >
          <svg xmlns="http://www.w3.org/2000/svg" role='img' className="w-6 h-6 fill-current stroke-current stroke-0" viewBox="0 0 128 128">
            <path fill="#E44D26" d="M19.037 113.876l-10.005-112.215h109.936l-10.016 112.198-45.019 12.48z"/>
            <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878h-44.937z"/>
            <path fill="#EBEBEB" d="M64 52.455h-18.212l-1.258-14.094h19.47v-13.762h-34.511l.33 3.692 3.382 37.927h30.799zM64 88.198l-.061.017-15.327-4.14-.979-10.975h-13.817l1.928 21.609 28.193 7.826.26-.071z"/>
            <path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zM63.952 24.599v13.762h33.244l.276-3.092.628-6.978.329-3.692z"/>
          </svg>
        </div>
      </div>,
      <div class="bg-zinc-800 rounded-md">
      <div
        class="flex items-center justify-center p-2 cursor-pointer rounded-md text-neutral-500 hover:text-neutral-100 hover:bg-neutral-500 font-medium relative z-[9999999999] data-[tooltip]:after:content-[attr(data-tooltip)] data-[tooltip]:after:mt-2 data-[tooltip]:after:text-sm data-[tooltip]:after:invisible data-[tooltip]:after:scale-50 data-[tooltip]:after:origin-top data-[tooltip]:after:opacity-0 hover:data-[tooltip]:after:visible hover:data-[tooltip]:after:opacity-100 hover:data-[tooltip]:after:scale-100 data-[tooltip]:after:transition-all data-[tooltip]:after:absolute data-[tooltip]:after:bg-white data-[tooltip]:after:top-[calc(100%+4px)] data-[tooltip]:after:left-1/2 data-[tooltip]:after:-translate-x-1/2 data-[tooltip]:after:-z-[1] data-[tooltip]:after:px-2.5 data-[tooltip]:after:py-1 data-[tooltip]:after:min-h-fit data-[tooltip]:after:min-w-fit data-[tooltip]:after:rounded-md data-[tooltip]:after:drop-shadow data-[tooltip]:before:mt-2 data-[tooltip]:before:drop-shadow data-[tooltip]:after:text-center data-[tooltip]:after:text-zinc-800 data-[tooltip]:after:whitespace-nowrap data-[tooltip]:after:text-[10px] data-[tooltip]:before:invisible data-[tooltip]:before:opacity-0 hover:data-[tooltip]:before:visible hover:data-[tooltip]:before:opacity-100 data-[tooltip]:before:transition-all data-[tooltip]:before:bg-white data-[tooltip]:before:[clip-path:polygon(50%_0,0_100%,100%_100%)] data-[tooltip]:before:absolute data-[tooltip]:before:top-full data-[tooltip]:before:left-1/2 data-[tooltip]:before:-translate-x-1/2 data-[tooltip]:before:z-0 data-[tooltip]:before:w-3 data-[tooltip]:before:h-[4px]"
        data-tooltip="CSS"
      >           
      <svg xmlns="http://www.w3.org/2000/svg" role='img' class="w-6 h-6 fill-current stroke-current stroke-0" viewBox="0 0 128 128"><path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"/><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"/><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"/><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"/><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"/><path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"/></svg>
      </div>
    </div>
    ]
  }
  
  return (
    <article className='portfolio__item' data-aos="fade-up" data-aos-anchor=".portfolio__container" data-aos-duration={projectInfo.fadeDuration}>
      <div className="portfolio__item-image">
        <Carousel options={{ loop: false }} plugins={[classNames()]}>
          <CarouselSlides>
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="flex-[0_0_80%] [&:not(.is-snapped)]:opacity-[0.16]"
              >
                <img className="rounded-xl" src={image} alt={`${projectInfo.name} Screenshot ${index + 1}`} />
              </CarouselItem>
            ))}
          </CarouselSlides>
          <CarouselControl>
            <div className="carousel-control-buttons">
              <CarouselPrevButton />
              <CarouselNextButton />
            </div>
          </CarouselControl>
        </Carousel>
      </div>

      <div className="portfolio__item-info">
        <CardDescription style={{color: 'white', padding: '1rem'}}>
          <h3 className='text-2xl font-bold'>{projectInfo.name}</h3>
          <ReactMarkdown>
            {projectInfo.description}
          </ReactMarkdown>
          <br />
          <div className="tools-used">
            {projectInfo.toolsUsed.map((tool, index) => (
              <span key={index} className="tool-icon">{tool}</span>
            ))}
          </div>
        </CardDescription>
      </div>

      <div className="portfolio__item-cta">
        <a className='btn gh' 
          href={`https://github.com/${projectInfo.GitName}`}
          target='_blank'
          rel="noreferrer"
        >GitHub</a>
        <a className='btn btn-primary' 
          href={projectInfo.deployedLink}
          target='_blank'
          rel="noreferrer"
        >{t("portfolio-live-demo-link")}</a>
      </div>
    </article>
  )
}