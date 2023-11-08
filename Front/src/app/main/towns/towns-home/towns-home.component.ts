import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-towns-home',
  templateUrl: './towns-home.component.html',
  styleUrls: ['./towns-home.component.css']
})
export class TownsHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
