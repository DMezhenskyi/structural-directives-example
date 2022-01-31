import { Component } from "@angular/core";
import { LoadingState, Person } from "./if-loaded.directive";

@Component({
  selector: "app-root",
  template: `
    <main>
      <h1>Structural Directives</h1>
      <section *hideAfter="5000 as time; then placeholder; let counter = counter; let default" class="banner primary">
        <h2>Temporary content</h2>
        <p>This layout should disappear in {{default}} seconds. It disappears in: {{counter}}</p>
      </section>
      <ng-template #placeholder let-hiddenAfter="hideAfter" let-myDefault>
        <section class="banner placeholder">
          <h2>Placeholder</h2>
          <p>Here was some content. It was visible for {{hiddenAfter}} seconds.</p>
        </section>
      </ng-template>

      <section *ifLoaded="state">Data was loaded. User name:
        {{state.data.name}}</section>
    </main>
  `,
  styles: [
    `
      .banner {
        display: block;
        padding: 15px 15px;
        border-radius: 10px;
      }
      .primary {
        color: white;
        background-color: #2e2473;
      }
      .placeholder {
        background-color: #ededed;
        border: dashed #e0e0e0 2px;
      }
    `,
  ],
})
export class AppComponent {
  state: LoadingState<Person> = {
    type: 'loading'
  }
  constructor() {
    setTimeout(() => {
      this.state = {
        type: 'loaded',
        data: {
          name: 'Daria'
        }
      }
    }, 3000)
  }
}
