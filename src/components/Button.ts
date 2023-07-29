import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("my-button")
export class Button extends LitElement {
	static override styles = css`
		p {
			color: green;
		}
	`;

	override render() {
		return html`<my-text>Hello world</my-text>`;
	}
}
