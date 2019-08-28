import {Meta, MetaDefinition, Title} from '@angular/platform-browser';
import {Injectable} from '@angular/core';
import {Product} from '../../api/models/product';
import {URLService} from './url.service';

@Injectable({
  providedIn: 'root'
})
export class SEOService {
  private titlePrefix = 'Chaud Marais';

  constructor(private title: Title, private meta: Meta, private url: URLService) {
  }

  private setTag(tag: MetaDefinition, selector: string) {
    const existingTag = this.meta.getTag(selector);

    if (existingTag === null) {
      this.meta.addTag(tag, true);
    } else {
      this.meta.updateTag(tag, selector);
    }
  }

  private setOGProperty(ogProperty: string, content: string) {
    this.setTag({
      property: ogProperty,
      content
    }, `property="${ogProperty}"`);
  }

  setTitle(newTitle: string, usePrefix: boolean = true) {
    let finalTitle = '';

    if (usePrefix) {
      finalTitle += this.titlePrefix;

      if (newTitle) {
        finalTitle += ' - ';
      }
    }

    finalTitle += newTitle;
    this.title.setTitle(finalTitle);
  }

  setDescription(newDescription: string) {
    newDescription = newDescription.replace(/\n+/g, '\n').split('\n').join('. ');
    this.setTag({name: 'description', content: newDescription}, 'name=description');
  }

  configureForProduct(product: Product) {
    this.setTitle(`${product.name}-${product.type}`);
    this.setDescription(product.description);
    this.setOGProperty('og:locale', 'fr_FR');
    this.setOGProperty('og:title', `${product.name}-${product.type}`);
    this.setOGProperty('og:url', this.url.product(product));
    this.setOGProperty('og:image', product.image_first);
  }
}
