// 以下代码，来自 dojo/widgets/common/interfaces.d.ts
// TODO：改为引用

export type AriaPropertyObject = {
	[key: string]: string | null;
};

export interface CustomAriaProperties {
	aria?: AriaPropertyObject;
}

export interface InputEventProperties {
	onBlur?(value?: string | number | boolean): void;
	onChange?(value?: string | number | boolean): void;
	onFocus?(value?: string | number | boolean): void;
	onInput?(value?: string | number | boolean): void;
}
