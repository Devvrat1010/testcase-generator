
import React, { useState } from 'react';
import { IntegerData, VariableData } from './datatypes';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"



export default function Integer({ k, setDatatypeData, datatypeData, setErrorLine }: { k: number, setDatatypeData: React.Dispatch<React.SetStateAction<IntegerData | undefined>>, datatypeData:  IntegerData | undefined, setErrorLine: React.Dispatch<React.SetStateAction<string>> }): React.JSX.Element { 
    
    return (
        <div className="flex flex-col justify-between gap-2 p-2">
            <div className='w-full'>
                <Label>Range</Label>
                <div className="flex gap-2 items-center [&>*]:w-1/2 [&>*]:p-1 [&>*]:h-fit">
                    <Input type="string" maxLength={1} id="integer" placeholder="start" onChange={
                        (e) => {
                            // fill the other value with current value or 10000
                            let temp = datatypeData?.range ? datatypeData.range[1] : '10000';
                            setDatatypeData({ ...datatypeData, range: [e.target.value, temp], specificValues: [] });
                        }
                    } />
                    -
                    <Input type="string" id="intEnd" placeholder="end" onChange={
                        (e) => {
                            // handle letters and special characters
                            let temp = datatypeData?.range ? datatypeData.range[0] : '0';
                            // fill the other value with current value or 0
                            setDatatypeData({ ...datatypeData, range: [temp, e.target.value], specificValues: [] });

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