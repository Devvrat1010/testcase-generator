export interface IntegerData {
    range?: Array<number>;
    specificValues?: Array<number>;
}

export interface FloatData {
    range?: Array<number>;
    specificValues?: Array<number>;
}

export interface StringData {
    length?: number;
    lowerCaseLettersRange?: Array<string>;
    lowerCaseLetters?: Array<string>;
    upperCaseLettersRange?: Array<string>;  
    upperCaseLetters?: Array<string>;
    stringNumbersRange?: Array<string>;
    stringNumbers?: Array<string>;
    specialCharacters?: Array<string>;
}

export interface BooleanData {
    value?: boolean;
}

export interface ArrayData {
    length?: Array<number>;
    datatype?: string;
    varData?: IntegerData | FloatData | StringData | BooleanData | ArrayData;
}

export interface VariableData {
    datatype?: string;
    isValidInput?: boolean;
    varData?: IntegerData | FloatData | StringData | BooleanData | ArrayData;
}

export interface LineData {
    [varName: string]: VariableData | undefined;
}