import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'thumb'
})
export class ThumbPipe implements PipeTransform {

  transform(imageUrl: string, size: number): string {
    if (!imageUrl) {
      return '';
    }

    return imageUrl
      .replace('/normalized/', '/thumbs/')
      .replace('.jpg', `-x${size}.jpg`);
  }

}
