import WidgetBase from "@dojo/framework/core/WidgetBase";
import { tsx } from "@dojo/framework/core/vdom";
import * as css from "./index.m.css";
import * as c from "bootstrap-classes";

export interface TextInputProperties {
	value?: string;
	onValue?(value?: string): void;
}

export default class TextInput extends WidgetBase<TextInputProperties> {
	protected render() {
		const { value, onValue } = this.properties;

		return (
			<input
				key={this.getRootKey()}
				classes={[css.root, c.form_control]}
				value={value}
				oninput={(event: Event) => {
					event.stopPropagation();
					onValue && onValue((event.target as HTMLInputElement).value);
				}}
			/>
		);
	}

	protected getRootKey(): string {
		return "text-input";
	}
}
