import { DNode } from '@dojo/framework/widget-core/interfaces';
import { v } from '@dojo/framework/widget-core/d';
import { WidgetBase } from '@dojo/framework/widget-core/WidgetBase';
import { ThemedMixin, ThemedProperties, theme } from '@dojo/framework/widget-core/mixins/Themed';
import { FocusMixin, FocusProperties } from '@dojo/framework/widget-core/mixins/Focus';

import * as css from '../../themes/bootstrap/text-input.m.css';
import { InputEventProperties } from '../common/interfaces';

export type TextInputType = 'text' | 'email' | 'number' | 'password';
export type TextInputSize = 'small' | 'large' | 'normal';

export interface TextInputProperties extends ThemedProperties, FocusProperties, InputEventProperties {
	name?: string;
	type: TextInputType;
	value?: string;
	placeholder?: string;
	size: TextInputSize;
}

const formControlSizeMap: { [key: string]: string } = {
	small: 'form-control-sm',
	large: 'form-control-lg',
	normal: ''
};

@theme(css)
export default class TextInput extends ThemedMixin(FocusMixin(WidgetBase))<TextInputProperties> {
	private _onInput(event: Event) {
		event.stopPropagation();
		this.properties.onInput && this.properties.onInput((event.target as HTMLInputElement).value);
	}

	private _onChange(event: Event) {
		event.stopPropagation();
		this.properties.onChange && this.properties.onChange((event.target as HTMLInputElement).value);
	}

	private _onFocus(event: FocusEvent) {
		this.properties.onFocus && this.properties.onFocus((event.target as HTMLInputElement).value);
	}

	private _onBlur(event: FocusEvent) {
		this.properties.onBlur && this.properties.onBlur((event.target as HTMLInputElement).value);
	}

	protected render(): DNode {
		const { name, type, value, placeholder, size } = this.properties;

		return v('input', {
			classes: [this.theme(css.root), formControlSizeMap[size]],
			focus: this.shouldFocus,
			type,
			value,
			placeholder,
			name,
			oninput: this._onInput,
			onchange: this._onChange,
			onblur: this._onBlur,
			onfocus: this._onFocus
		});
	}
}
