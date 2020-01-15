import { create, tsx } from "@dojo/framework/core/vdom";
import * as css from "./index.m.css";
import * as c from "bootstrap-classes";

export interface TextInputProperties {
	value?: string;
	type?: string;
	shouldFocus?: boolean;
	onValue?(value?: string): void;
}

const factory = create().properties<TextInputProperties>();

export default factory(function TextInput({ properties }) {
	const { value = "", onValue } = properties();
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
});
