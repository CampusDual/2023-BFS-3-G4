import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { on } from 'cluster';
import { OntimizeService } from 'ontimize-web-ngx';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public numberOfSentNotRead: number;
  public numberOfReceivedNotRead: number;
  public numberOfTotalNotRead: number;

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private ontimizeServiceUsers: OntimizeService
  ) {
    this.ontimizeServiceUsers.configureService(this.ontimizeServiceUsers.getDefaultServiceConfiguration('users'));
  }

  ngOnInit() {

    this.ontimizeServiceUsers.query({}, ['message'], 'read_host_false').subscribe(
      res => {

        if (res.data && res.data.length) {
          this.numberOfReceivedNotRead = res.data.length;

        } else {
          this.numberOfReceivedNotRead = 0;
        }
        console.log(this.numberOfReceivedNotRead);


      });

      this.ontimizeServiceUsers.query({}, ['message'], 'read_traveler_false').subscribe(
        res => {
          if (res.data && res.data.length) {
            this.numberOfSentNotRead = res.data.length;
  
          } else {
            this.numberOfSentNotRead = 0;
          }
          console.log(this.numberOfSentNotRead);
  
          
          this.numberOfTotalNotRead = this.numberOfReceivedNotRead + this.numberOfSentNotRead;
          console.log(this.numberOfTotalNotRead);
     
        });

       




  }


  ngAfterViewInit() {


  }

  navigate() {
    this.router.navigate(['../', 'login'], { relativeTo: this.actRoute });
  }

  getImagePath(townName: string): string {
    // Formatear nombres de las imagenes de ciudades.
    const formatName = (name: string) => {
      // Obviar las tildes y otros caracteres especiales
      name = name.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      // Reemplaza los múltiples espacios con uno solo
      name = name.replace(/\s+/g, ' ');
      // Reemplaza los espacios y caracteres no alfanuméricos por guiones bajos
      return name.toLowerCase().replace(/[\s\W]+/g, '_');
    };

    return `assets/images/towns_image/${formatName(townName)}.png`;
  }

}
