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
		span,
		strong,
		em,
		p,
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			margin: 0;
			font-family: system-ui, sans-serif;
			font-size: 1rem;
		}

		.dark {
			color: #000;
		}

		.light {
			color: #fff;
		}
	`;

	@property()
	as: "span" | "strong" | "em" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" =
		"span";

	@property()
	color: "dark" | "light" = "dark";

	override render() {
		const tag = this.as;

		return html`<${unsafeStatic(tag)} class="${
			this.color
		}"><slot></slot></${unsafeStatic(tag)}>`;
	}
}
