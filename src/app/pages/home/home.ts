import { Component } from '@angular/core';
import { Servicios } from "../servicios/servicios";
import { Contactos } from "../contactos/contactos";
import { Hero } from "../../components/hero/hero";
import { Portafolio } from "../portafolio/portafolio";
import { Tecnologia } from "../tecnologia/tecnologia";

@Component({
  selector: 'app-home',
  imports: [Servicios, Contactos, Hero, Portafolio, Tecnologia],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
