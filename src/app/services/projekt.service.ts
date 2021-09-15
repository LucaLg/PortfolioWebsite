import { Injectable } from '@angular/core';
import {Projekt} from '../model/Projekt'
@Injectable({
  providedIn: 'root'
})
export class ProjektService {
  projekte:Projekt[] = [new Projekt("Fahrtenbuch",["Java","Gradle","Git"],"Ein Java Programm, mit dem der Nutzer verschiedene Autofahrten eintragen kann. Dieses Projekt wurde im Rahmen des Software Praktikums in Gruppen entwickelt.","../../assets/img/Fahrtenbuch.png",'https://drive.google.com/file/d/1Awx4fP10oYo1BrSBaPrv0MOUPpNkMWRW/view?usp=sharing'),
                        new Projekt("Quacker",["Java","Typesript","Spring Boot","Sass","Bootstrap 4","Angular","Maven","Git",],"Quacker ist eine Webapp, welche mit Angular und Spring Boot entwickelt worden ist." +
                          " Die Webapp wurde im Rahmen der Vorlesung Webtech 2 in Gruppen entwickelt." +
                          "","../../assets/img/Quacker.png",'https://drive.google.com/file/d/1YWTq2rwYe61_nXcrG0v8HdMM0fPaVdBH/view?usp=sharing'),
                        new Projekt("TopDownShooter",["C#","Unity","Git"],"Ein 2D Top-Down-Shooter entwickelt in Unity im Rahmen des Fachprojekts. ","../../assets/img/TopDownShooter.png",'https://drive.google.com/file/d/1nEROxPutt1cy8dQK0_oyIHnu0axbr0nr/view?usp=sharing'),
                        new Projekt("2D Multiplayer Sidescroller",["C#","Unity","Photon Pun2","Git"],"Ein 2D Multiplayer Sidescroller der in Unity mit Photon Pun2 entwickelt wurde.","../../assets/img/Hauptprojekt.png",'https://drive.google.com/file/d/193tUaqZqSap6H_PPVcqNHJ5t3gxo3qfa/view?usp=sharing'),
                        new Projekt("Alhambra",["Java","Gradle","Git"],"Das Brettspiel Alhambra  im Software Praktikum in Gruppen umgesetzt.","../../assets/img/Alhambra.png", 'https://drive.google.com/file/d/1GN19mhrkDVnqDU6GPxtL6c3XSVJJw6Ra/view?usp=')]
  constructor() { }
}
