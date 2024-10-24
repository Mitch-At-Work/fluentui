import type { CreatePluginType, EmblaCarouselType, OptionsHandlerType } from 'embla-carousel';
import { carouselClassNames } from '../Carousel';

export type PointerEventPluginOptions = {
  onSelectViaDrag: (event: PointerEvent | MouseEvent, index: number) => void;
};

export type PointerEventPlugin = CreatePluginType<{}, PointerEventPluginOptions>;

export function pointerEventPlugin(options: PointerEventPluginOptions): PointerEventPlugin {
  let emblaApi: EmblaCarouselType;
  let pointerEvent: PointerEvent | MouseEvent | undefined;

  function documentDownListener(event: PointerEvent | MouseEvent) {
    const targetDocument = emblaApi.containerNode().ownerDocument;

    if (event.target) {
      const targetNode = event.target as Element;
      if (targetNode.classList.contains(carouselClassNames.root) || emblaApi.containerNode().contains(targetNode)) {
        pointerEvent = event;
      }
    }

    targetDocument.removeEventListener('mousedown', documentDownListener);
    targetDocument.removeEventListener('pointerdown', documentDownListener);
  }

  function pointerUpListener() {
    const targetDocument = emblaApi.containerNode().ownerDocument;

    targetDocument.addEventListener('mousedown', documentDownListener);
    targetDocument.addEventListener('pointerdown', documentDownListener);
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
    emblaApi.on('select', selectListener);

    const targetDocument = emblaApi.containerNode().ownerDocument;
    targetDocument.addEventListener('mousedown', documentDownListener);
    targetDocument.addEventListener('pointerdown', documentDownListener);
  }

  function destroy(): void {
    emblaApi.off('pointerUp', pointerUpListener);
    emblaApi.off('select', selectListener);
  }

  return {
    name: 'pointerEvent',
    options,
    init,
    destroy,
  };
}
