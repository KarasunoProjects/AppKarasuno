import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Teste03Page } from './teste03.page';

describe('Teste03Page', () => {
  let component: Teste03Page;
  let fixture: ComponentFixture<Teste03Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teste03Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Teste03Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
