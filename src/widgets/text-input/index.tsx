import { create, tsx } from "@dojo/framework/core/vdom";
import focus from "@dojo/framework/core/middleware/focus";
import theme, { ThemedProperties } from "@dojo/framework/core/middleware/theme";

import * as css from "../../themes/bootstrap/text-input.m.css";
import { InputEventProperties } from "../common/interfaces";
import { FocusProperties } from "@dojo/framework/core/mixins/Focus";

export type TextInputType = "text" | "email" | "number" | "password";
export type TextInputSize = "small" | "large" | "normal";

export interface TextInputProperties extends ThemedProperties, FocusProperties, InputEventProperties {
	name?: string;
	type: TextInputType;
	value?: string;
	placeholder?: string;
	size: TextInputSize;
}

const formControlSizeMap: { [key: string]: string } = {
	small: "form-control-sm",
	large: "form-control-lg",
	normal: ""
};

const factory = create({ theme, focus }).properties<TextInputProperties>();

export default factory(function TextInput({ properties, middleware: { theme, focus } }) {
	const { root } = theme.classes(css);
	const { name, type, value, placeholder, size, onInput, onChange, onBlur, onFocus } = properties();
	return (
		<input
			classes={[root, formControlSizeMap[size]]}
			focus={focus.shouldFocus()}
			type={type}
			value={value}
			placeholder={placeholder}
			name={name}
			oninput={(event: KeyboardEvent) => onInput && onInput((event.target as HTMLInputElement).value)}
			onchange={(event: Event) => onChange && onChange((event.target as HTMLInputElement).value)}
			onblur={(event: FocusEvent) => onBlur && onBlur((event.target as HTMLInputElement).value)}
			onfocus={(event: FocusEvent) => onFocus && onFocus((event.target as HTMLInputElement).value)}
		/>
	);
});
