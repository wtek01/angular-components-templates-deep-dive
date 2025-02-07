import {
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})

/*1.Utilisation de @Host :
- Le décorateur @Host permet d'appliquer automatiquement une classe CSS control à l'élément parent dans le template HTML
- Au lieu d'écrire manuellement <app-control class="control">, la classe est automatiquement ajoutée à l'élément <app-control>
- Cela permet de cibler et de styler l'élément parent directement
2. Utilisation de @ContentChild :
- @ContentChild est utilisé pour accéder aux éléments enfants projetés dans le template
- Il permet de cibler spécifiquement les éléments qui ont l'attribut name="input"
- Ces éléments sont accessibles via des propriétés privées de type ElementRef (comme control et control2)
- On peut ensuite interagir avec ces éléments, par exemple en leur ajoutant des gestionnaires d'événements onClick()
3. En résumé :
- @Host gère le styling au niveau du composant parent
- @ContentChild permet d'accéder et de manipuler les éléments enfants projetés
- Les deux décorateurs facilitent l'interaction et le styling des composants de manière plus propre et maintenable
Cette approche est plus élégante que d'ajouter manuellement des classes ou des gestionnaires d'événements directement
dans le composant dans le template HTML.*/
export class ControlComponent {
  //@HostBinding('class') className = 'control';
  /*@HostListener('click') onClick() {
    console.log('clicked');
  }*/
  @Input({ required: true }) label: string = '';
  @ContentChild('input') private control?: ElementRef<
    HTMLInputElement | HTMLTextAreaElement
  >;
  private control2 =
    contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>(
      'input'
    );

  onClick() {
    console.log('clicked');
    console.log(this.control);
  }
}
