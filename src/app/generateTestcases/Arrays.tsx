import React, { useEffect } from 'react';
import { VariableData } from './datatypes';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { IoIosArrowDown } from "react-icons/io"
import { ArrayData, BooleanData, FloatData, IntegerData, StringData } from './datatypes';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import Integer from './Integer';
import String from './String';
import Boolean from './Boolean';

export default function Arrays({ k, setDatatypeData, datatypeData }: { k: number, setDatatypeData: React.Dispatch<React.SetStateAction<ArrayData | undefined>>, datatypeData: ArrayData | undefined }): React.JSX.Element {

    const [arrowDown, setArrowDown] = React.useState(false);
    // const [currArray, setCurrArray] = React.useState<IntegerData | FloatData | StringData | BooleanData | ArrayData | undefined>(undefined);
    const [integerDatatypeData, setIntegerDatatypeData] = React.useState<IntegerData | undefined>({ });
    const [floatDatatypeData, setFloatDatatypeData] = React.useState<FloatData | undefined>({ });
    const [stringDatatypeData, setStringDatatypeData] = React.useState<StringData | undefined>({ });
    const [arrayDatatypeData, setArrayDatatypeData] = React.useState<ArrayData | undefined>({ });
    const [booleanDatatypeData, setBooleanDatatypeData] = React.useState<BooleanData | undefined>({ });
    useEffect(() => {
        setDatatypeData({ ...datatypeData, datatype: "integer"});
    }, []);
    
    function addArray() {
        if(datatypeData?.datatype === "integer") setDatatypeData({ ...datatypeData, varData: integerDatatypeData });
        else if(datatypeData?.datatype === "float") setDatatypeData({ ...datatypeData, varData: integerDatatypeData });
        else if(datatypeData?.datatype === "string") setDatatypeData({ ...datatypeData, varData: stringDatatypeData });
        else if(datatypeData?.datatype === "boolean") setDatatypeData({ ...datatypeData, varData: booleanDatatypeData });
        else setDatatypeData({ ...datatypeData, varData: arrayDatatypeData });
    }

    return (
        <div >
            <div className='flex'>

                <DropdownMenu>
                    <div className="flex gap-2 items-center py-1">
                        <Label>Datatype :</Label>

                        <DropdownMenuTrigger asChild >
                            <div className="flex items-center">
                                <Button variant="outline" onClick={() => setArrowDown(!arrowDown)} className="w-min bg-transparent border-none rounded-none p-0 h-fit dark:hover:bg-[#292929]">{datatypeData?.datatype || "integer"}</Button>
                                <IoIosArrowDown />
                            </div>
                        </DropdownMenuTrigger>
                    </div>
                    <DropdownMenuContent className="">
                        <DropdownMenuLabel className=""> {datatypeData?.datatype || "integer"} </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup value={datatypeData?.datatype} onValueChange={
                            // <DropdownMenuRadioGroup value={eachLineData.varData.datatype} onValueChange={
                            (e) => {
                                setDatatypeData({ datatype: e });
                                console.log(datatypeData, "datatypeData inside set datatype");
                            }
                        }>
                            <DropdownMenuRadioItem value="integer" >Integer</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="float">Float</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="string">String</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="boolean">Boolean</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="array">Array</DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>

                <Button onClick={addArray}> Click me</Button>
            </div>
            <div className="flex flex-col gap-4 p-4">
                { datatypeData?.datatype === "integer" ? <Integer k={k} setDatatypeData={setIntegerDatatypeData} datatypeData={integerDatatypeData} /> : null }
                { datatypeData?.datatype === "float" ? <Integer k={k} setDatatypeData={setFloatDatatypeData} datatypeData={floatDatatypeData} /> : null }
                { datatypeData?.datatype === "string" ? <String k={k} setDatatypeData={setStringDatatypeData} datatypeData={stringDatatypeData} /> : null }
                { datatypeData?.datatype === "boolean" ? <Boolean k={k} setDatatypeData={setBooleanDatatypeData} datatypeData={booleanDatatypeData} /> : null }
                { datatypeData?.datatype === "array" ? <Arrays k={k} setDatatypeData={setArrayDatatypeData} datatypeData={arrayDatatypeData} /> : null }
            </div>
        </div>
    )
}