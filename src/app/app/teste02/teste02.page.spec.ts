import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Teste02Page } from './teste02.page';

describe('Teste02Page', () => {
  let component: Teste02Page;
  let fixture: ComponentFixture<Teste02Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teste02Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Teste02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
