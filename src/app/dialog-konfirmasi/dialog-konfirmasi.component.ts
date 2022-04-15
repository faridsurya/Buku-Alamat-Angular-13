import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dialog-konfirmasi',
  templateUrl: './dialog-konfirmasi.component.html',
  styleUrls: ['./dialog-konfirmasi.component.scss']
})
export class DialogKonfirmasiComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogKonfirmasiComponent>,
    @Inject(MAT_DIALOG_DATA) public alamat: any,
    public api: ApiService
  ) { }

  ngOnInit(): void {
  }
  loading: boolean = false;
  konfirmasi()
   {
     this.loading = true;
     this.api.delete('data/'+this.alamat.id).subscribe(res=>{
       this.loading = false;
      this.dialogRef.close(true);
     },err=>{
      this.loading = false;
     })
   }
     
   


}
