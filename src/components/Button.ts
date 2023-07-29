import { LitElement, css, html } from "lit";

const tagName = "my-element";

export class Button extends LitElement {
	static override styles = css`
		p {
			color: green;
		}
	`;

	override render() {
		return html`<p aria-atomic="true">Web component</p> `;
	}
}

customElements.define(tagName, Button);
