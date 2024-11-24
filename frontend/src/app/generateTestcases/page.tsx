"use client"
import React from "react";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/ui/navbar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Textarea } from "@/components/ui/textarea"
import { VariableData, LineData, IntegerData, FloatData, StringData, BooleanData, ArrayData } from "./datatypes";
import String from "./String";
import Integer from "./Integer";
import Boolean from "./Boolean";
import Arrays from "./Arrays";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import createTestcase from "@/functions/createTestcase";
import { create } from "domain";

function EachVariableData({ k, setEachLineData, eachLineData, showResult }: { k: number, setEachLineData: React.Dispatch<React.SetStateAction<LineData[]>>, eachLineData: LineData[], showResult: boolean }): React.JSX.Element {

    const [varName, setVarName] = React.useState<string>("");
    const [integerDatatypeData, setIntegerDatatypeData] = React.useState<IntegerData | undefined>({ });
    const [floatDatatypeData, setFloatDatatypeData] = React.useState<FloatData | undefined>({ });
    const [stringDatatypeData, setStringDatatypeData] = React.useState<StringData | undefined>({ });
    const [arrayDatatypeData, setArrayDatatypeData] = React.useState<ArrayData | undefined>({ });
    const [booleanDatatypeData, setBooleanDatatypeData] = React.useState<BooleanData | undefined>({ });

    const [curr, setCurr] = React.useState<VariableData | undefined>({ datatype: "integer", isValidInput: true, varData: { range: [0, 0] } as IntegerData });

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
        <div className="flex border-[#595959] border-b">
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
                                    setCurr({...curr, isValidInput: curr?.isValidInput || false, datatype: curr?.datatype || "integer", varData: curr?.varData ?? { range: [0, 0] } as IntegerData});
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

function TestCaseLine({ k, setEachLineData, eachLineData, showResult }: { k: number, setEachLineData: React.Dispatch<React.SetStateAction<LineData[]>>, eachLineData: LineData[], showResult: boolean }): React.JSX.Element {

    const [res, setRes] = React.useState<number>(0);

    return (
        <div className="border gap-1 border-[#595959] rounded w-full">
            <div className="flex items-center border-b border-[#595959]">
                <h1 className="text-center px-4 w-2/5 bg-blue-400 py-2 font-semibold border-r border-r-[#595959] flex items-center">Line {k + 1}</h1>
                <Button variant="outline" className="px-4 py-2 h-full w-full border-none border-[#595959] rounded-none" onClick={
                    () => {
                        setRes(res + 1);
                    }
                } >Add a Variable</Button>
            </div>

            <div className="flex flex-col">
                {
                    Array.from({ length: res }).map((_, index) => {
                        return (
                            <EachVariableData key={"line " + k + ", variable " + index} k={k} setEachLineData={setEachLineData} eachLineData={eachLineData} showResult={showResult} />
                        );
                    })
                }
            </div>

        </div>

    );
}

export default function GenerateTestCase() {

    const [resultTestcases, setResultTestcases] = React.useState<Array<{ [key: string]: any }>>([]);
    const [eachLineData, setEachLineData] = React.useState<Array<LineData>>([]);
    const [testcases, setTestcases] = React.useState<number>(0);
    const [showResult, setShowResult] = React.useState<boolean>(false);

    const createTestcases = async () => {
        const temp1 = {testcaseData: {eachLineData, testcases}};
        // const temp = JSON.stringify({eachLineData, testcases});
        // const body = JSON.stringify({testcaseData: temp});
        // console.log(body, "bodyy")
        console.log(temp1, "temp1")
        const data = await fetch("http://localhost:8080/postTestcaseData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(temp1),
        });
        const result = await data.json();
        console.log(result, "result");
        setResultTestcases(result);
    }

    const copyToClipboard = () => {
        const copyText = document.getElementById("Preview") as HTMLDivElement;
        console.log(resultTestcases);
        navigator.clipboard.writeText(copyText.innerText);
    }

    return (
        <div className="h-screen w-screen flex flex-col items-center justify-around">
            <Navbar></Navbar>
            <div className="h-[90%] w-full dark:bg-[#191919] dark:text-white p-5">
                <div className="h-full w-full border-2 border-[#595959]  p-4 rounded flex gap-4">
                    <div className="h-full w-2/5 flex flex-col gap-4">
                        <div className="h-1/2 border border-[#595959] flex flex-col">
                            <Label htmlFor="Question" className="text-xl p-2">Question</Label>
                            <textarea className="h-5/6 resize-none bg-transparent outline-none p-1 text-sm border-0 border-t border-[#595959] rounded-none" />
                        </div>
                        <div className="h-1/2">
                            <div className="flex justify-between p-1 px-2 items-center border border-[#595959] border-b-0">
                                <Label htmlFor="PreviewTestcases" className="text-xl h-1/6"> Preview </Label>
                                <Button className="h-fit" onClick={copyToClipboard}>
                                    Copy
                                </Button>
                            </div>
                            <div className="h-[88.8%] border border-[#595959] p-2 px-2 bg-gray-200 overflow-y-scroll" id="Preview">
                                <div className="bg-gray-300 px-1 ">{testcases}</div>
                                {
                                    resultTestcases.map((l1, id1) => (
                                        <div key={"result " + id1} className="">
                                            {
                                                eachLineData.map((line, index) => (
                                                    <div key={"line " + index} className={`${id1 % 2 === 0 ? 'bg-gray-200' : 'bg-gray-300'} hover:bg-yellow-50 px-1`} >
                                                        {
                                                            Object.keys(line).map((variable, index) => (
                                                                <React.Fragment key={"variable " + index}  >
                                                                    {Array.isArray(l1?.[variable]) ? l1?.[variable].join(" "): l1?.[variable] }
                                                                    &nbsp;
                                                                </React.Fragment>
                                                            ))
                                                        }
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-3/5 gap-2 border border-[#595959] [&>*]:px-2 py-2">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="totalCases" className="text-xl opacity-95">Configure Testcases</Label>
                            <div className="flex gap-2">
                                <Input className="w-1/3 h-10 px-3 py-2" type="totalCases" id="totalCases" placeholder="Number of Testcases" onChange={
                                    (e) => {
                                        setTestcases(Number(e.target.value));
                                    }
                                } />
                                <Button variant="outline" className="w-1/3 bg-transparent border-[#595959]" onClick={
                                    () => {
                                        setEachLineData([...eachLineData, {}]);
                                        console.log(eachLineData);
                                    }
                                }> Add a line </Button>
                                <Button variant="outline" className="w-1/3 bg-transparent border-[#595959]"> Add Dynamic Lines</Button>
                                <Button variant="outline" className="w-1/3 bg-transparent border-[#595959]" onClick={createTestcases}> Create Testcases</Button>
                            </div>
                        </div>
                        <hr className="border-0 border-t w-full border-[#595959]" />
                        <h1 className="font-semibold">Lines of Testcases</h1>

                        <div className="overflow-y-scroll border-[#595959] rounded">

                            <div id="addLine" className="flex flex-col gap-2">
                                {
                                    eachLineData.map((line, index) => {
                                        return (
                                            <>
                                                <TestCaseLine key={"line " + index} k={index} setEachLineData={setEachLineData} eachLineData={eachLineData} showResult={showResult} />
                                            </>
                                        );
                                    })
                                }

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
