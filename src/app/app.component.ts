import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <main>
      <h1>Structural Directives</h1>
      <section class="banner primary">
        <h2>Temporary content</h2>
        <p>This layout should disappear in 5 seconds</p>
      </section>
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
    `,
  ],
})
export class AppComponent {}
