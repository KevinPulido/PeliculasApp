import { Component, OnInit } from '@angular/core';
import { PeliculasService } from "../../services/peliculas.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

 cartelera:any;
  populares:any;
  popularesNinos:any;

  constructor( public _ps:PeliculasService ) {

  }

  ngOnInit() {

    this._ps.getCartelera()
    .subscribe( data=>{
      console.log(data);
      
    })


    this._ps.getPopulares()
    .subscribe( data=>{
      this.populares = data;
      console.log(data);
      
    })

     this._ps.getPopularesNinos()
     .subscribe( data=>{
      this.popularesNinos = data;
      console.log(data);
      
    })

  }

}
