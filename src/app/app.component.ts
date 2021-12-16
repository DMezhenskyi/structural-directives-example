import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <main>
      <h1>Structural Directives</h1>
      <section *hideAfter="5000; then placeholder" class="banner primary">
        <h2>Temporary content</h2>
        <p>This layout should disappear in 5 seconds</p>
      </section>
      <ng-template #placeholder>
        <section class="banner placeholder">
          <h2>Placeholder</h2>
          <p>Here was some content</p>
        </section>
      </ng-template>
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
export class AppComponent {}
