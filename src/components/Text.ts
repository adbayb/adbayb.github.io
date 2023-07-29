import { LitElement, css } from "lit";
import { customElement, property } from "lit/decorators.js";
/**
 * Special html builder to allow dynamic tag evaluation
 * @see https://stackoverflow.com/a/74088616
 */
import { html, unsafeStatic } from "lit/static-html.js";

@customElement("my-text")
export class Text extends LitElement {
	static override styles = css`
		p,
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			margin: 0;
		}
	`;

	@property()
	as: "span" | "strong" | "em" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" =
		"span";

	override render() {
		const tag = this.as;

		return html`<${unsafeStatic(tag)}><slot></slot></${unsafeStatic(tag)}>`;
	}
}
