
import React, { useState } from 'react';
import { IntegerData, VariableData } from './datatypes';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"



export default function Integer({ k, setDatatypeData, datatypeData, setErrorLine }: { k: number, setDatatypeData: React.Dispatch<React.SetStateAction<IntegerData | undefined>>, datatypeData:  IntegerData | undefined, setErrorLine: React.Dispatch<React.SetStateAction<string>> }): React.JSX.Element {

    return (
        <div className="flex flex-col justify-between gap-2 items-">
            <div>

                <Label>Range</Label>
                <div className="flex gap-2 items-center [&>*]:w-1/2 [&>*]:p-1 [&>*]:h-fit">
                    <Input type="number" maxLength={1} id="integer" placeholder="start" onChange={
                        (e) => {
                            let temp = datatypeData?.range ? datatypeData.range[1] : 10000;
                            setDatatypeData({ ...datatypeData, range: [Number(e.target.value), temp], specificValues: [] });
                            // setCurr({ ...curr, varData: { ...curr.varData, range: [Number(e.target.value), curr.varData.range[1]] } });
                        }
                    } />
                    -
                    <Input type="number" id="intEnd" placeholder="end" onChange={
                        (e) => {
                            let temp = datatypeData?.range ? datatypeData.range[0] : 0;
                            setDatatypeData({ ...datatypeData, range: [temp, Number(e.target.value)], specificValues: [] });
                            // setEachLineData({...eachLineData, [k]: { ...eachLineData[k], [varName]: curr }});
                            // setCurr({ ...curr, varData: { ...curr.varData, range: [curr.varData.range[0], Number(e.target.value)] } });
                        }
                    } />
                </div>
            </div>
            <p className="text-center font-bold"> OR </p>
            <div>

                <Label htmlFor="intValues" className="w-2/5">Specific Value(s)</Label>
                <Input className="w-full h-fit p-1" type="string" id="intValues" placeholder="Integer" onChange={
                    (e) => {
                        // create a function to split the string and convert it to array of integers
                        const values = e.target.value.split(",").map(Number);
                        console.log(values, "values");
                        setDatatypeData({ ...datatypeData, range: [], specificValues: values });
                        // setCurr({...curr, datatype: "integer", varData: { range: [], specificValues: values }});
                    }
                } />
            </div>
        </div>
    );
}