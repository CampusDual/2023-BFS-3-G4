import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community-home',
  templateUrl: './community-home.component.html',
  styleUrls: ['./community-home.component.css']
})
export class CommunityHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getImagePath(communityName: string): string {
    // Formatear nombres de las imagenes de ciudades.
    const formatName = (name: string) => {
        // Obviar las tildes y otros caracteres especiales
        name = name.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        // Reemplaza los múltiples espacios con uno solo
        name = name.replace(/\s+/g, ' ');
        // Reemplaza los espacios y caracteres no alfanuméricos por guiones bajos
        return name.toLowerCase().replace(/[\s\W]+/g, '_');
    };

    return `assets/images/community_image/${formatName(communityName)}.png`;

  }

  // Método para imagen de Todas las ciudades
  getImageAllComumunity(imageName: string): string {
    return `assets/images/community_image/${imageName}.png`;
  }

}
