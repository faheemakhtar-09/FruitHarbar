import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsListsComponent } from './fruits-lists.component';

describe('FruitsListsComponent', () => {
  let component: FruitsListsComponent;
  let fixture: ComponentFixture<FruitsListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FruitsListsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FruitsListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
