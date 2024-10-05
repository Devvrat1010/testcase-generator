// create a component for taking input of different types of data such as uppercase letters, lowercase letters, integers, etc.

import React, { useEffect, useState } from 'react';
import { VariableData } from './datatypes';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type InputProps = {
    k: number;
    setCurr: React.Dispatch<React.SetStateAction<VariableData | undefined>>;
    curr: VariableData;
    datatype: 'integer' | 'uppercase' | 'lowercase' | 'float';
    inputType: 'number' | 'text';
};

export default function DataInput({ k, setCurr, curr, datatype, inputType }: InputProps): React.JSX.Element {
    const [range, setRange] = useState<string>(datatype + "Range");    
    const [values, setValues] = useState<string>(datatype + "Values");    

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'start' | 'end' | 'specific') => {
        const value = e.target.value;
        if (type === 'specific') {
            const tempValues = value.split(",").map(val => datatype === 'integer' ? Number(val) : val);
            setCurr({ ...curr, datatype, varData: { [range]: [], [values]: tempValues } });
        } else {
            // const range = [...curr.varData.range];
            // range[type === 'start' ? 0 : 1] = datatype === 'integer' ? Number(value) : value;
            // setCurr({ ...curr, datatype, varData: { ...curr.varData, range } });
        }
    };


    useEffect(() => {
        let temp = datatype + "Range";
        setRange(temp)
    },[]);

    return (
        <div className="flex flex-col justify-between gap-4 items-center">
            <div>
                <Label>{datatype} range</Label>
                <div className="flex gap-2 items-center [&>*]:w-1/2 [&>*]:p-1 [&>*]:h-fit">
                    <Input type={inputType} id={`${datatype}Start`} maxLength={1} placeholder="start" onChange={
                        (e) => {
                            let temp = "z";
                            try {
                                temp = curr.varData.lowerCaseLettersRange[1];
                            } catch (e) {
                                console.log(e);
                            }
                            setCurr({ ...curr, varData: { ...curr.varData, lowerCaseLettersRange: [e.target.value, temp], lowerCaseLetters: [] } });
                        })} />
                    -
                    <Input type={inputType} id={`${datatype}End`} maxLength={1} placeholder="end" onChange={(e) => handleInputChange(e, 'end')} />
                </div>
            </div>
            <p className="text-center font-bold"> OR </p>
            <div>
                <Label htmlFor={`${datatype}Values`} className="w-2/5">Specific Value(s)</Label>
                <Input className="w-full" type="text" id={`${datatype}Values`} placeholder={datatype} onChange={(e) => handleInputChange(e, 'specific')} />
            </div>
        </div>
    );
}


