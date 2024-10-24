import { CreatePluginType, EmblaCarouselType, OptionsHandlerType } from 'embla-carousel';

export type PointerEventPluginOptions = {
  onSelectViaDrag: (event: PointerEvent | MouseEvent, index: number) => void;
};

export type PointerEventPlugin = CreatePluginType<{}, PointerEventPluginOptions>;

export function pointerEventPlugin(options: PointerEventPluginOptions): PointerEventPlugin {
  let emblaApi: EmblaCarouselType;
  let pointerEvent: PointerEvent | MouseEvent | undefined;

  function reinitializeListeners() {
    const sliderRoot = emblaApi.containerNode();
    sliderRoot.removeEventListener('mousedown', documentDownListener);
    sliderRoot.removeEventListener('pointerdown', documentDownListener);
    sliderRoot.addEventListener('mousedown', documentDownListener);
    sliderRoot.addEventListener('pointerdown', documentDownListener);
  }

  function documentDownListener(event: PointerEvent | MouseEvent) {
    const sliderRoot = emblaApi.containerNode();

    console.log('Doc down');
    pointerEvent = event;
    sliderRoot.removeEventListener('mousedown', documentDownListener);
    sliderRoot.removeEventListener('pointerdown', documentDownListener);
  }

  function pointerUpListener() {
    const sliderRoot = emblaApi.containerNode();

    console.log('Doc up');
    sliderRoot.addEventListener('mousedown', documentDownListener);
    sliderRoot.addEventListener('pointerdown', documentDownListener);
  }

  function selectListener() {
    if (pointerEvent) {
      const newIndex = emblaApi.selectedScrollSnap() ?? 0;

      options.onSelectViaDrag(pointerEvent, newIndex);
      pointerEvent = undefined;
    }
  }

  function init(emblaApiInstance: EmblaCarouselType, optionsHandler: OptionsHandlerType): void {
    emblaApi = emblaApiInstance;

    emblaApi.on('pointerUp', pointerUpListener);
    emblaApi.on('pointerDown', documentDownListener);
    emblaApi.on('select', selectListener);
    emblaApi.on('init', reinitializeListeners);
    emblaApi.on('reInit', reinitializeListeners);
  }

  function destroy(): void {
    emblaApi.off('pointerUp', pointerUpListener);
    emblaApi.off('select', selectListener);
    emblaApi.off('init', reinitializeListeners);
    emblaApi.off('reInit', reinitializeListeners);
  }

  return {
    name: 'pointerEvent',
    options,
    init,
    destroy,
  };
}
