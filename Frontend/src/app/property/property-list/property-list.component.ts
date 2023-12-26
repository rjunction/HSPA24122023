import { Component, numberAttribute } from '@angular/core';
import { PropertyCardComponent } from "../property-card/property-card.component";
import { CommonModule } from '@angular/common';
import { HousingService } from '../../services/housing.service';
import { IProperty } from '../IProperty.interface';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-property-list',
    standalone: true,
    templateUrl: './property-list.component.html',
    styleUrl: './property-list.component.css',
    imports: [PropertyCardComponent,CommonModule]
   // providers:[HousingService]
})
export class PropertyListComponent {
  properties: Array<IProperty> = [];

constructor(private housing:HousingService,private route:ActivatedRoute) {
}
ngOnInit(): void {

  let SellRent:number=1

  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  // this.http.get("data/properties.json").subscribe(
  //   data=>{this.properties=data}
  // );
  if(this.route.snapshot.url.toString()=="rent-property")
    SellRent=2;

  this.housing.getAllProperties(SellRent).subscribe(
    data=>{
      this.properties=data;
      console.log("Url is "+this.route.snapshot.url.toString());
    },
    error=>{console.log(error)}
  );
}
 
}
