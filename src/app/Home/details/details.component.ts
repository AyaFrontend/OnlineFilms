import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediaService } from 'src/app/Services/media.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
id:string = '';
query:string ='';
result:any;
imgBasePath: string = 'https://image.tmdb.org/t/p/w500/';

  constructor(private _media: MediaService, private _activate: ActivatedRoute) {
    this.id = this._activate.snapshot.params['id'];
    this.query = this._activate.snapshot.params['query'];
   }

  ngOnInit(): void {
     this._media.getDetails(this.id , this.query).subscribe((response)=>
     this.result = response);
  }

}
