import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Teste01Page } from './teste01.page';

describe('Teste01Page', () => {
  let component: Teste01Page;
  let fixture: ComponentFixture<Teste01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teste01Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Teste01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
