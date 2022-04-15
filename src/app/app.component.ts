import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from './api.service';
import { DetailAlamatComponent } from './detail-alamat/detail-alamat.component';
import { DialogKonfirmasiComponent } from './dialog-konfirmasi/dialog-konfirmasi.component';
import { TambahAlamatComponent } from './tambah-alamat/tambah-alamat.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'buku-alamat';
  constructor(public dialog: MatDialog, public api: ApiService) 
  {
    this.getData();
  }

  dataAlamat:any=[]; 
  getData()
  {
    this.api.find("data").subscribe(res=>{
      //console.log(res);
      this.dataAlamat = res;
    },err=>{
      alert('Tidak dapat mengambil data');
    })
  }

  buatAlamat(data: any) {
    const dialogRef = this.dialog.open(TambahAlamatComponent, {
      width: '450px',
      data: data
    });
    dialogRef.afterClosed().subscribe((res) => {
      if(res)
      {
        this.getData();
      }
    });
  }

  detailAlamat(data: any) {
    const dialogRef = this.dialog.open(DetailAlamatComponent, {
      width: '450px',
      data: data
    });
  }

  konfirmasiHapus(data: any) {
    const dialogRef = this.dialog.open(DialogKonfirmasiComponent, {
      width: '450px',
      data: data
    });
    dialogRef.afterClosed().subscribe(res=>{
      if(res)
      {
        this.getData();
      }
    })
  }
}
