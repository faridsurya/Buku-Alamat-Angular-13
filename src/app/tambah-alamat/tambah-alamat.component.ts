import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tambah-alamat',
  templateUrl: './tambah-alamat.component.html',
  styleUrls: ['./tambah-alamat.component.scss']
})
export class TambahAlamatComponent implements OnInit {
  alamat: any = {};
  constructor(
    public api: ApiService,
    public dialogRef: MatDialogRef<TambahAlamatComponent>,
    @Inject(MAT_DIALOG_DATA) public updateData: any
  ) {}

  ngOnInit(): void {
    if(this.updateData != false)
    {
      this.alamat = this.updateData;
    }
  }

  close()
  {

  }
  loading: boolean = false;

  simpanData()
  {
    this.loading = true;
    if(this.updateData == false)
    {
      this.api.add('data', this.alamat).subscribe(res=>{
        this.loading = false;
        this.dialogRef.close(true);
      },err=>{
        this.loading = false;
        alert('Data tidak tersimpan. Coba lagi!');
      });
    }else{
      this.api.update('data/'+this.alamat.id, this.alamat).subscribe(res=>{
        this.loading = false;
        this.dialogRef.close(true);
      },err=>{
        this.loading = false;
        alert('Tidak dapat memperbarui data. Coba lagi!');
      })
    }
    
  }

}
