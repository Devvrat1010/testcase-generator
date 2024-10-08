export interface IntegerData {
    range: Array<number>;
    specificValues: Array<number>;
}

export interface FloatData {
    range: Array<number>;
    specificValues?: Array<number>;
}

export interface StringData {
    range: Array<number>;
    lowerCaseLettersRange?: Array<string>;
    lowerCaseLetters?: Array<string>;
    upperCaseLettersRange?: Array<string>;
    upperCaseLetters?: Array<string>;
    stringNumbersRange?: Array<string>;
    stringNumbers?: Array<string>;
    specialCharacters?: Array<string>;
}

export interface BooleanData {
    value: boolean;
}

export interface ArrayData {
    range: Array<number>;
    datatype?: string;
    integer?: IntegerData;
    float?: FloatData;
    string?: StringData;
    boolean?: BooleanData;
}

export interface VariableData {
    datatype: string;
    varData: IntegerData | FloatData | StringData | BooleanData | ArrayData;

}

export interface LineData {
    [varName: string]: VariableData | undefined;
}
