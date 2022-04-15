import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogKonfirmasiComponent } from './dialog-konfirmasi.component';

describe('DialogKonfirmasiComponent', () => {
  let component: DialogKonfirmasiComponent;
  let fixture: ComponentFixture<DialogKonfirmasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogKonfirmasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogKonfirmasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
