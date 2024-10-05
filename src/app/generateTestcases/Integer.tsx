
import React, { useState } from 'react';
import { VariableData } from './datatypes';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"



export default function Integer({ k, setCurr, curr }: { k: number, setCurr: React.Dispatch<React.SetStateAction<VariableData>>, curr: VariableData}): React.JSX.Element {

    return (
        <div className="flex flex-col justify-between gap-4 items-center">
            <div>

                <Label>Range</Label>
                <div className="flex gap-2 items-center [&>*]:w-1/2 [&>*]:p-1 [&>*]:h-fit">
                    <Input type="number" maxLength={1} id="integer" placeholder="start" onChange={
                        (e) => {
                            setCurr({ ...curr, varData: { ...curr.varData, range: [Number(e.target.value), curr.varData.range[1]] } });
                        }
                    } />
                    -
                    <Input type="number" id="intEnd" placeholder="end" onChange={
                        (e) => {
                            // setEachLineData({...eachLineData, [k]: { ...eachLineData[k], [varName]: curr }});
                            setCurr({ ...curr, varData: { ...curr.varData, range: [curr.varData.range[0], Number(e.target.value)] } });
                        }
                    } />
                </div>
            </div>
            <p className="text-center font-bold"> OR </p>
            <div>

                <Label htmlFor="intValues" className="w-2/5">Specific Value(s)</Label>
                <Input className="w-full" type="string" id="intValues" placeholder="Integer" onChange={
                    (e) => {
                        // create a function to split the string and convert it to array of integers
                        const values = e.target.value.split(",").map(Number);
                        console.log(values, "values");
                        setCurr({...curr, datatype: "integer", varData: { range: [], specificValues: values }});
                    }
                } />
            </div>
        </div>
    );
}