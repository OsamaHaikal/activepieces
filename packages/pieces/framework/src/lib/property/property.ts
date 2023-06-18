import {
    ArrayProperty,
    CheckboxProperty,
    DateTimeProperty,
    FileProperty,
    JsonProperty,
    LongTextProperty,
    NumberProperty,
    ObjectProperty,
    SecretTextProperty,
    ShortTextProperty
} from "./base-prop";
import { BasicAuthProperty } from "./basic-auth-prop";
import { CustomAuthProperty, CustomAuthProps } from "./custom-auth-prop";
import { DropdownProperty, MultiSelectDropdownProperty, StaticDropdownProperty, StaticMultiSelectDropdownProperty } from "./dropdown-prop";
import { DynamicProperties } from "./dynamic-prop";
import { OAuth2Property, OAuth2Props } from "./oauth2-prop";
import { Processors } from "../processors/processors";
import { Validators } from "../validators/validators";

export enum PropertyType {
	SHORT_TEXT = 'SHORT_TEXT',
	LONG_TEXT = 'LONG_TEXT',
	DROPDOWN = 'DROPDOWN',
	STATIC_DROPDOWN = "STATIC_DROPDOWN",
	NUMBER = 'NUMBER',
	CHECKBOX = 'CHECKBOX',
	OAUTH2 = 'OAUTH2',
	SECRET_TEXT = 'SECRET_TEXT',
	ARRAY = 'ARRAY',
	OBJECT = 'OBJECT',
	BASIC_AUTH = "BASIC_AUTH",
	JSON = 'JSON',
	MULTI_SELECT_DROPDOWN = 'MULTI_SELECT_DROPDOWN',
	STATIC_MULTI_SELECT_DROPDOWN = 'STATIC_MULTI_SELECT_DROPDOWN',
	DYNAMIC = "DYNAMIC",
	CUSTOM_AUTH = "CUSTOM_AUTH",
	DATE_TIME = "DATE_TIME",
	FILE = "FILE"
}


export type PieceProperty = ShortTextProperty<boolean>
| LongTextProperty<boolean>
| OAuth2Property<boolean, OAuth2Props>
| CheckboxProperty<boolean>
| DropdownProperty<any, boolean>
| StaticDropdownProperty<any, boolean>
| NumberProperty<boolean>
| SecretTextProperty<boolean>
| BasicAuthProperty<boolean>
| ArrayProperty<boolean>
| ObjectProperty<boolean>
| JsonProperty<boolean>
| MultiSelectDropdownProperty<unknown, boolean>
| StaticMultiSelectDropdownProperty<unknown, boolean>
| DynamicProperties<boolean>
| CustomAuthProperty<boolean, CustomAuthProps>
| DateTimeProperty<boolean>
| FileProperty<boolean>;

export interface PiecePropertyMap {
	[name: string]: PieceProperty
}


export type StaticPropsValue<T extends PiecePropertyMap> = {
	[P in keyof T]: T[P] extends { required: true } ? T[P]['valueSchema'] : T[P]['valueSchema'] | undefined;
}

export const Property = {
	ShortText<R extends boolean>(request: Properties<ShortTextProperty<R>>): R extends true ? ShortTextProperty<true> : ShortTextProperty<false> {
		return { ...request, valueSchema: undefined, type: PropertyType.SHORT_TEXT } as unknown as R extends true ? ShortTextProperty<true> : ShortTextProperty<false>;
	},
	Checkbox<R extends boolean>(request: Properties<CheckboxProperty<R>>): R extends true ? CheckboxProperty<true> : CheckboxProperty<false> {
		return { ...request, valueSchema: undefined, type: PropertyType.CHECKBOX } as unknown as R extends true ? CheckboxProperty<true> : CheckboxProperty<false>;
	},
	LongText<R extends boolean>(request: Properties<LongTextProperty<R>>): R extends true ? LongTextProperty<true> : LongTextProperty<false> {
		return { ...request, valueSchema: undefined, type: PropertyType.LONG_TEXT } as unknown as R extends true ? LongTextProperty<true> : LongTextProperty<false>;
	},
	Number<R extends boolean>(request: Properties<NumberProperty<R>>): R extends true ? NumberProperty<true> : NumberProperty<false> {
		request = {
			...request, 
			defaultProcessors: [Processors.number],
			defaultValidators: [Validators.number],
		}
		return { 
			...request,
			valueSchema: undefined, 
			type: PropertyType.NUMBER, 
		} as unknown as R extends true ? NumberProperty<true> : NumberProperty<false>;
	},
	Json<R extends boolean>(request: Properties<JsonProperty<R>>): R extends true ? JsonProperty<true> : JsonProperty<false> {
		return { ...request, valueSchema: undefined, type: PropertyType.JSON } as unknown as R extends true ? JsonProperty<true> : JsonProperty<false>;
	},
	Array<R extends boolean>(request: Properties<ArrayProperty<R>>): R extends true ? ArrayProperty<true> : ArrayProperty<false> {
		return { ...request, valueSchema: undefined, type: PropertyType.ARRAY } as unknown as R extends true ? ArrayProperty<true> : ArrayProperty<false>;
	},
	Object<R extends boolean>(request: Properties<ObjectProperty<R>>): R extends true ? ObjectProperty<true> : ObjectProperty<false> {
		return { ...request, valueSchema: undefined, type: PropertyType.OBJECT } as unknown as R extends true ? ObjectProperty<true> : ObjectProperty<false>;
	},
	SecretText<R extends boolean>(request: Properties<SecretTextProperty<R>>): R extends true ? SecretTextProperty<true> : SecretTextProperty<false> {
		return { ...request, valueSchema: undefined, type: PropertyType.SECRET_TEXT } as unknown as R extends true ? SecretTextProperty<true> : SecretTextProperty<false>;
	},
	BasicAuth<R extends boolean>(request: Properties<BasicAuthProperty<R>>): R extends true ? BasicAuthProperty<true> : BasicAuthProperty<false> {
		return { ...request, valueSchema: undefined, type: PropertyType.BASIC_AUTH } as unknown as R extends true ? BasicAuthProperty<true> : BasicAuthProperty<false>;
	},
	CustomAuth<R extends boolean, T extends CustomAuthProps>(request: Properties<CustomAuthProperty<R, T>>):
		R extends true ? CustomAuthProperty<true, T> : CustomAuthProperty<false, T> {
		return { ...request, valueSchema: undefined, type: PropertyType.CUSTOM_AUTH } as unknown as R extends true ? CustomAuthProperty<true, T> : CustomAuthProperty<false, T>;
	},
	OAuth2<R extends boolean, T extends OAuth2Props>(request: Properties<OAuth2Property<R, T>>): R extends true ? OAuth2Property<true, T> : OAuth2Property<false, T> {
		return { ...request, valueSchema: undefined, type: PropertyType.OAUTH2 } as unknown as R extends true ? OAuth2Property<true, T> : OAuth2Property<false, T>;
	},
	Dropdown<T, R extends boolean = boolean>(request: Properties<DropdownProperty<T, R>>): R extends true ? DropdownProperty<T, true> : DropdownProperty<T, false> {
		return { ...request, valueSchema: undefined, type: PropertyType.DROPDOWN } as unknown as R extends true ? DropdownProperty<T, true> : DropdownProperty<T, false>;
	},
	StaticDropdown<T, R extends boolean = boolean>(request: Properties<StaticDropdownProperty<T, R>>): R extends true ? StaticDropdownProperty<T, true> : StaticDropdownProperty<T, false> {
		return { ...request, valueSchema: undefined, type: PropertyType.STATIC_DROPDOWN } as unknown as R extends true ? StaticDropdownProperty<T, true> : StaticDropdownProperty<T, false>;
	},
	MultiSelectDropdown<T, R extends boolean = boolean>(request: Properties<MultiSelectDropdownProperty<T, R>>): R extends true ? MultiSelectDropdownProperty<T, true> : MultiSelectDropdownProperty<T, false> {
		return { ...request, valueSchema: undefined, type: PropertyType.MULTI_SELECT_DROPDOWN } as unknown as R extends true ? MultiSelectDropdownProperty<T, true> : MultiSelectDropdownProperty<T, false>;
	},
	DynamicProperties<R extends boolean = boolean>(request: Properties<DynamicProperties<R>>): R extends true ? DynamicProperties<true> : DynamicProperties<false> {
		return { ...request, valueSchema: undefined, type: PropertyType.DYNAMIC } as unknown as R extends true ? DynamicProperties<true> : DynamicProperties<false>;
	},
	StaticMultiSelectDropdown<T, R extends boolean = boolean>(request: Properties<StaticMultiSelectDropdownProperty<T, R>>): R extends true ? StaticMultiSelectDropdownProperty<T, true> : StaticMultiSelectDropdownProperty<T, false> {
		return { ...request, valueSchema: undefined, type: PropertyType.STATIC_MULTI_SELECT_DROPDOWN } as unknown as R extends true ? StaticMultiSelectDropdownProperty<T, true> : StaticMultiSelectDropdownProperty<T, false>;
	},
	DateTime<R extends boolean>(request: Properties<DateTimeProperty<R>>): R extends true ? DateTimeProperty<true> : DateTimeProperty<false> {
		request = {
			...request, 
			defaultProcessors: [Processors.datetime],
			defaultValidators: [Validators.datetimeIso]
		}
		return { 
			...request, 
			valueSchema: undefined, 
			type: PropertyType.DATE_TIME, 
		} as unknown as R extends true ? DateTimeProperty<true> : DateTimeProperty<false>;
	},
	File<R extends boolean>(request: Properties<FileProperty<R>>): R extends true ? FileProperty<true> : FileProperty<false> {
		request = {
			...request, 
			defaultProcessors: [Processors.file],
			defaultValidators: [Validators.file]
		}
		return { ...request, valueSchema: undefined, type: PropertyType.FILE } as unknown as R extends true ? FileProperty<true> : FileProperty<false>
	},
};

type Properties<T> = Omit<T, "valueSchema" | "type">;
