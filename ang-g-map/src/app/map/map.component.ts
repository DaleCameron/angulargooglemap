import {Component, OnInit, ViewChild} from '@angular/core';
import { } from '@types/googlemaps';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @ViewChild('gmap') mapElement: any;

  map: google.maps.Map;
  here = {lat: 38.650122, lng: -90.559314}

  constructor() { }

  ngOnInit() {
    const mapProp = {
      center: new google.maps.LatLng(38.650122, -90.559314),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProp);
  }
  showMarker(): void {
    const marker = new google.maps.Marker({position: this.here , map: this.map});
  }

}
