import { Component, OnInit } from '@angular/core';

declare var Swiper: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	title = 'app works!';
	config: Object = {
			pagination: '.swiper-pagination',
			paginationClickable: true,
			nextButton: '.swiper-button-next-modif',
			prevButton: '.swiper-button-prev',
			spaceBetween: 30,
			buttonDisabledClass: '.my-swiper-button-disabled'
		};  
  
  ngOnInit() {
  }
  
  private selectOrder(event) {

    alert("button clicked");
  }  
  
}
