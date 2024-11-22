"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";

const EmblaCarousel = () => {
  // EmblaCarousel
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    containScroll: false,
    align: "center",
    startIndex: 0,
  },[Fade(), Autoplay({ playOnInit: true, delay: 5000 })]);
  // Render
  return (
    <div className={ "embla__viewport overflow-hidden" } ref={ emblaRef }>
      <div className={ "embla__container" }>
        <Image 
          src={ "/sec00-sign01.jpg"} 
          alt={ "" }
          width={ 750 }
          height={ 1050 }
        />
        <Image 
          src={ "/sec00-sign01.jpg"} 
          alt={ "" }
          width={ 750 }
          height={ 1050 }
        />
        <Image 
          src={ "/sec00-sign01.jpg"} 
          alt={ "" }
          width={ 750 }
          height={ 1050 }
        />
      </div>
    </div>
  );
};
export default EmblaCarousel;