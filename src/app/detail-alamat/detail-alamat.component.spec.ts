import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAlamatComponent } from './detail-alamat.component';

describe('DetailAlamatComponent', () => {
  let component: DetailAlamatComponent;
  let fixture: ComponentFixture<DetailAlamatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAlamatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAlamatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
