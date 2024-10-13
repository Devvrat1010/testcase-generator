export interface IntegerData {
    range?: number[];
    specificValues?: number[];
}

export interface FloatData {
    range?: number[];
    specificValues?: number[];
}

export interface StringData {
    length?: number | string;
    lowerCaseLettersRange?: string[];
    lowerCaseLetters?: string;
    upperCaseLettersRange?: string[];  
    upperCaseLetters?: string;
    stringNumbersRange?: string[];
    stringNumbers?: string;
    specialCharacters?: string;
}

export interface BooleanData {
    value?: boolean;
}

export interface ArrayData {
    length?: string;
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