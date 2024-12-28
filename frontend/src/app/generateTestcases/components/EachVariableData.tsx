import React from 'react';
import { VariableData, LineData, IntegerData, FloatData, StringData, BooleanData, ArrayData } from "./datatypes";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { IoIosArrowDown } from "react-icons/io";
import Integer from "./Integer";
import String from "./String";
import Boolean from "./Boolean";
import Arrays from "./Arrays";




export default function EachVariableData({ k, setEachLineData, eachLineData, showResult }: { k: number, setEachLineData: React.Dispatch<React.SetStateAction<LineData[]>>, eachLineData: LineData[], showResult: boolean }): React.JSX.Element {

    const [varName, setVarName] = React.useState<string>("");
    const [integerDatatypeData, setIntegerDatatypeData] = React.useState<IntegerData | undefined>({ });
    const [floatDatatypeData, setFloatDatatypeData] = React.useState<FloatData | undefined>({ });
    const [stringDatatypeData, setStringDatatypeData] = React.useState<StringData | undefined>({ });
    const [arrayDatatypeData, setArrayDatatypeData] = React.useState<ArrayData | undefined>({ });
    const [booleanDatatypeData, setBooleanDatatypeData] = React.useState<BooleanData | undefined>({ });

    const [curr, setCurr] = React.useState<VariableData | undefined>({ datatype: "integer", isValidInput: true, varData: { range: ['0', '0'] } as IntegerData });

    const [arrowDown, setArrowDown] = React.useState<boolean>(true);
    const [errorLine, setErrorLine] = React.useState<string>("");

    async function addVariable() {
        if(varName === ""){
            setErrorLine("Variable name cannot be empty");
            return;
        }
        if(!(curr?.isValidInput ?? false)){
            setErrorLine("Invalid input");
            return;
        }
        setErrorLine("");

        if (curr?.datatype === "integer") setEachLineData(prevData => {
            prevData[k] = { ...prevData[k], [varName]: {...curr, varData: integerDatatypeData}};
            return prevData;
        });
        else if (curr?.datatype === "float") setEachLineData(prevData => {
            prevData[k] = { ...prevData[k], [varName]: {...curr, varData: floatDatatypeData}};
            return prevData;
        });
        else if (curr?.datatype === "string") setEachLineData(prevData => {
            prevData[k] = { ...prevData[k], [varName]: {...curr, varData: stringDatatypeData}};
            return prevData;
        });
        else if (curr?.datatype === "boolean") setEachLineData(prevData => {
            prevData[k] = { ...prevData[k], [varName]: {...curr, varData: booleanDatatypeData}};
            return prevData;
        });
        else if (curr?.datatype === "array") setEachLineData(prevData => {
            prevData[k] = { ...prevData[k], [varName]: {...curr, varData: arrayDatatypeData}};
            return prevData;
        });
        console.log(eachLineData, "eachLineData");
    }

    function changeDirection() {
        console.log("clicked");
        setArrowDown(!arrowDown);
    }

    return (
        <div className="flex border-[#595959] ">
            <div className="flex flex-col border-[#595959]">
                <div className="flex flex-col gap-1 p-4" key={k}>
                    <DropdownMenu>
                        <div className="flex gap-2 items-center py-1">
                            <Label>Datatype :</Label>

                            <DropdownMenuTrigger asChild >
                                <div className="flex items-center">
                                    <Button variant="outline" onClick={changeDirection} className="w-min bg-transparent border-none rounded-none p-0 h-fit dark:hover:bg-[#292929]">{curr?.datatype || "integer"}</Button>
                                    <IoIosArrowDown />
                                </div>
                            </DropdownMenuTrigger>
                        </div>
                        <DropdownMenuContent className="">
                            <DropdownMenuLabel className=""> {curr?.datatype || "integer"} </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup value={curr?.datatype} onValueChange={
                                // <DropdownMenuRadioGroup value={eachLineData.varData.datatype} onValueChange={
                                (e) => {
                                    setCurr({datatype:e, isValidInput: true});
                                    console.log(curr);
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

                    <div className="flex gap-2 items-center">
                        <Label htmlFor="varName">Variable Name:</Label>
                        <Input className="border-none border-t h-min w-min outline-1 outline-none py-1 px-1 underline underline-offset-2" type="varName" id="varName" placeholder="Variable Name"
                            onChange={(e) => {
                                // setting variable name
                                if(e.target.value === ""){
                                    setCurr({...curr, isValidInput: curr?.isValidInput || false, datatype: curr?.datatype || "integer", varData: curr?.varData ?? { range: ['0', '0'] } as IntegerData});
                                }
                                // deleting entry with duplicate variable name
                                else if(e.target.value !== ""){
                                    setEachLineData(prevData => {
                                        delete prevData[k][varName];
                                        return prevData;
                                    })
                                    setVarName(e.target.value);                                    
                                }
                            }}
                        />
                    </div>
                <Button onClick={addVariable}>
                    Add
                </Button>
                <p className="text-red-500">{errorLine}</p>
                </div>
            </div>
            <div className="border-r border-[#595959] w-0 "></div>
            <div className="flex flex-col gap-4 w-full">
                { curr?.datatype === "integer" ? <Integer k={k} setDatatypeData={setIntegerDatatypeData} datatypeData={integerDatatypeData} setErrorLine={setErrorLine}/> : null }
                { curr?.datatype === "float" ? <Integer k={k} setDatatypeData={setFloatDatatypeData} datatypeData={floatDatatypeData} setErrorLine={setErrorLine} /> : null }
                { curr?.datatype === "string" ? <String k={k} setDatatypeData={setStringDatatypeData} datatypeData={stringDatatypeData} setErrorLine={setErrorLine} /> : null }
                { curr?.datatype === "boolean" ? <Boolean k={k} setDatatypeData={setBooleanDatatypeData} datatypeData={booleanDatatypeData} setErrorLine={setErrorLine} /> : null }
                { curr?.datatype === "array" ? <Arrays k={k} setDatatypeData={setArrayDatatypeData} datatypeData={arrayDatatypeData} setErrorLine={setErrorLine} /> : null }
            </div>
        </div>
    );
}