import { Injectable } from '@angular/core';
import {Projekt} from '../model/Projekt'
@Injectable({
  providedIn: 'root'
})
export class ProjektService {
  projekte:Projekt[] = [new Projekt("Fahrtenbuch",["Java","Gradle","Git"],"Ein Java Programm zum Eintragen von Auto fahrten.","../../assets/img/Fahrtenbuch.png",'https://drive.google.com/file/d/1Awx4fP10oYo1BrSBaPrv0MOUPpNkMWRW/view?usp=sharing',
                      'Das Programm wurde im Rahmen des Softwarepraktikums in 6er Gruppen erarbeitet.'
                             + ' Der User kann verschiedene Autos ins System eintragen und einzelne Fahrten '
                          +'für jedes Auto abspeichern. Desweiteren können Statistiken wie zum Beispiel Fahrzeit oder insgesamte Distanz'
                      +'als Pdf ausgegeben werden. Das Programm folgt dem MVC Pattern wobei die Oberfläche im Programm Scene Builder erstellt wurde.'
                       +' Die Modelle und Logik wurden in Java entwickelt.'
),
                        new Projekt("Quacker",["Java","Typesript","Spring Boot","Sass","Bootstrap 4","Angular","Maven","Git",],"Eine Webapp, welche mit Angular und Spring Boot,im Rahmen der Vorlesung Webtech 2 in Gruppen, entwickelt wurde.","../../assets/img/Quacker.png",'https://drive.google.com/file/d/1YWTq2rwYe61_nXcrG0v8HdMM0fPaVdBH/view?usp=sharing',
                          'Quacker wurde im Rahmen des der Vorlesung Webtech 2, in vierer Gruppen entwickelt.'
                          +'Quacker ist ein Twitter Klon. Der User kann verschiedene Kurznachrichten schreiben, welche auf'
                          +'einer Timeline zusehen sind. Außerdem ist es möglich Nachrichten von anderen zu bewerten und '
                          +'anderen Usern zu folgen. Das Frontend wurde in Angular, das Backend mit Spring Boot in Java entwickelt.'
                          +'Die Webapp wurde mit Apache Shiro mittels JWT abgesichert. Ein User kann eine Admin Rolle übernehmen. Mit '
                          +'dieser kann er andere Nachrichten, und User löschen. Nachrichten und User werden in einer Relationalen Datenbank'
                          +'mit der H2 Engine abgespeichert.'
                        ),
                        new Projekt("Top-Down Shooter",["C#","Unity","Git"],"Ein 2D Top-Down-Shooter entwickelt in Unity im Rahmen des Fachprojekts. ","../../assets/img/TopDownShooter.png",'https://drive.google.com/file/d/1nEROxPutt1cy8dQK0_oyIHnu0axbr0nr/view?usp=sharing','Der TopDownShooter wurde im Rahmen des Fachprojektes in einer zweier Gruppe entwickelt. Als Basis wurde die Unity Engine'
                          +'genutzt um in C# das Spiel zu entwickeln. Der Spieler kann durch bewegen der Maus zielen und durch klicklen der Maustaste schießen.'
                          +'Das Spiel wurde in verschiedene Bereiche aufgeteilt, sodass jeder Logik Controller nur bestimmte Zuständigkeiten hat. Zum Beispiel '
                          +'kontrolliert die Klasse PlayerController nur die Logik des Spielers. Das zu zu downloadene Projekt kann in der Unity Engine geöffnet werden.','https://lucalg.itch.io/topdownshooter'),
                        new Projekt("Multiplayer Sidescroller",["C#","Unity","Photon Pun2","Git"],"Entwickelt mit Unity.","../../assets/img/Hauptprojekt.png",'https://drive.google.com/file/d/193tUaqZqSap6H_PPVcqNHJ5t3gxo3qfa/view?usp=sharing','Der 2D Multiplayer Sidescroller wurde im Rahmen des Fachprojekts als Hauptprojekt entwickelt. Wie auch der TopDown Shooter wurde '
                          +'das Spiel mittels der Engine Unity in C# programmiert. Der Multiplayer wurde mit der Photon Pun 2 Engine umgesetzt. '
                          +'Beim Starten des Spieles wird automatisch eine Lobby geöffnet die ein andere Spieler joinen kann. Dabei kann eine Lobby maximal'
                          +'zwei Spieler umfassen. Der Spieler kann wie in einem klassischen Sidescroller sich nach links und rechts Bewegen und Springen.'
    +'Der Spieler muss verschiedene Gegner schlagen um das Level abzuschliesen. Dabei kann er verschiedene Aktionen druchführen wie zum Beispiel blocken.'
    +'Zusätzlich werden Spielfortschritte durch Lagerfeuer abgesichert. Nach dem Tod beider Spieler werden sie zum letzte Lagerfeuer zurückgesetzt.'
    +'Die verschiedene Logiken des Spieles wurden in verschiedene C# Klassen augeteilt.'),
                        new Projekt("Alhambra",["Java","Gradle","Git"],"Das Brettspiel entwickelt in Java.","../../assets/img/Alhambra.png", 'https://drive.google.com/file/d/1GN19mhrkDVnqDU6GPxtL6c3XSVJJw6Ra/view?usp=','Im Rahmen des Softwarepraktikums sollte das Brettspiel Alhambra in Gruppen als Java Programm umgesetzt werden.'
                          +'Beim Starten des Spieles kann ausgewählt werden wie viele Spieler an einer Partie teilnehmen können. Dabei kann ein Spieler menschlich'
                          +'oder eine KI sein. Der User kann zwischen drei verschiedenen KI stärken wählen. Eine Partie kann im normalen Modus oder im EasyMode'
                          +'gepspielt werden. Durch den EasyMode können Züge zurückgenommen werden. Nach abschließen einer Partie werden Scores mit Name in einer Liste'
                          +'abgespeichert. Eine Partie kann abgespeichert werden und wieder geladen werden. Wie auch beim Fahrtenbuch'
                          +'sollte das Programm dem MVC Pattern folgen. Die Oberfläche wurde auch hier mit dem Programm Scene Builder als Javafx Seiten erstellt. '
                          +'Die Controller und Models wurden alle in Java Entwickelt. Durch verschiedene Controller wird sichergestellt das die Logik des Spiels korrekt umgesetzt'
                          +'wird. Zum Beispiel sorgt der Alhambra Controller für einen korrekten Ablauf einer Partie.'
                          +'Der AI Controller kümmert sich um die Funtkionen der AI während einer'
                          +'Partie. Alle Controller und Models wurden mit JUNIT getestet.' )]
  constructor() { }
}
