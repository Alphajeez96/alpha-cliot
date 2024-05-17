export interface Slide {
  id: string;
  text: string;
}

export interface SlideOptions {
  autoplay: boolean;
  interval: number;
  rewind: boolean;
  perMove: number;
  perPage: number;
  pagination: boolean;
  arrows: boolean;
  width: string;
  autoWidth: boolean;
  gap: string;
}
