import WidgetBase from "@dojo/framework/core/WidgetBase";
import { tsx } from "@dojo/framework/core/vdom";
import * as css from "./index.m.css";

export interface TextInputProperties {
	value?: string;
	onValue?(value?: string): void;
}

export default class TextInput extends WidgetBase<TextInputProperties> {
	protected render() {
		const { value, onValue } = this.properties;

		return (
			<input
				classes={[css.root]}
				value={value}
				oninput={(event: Event) => {
					event.stopPropagation();
					onValue && onValue((event.target as HTMLInputElement).value);
				}}
			/>
		);
	}
}
