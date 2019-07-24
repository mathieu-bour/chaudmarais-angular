import {Component} from '@angular/core';
import {faFacebookSquare, faInstagram} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  facebook = faFacebookSquare;
  instagram = faInstagram;
}
