import WidgetBase from "@dojo/framework/core/WidgetBase";
import { tsx } from "@dojo/framework/core/vdom";
import * as css from "./index.m.css";
import * as c from "bootstrap-classes";

export interface TextInputProperties {
	value?: string;
	type?: string;
	shouldFocus?: boolean;
	onValue?(value?: string): void;
}

export default class TextInput extends WidgetBase<TextInputProperties> {
	protected render() {
		const { value = "", onValue } = this.properties;

		return (
			<input
				key="root"
				classes={[css.root, c.form_control]}
				value={value}
				oninput={(event: Event) => {
					event.stopPropagation();
					const value = (event.target as HTMLInputElement).value;
					onValue && onValue(value);
				}}
			/>
		);
	}
}
