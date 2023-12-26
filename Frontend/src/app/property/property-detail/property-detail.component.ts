import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  standalone:true,
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css'],
  imports:[RouterLink]
})
export class PropertyDetailComponent implements OnInit {
  public propertyId!: number;
  constructor(private route:ActivatedRoute,private router:Router) {


   }

  ngOnInit() {
    // this.propertyId=Number(this.route.snapshot.params["id"]);
    this.propertyId= + this.route.snapshot.params["id"];  // by using + we can directly parse value to number
      // above line will be initialize once component renendered

      // this will be called whenever there will be change in parameter 
      // routerLink if used for same component which is already rendered will not 
      // initialize the compnent again for that we have to subscribe the params observable
      this.route.params.subscribe(
        (params)=>{
          this.propertyId=+params['id'];
        }
      );

  }
  onSelectNext(){
    this.propertyId+=1;
    // absolute path
     this.router.navigate(["property-detail",this.propertyId]);

     //relative path  
    //this.router.navigate(["/property-detail/",this.propertyId],{"relativeTo":this.route});
  }

}
