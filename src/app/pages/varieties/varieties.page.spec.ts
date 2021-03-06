import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VarietiesPage } from './varieties.page';

describe('VarietiesPage', () => {
  let component: VarietiesPage;
  let fixture: ComponentFixture<VarietiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VarietiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VarietiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
