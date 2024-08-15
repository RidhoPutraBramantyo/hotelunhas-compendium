import React, { useCallback } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  )

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onNavButtonClick)

  return (
    <section style="max-w-[48rem] mx-auto --slide-height[19rem] --slide-spacing[0.5rem] --slide-size[25%]"">
      <div style="flex touch-pan-y touch-pinch-zoom -ml-[calc(var(--slide-spacing) * 1)]" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div style="flex-none min-w-0 pl-[var(--slide-spacing)] translate-transform" key={index}>
              <div style="box-shadow-inner rounded-full text-[4rem] font-bold flex items-center justify-center h-[var(--slide-height)] select-none">{index + 1}</div>
            </div>
          ))}
        </div>
      </div>

      <div style="grid grid-cols-[auto_1fr] gap-[1.2rem] mt-[1.8rem]">
        <div style="grid grid-cols-2 gap-[0.6rem] items-center">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div style="flex flex-wrap justify-end items-center -mr-[calc((2.6rem - 1.4rem) / 2)]">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
