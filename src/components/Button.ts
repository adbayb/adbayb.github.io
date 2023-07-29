import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("my-button")
export class Button extends LitElement {
	static override styles = css`
		button {
			border: none;
			background-color: blue;
			border-radius: 0.25rem;
			padding: 1rem;
			margin: 0;
		}
	`;

	override render() {
		return html`<button><my-text color="light">Hello world</my-text></button>`;
	}
}
