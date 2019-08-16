import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertybagService {

  get showImage(): boolean {
    console.log('PropertybagService-> get: ' + this.localshowImage);
    return this.localshowImage;
  }

  set showImage(showImage: boolean) {
    console.log('PropertybagService-> set: ' + showImage);
    this.localshowImage = showImage;
  }

  private localshowImage: boolean;

  constructor() {
    this.localshowImage = false;
  }
}
