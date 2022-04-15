import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahAlamatComponent } from './tambah-alamat.component';

describe('TambahAlamatComponent', () => {
  let component: TambahAlamatComponent;
  let fixture: ComponentFixture<TambahAlamatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TambahAlamatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahAlamatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
