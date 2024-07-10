
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
import { Variable } from "lucide-react";

interface VariableData {
    datatype?: string;
    intRange?: Array<number>;
    intSpecificValues?: Array<number>;
    floatRange?: Array<number>;
    floatSpecificValues?: Array<number>;
    stringLength?: Array<number>;
    lowerCaseLettersRange?: Array<string>;
    lowerCaseLetters?: Array<string>;
    upperCaseLettersRange?: Array<string>;
    upperCaseLetters?: Array<string>;
    stringNumbersRange?: Array<string>;
    stringNumbers?: Array<string>;
    specialCharacters?: Array<string>;
}

interface LineData {
    [varName: string]: VariableData | null;
}


function integer() {
    return (
        <div className="flex justify-between gap-4 items-center">
            <Label htmlFor="integer" className="">Range</Label>
            <div className="flex gap-2 items-center [&>*]:w-1/2 [&>*]:p-1 [&>*]:h-fit">
                <Input type="integer" id="integer" placeholder="start" />
                -
                <Input type="integer" id="integer" placeholder="end" />
            </div>
            <p className="text-center font-bold"> OR </p>
            <Label htmlFor="integer" className="w-2/5">Specific Value(s)</Label>
            <Input className="w-full" type="integer" id="integer" placeholder="Integer" />
        </div>
    );
}


function TestCaseLine({ k, setEachLineData, eachLineData }: { k: number, setEachLineData: React.Dispatch<React.SetStateAction<LineData[]>>, eachLineData: LineData[]}): React.JSX.Element {

    const [tempData, setTempData] = React.useState<string>("");
    const [curr, setCurr] = React.useState<VariableData>(); 

    function addVariable() {
        setEachLineData(prevData => {
            const newData = [...prevData];
            newData[k] = { ...newData[k], tempData: null };
            return newData;
        });
        // console.log(eachLineData);
    }


    return (
        <div className="border-[#595959] rounded-md flex flex-col gap-1 ">
            <div className="flex gap-5 items-end">
                <h1 className="text-lg font-semibold">Line {k + 1}</h1>
                <Button variant="outline" className="py-1 h-fit border-[#595959]" onClick={addVariable}>Add a Variable</Button>
            </div>
            <div className="flex justify-between [&>*]:w-full gap-5" key={k}>
                <div id="linesOfTestcases" className="">
                    <Label htmlFor="varName"> Variable Name </Label>
                    <Input type="varName" id="varName" placeholder="Variable Name"
                        onChange={(e) => {
                            // setEachLineData(prevData => {
                            //     const newData = [...prevData];
                            //     newData[k] = { ...newData[k], [curr]: null };
                            //     return newData;
                            // });
                            setTempData(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <Label className="opacity-95"> Datatype </Label> <br />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="w-full bg-transparent border-[#595959] dark:hover:bg-[#292929]">data</Button>
                            {/* <Button variant="outline" className="w-full bg-transparent border-[#595959] dark:hover:bg-[#292929]">{eachLineData[k].datatype}</Button> */}
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="">
                            {/* <DropdownMenuLabel className=""> {eachLineData[k].datatype} </DropdownMenuLabel> */}
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup value={"popo"} onValueChange={
                            // <DropdownMenuRadioGroup value={eachLineData.varData.datatype} onValueChange={
                                (e) => {
                                    setEachLineData(prevData => {
                                        const newData = [...prevData];
                                        // newData[k] = { ...newData[k], . };
                                        return newData;
                                    });
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
                </div>
            </div>
            <hr />
            {/* {eachLineData[k].datatype === "integer" ? integer() : null} */}
        </div>

    );
}

export default function GenerateTestCase() {
    React.useEffect(() => {
        console.log("Run something")
    }, [])
    const [eachLineData, setEachLineData] = React.useState<Array<LineData>>([]);
    const [testCases, setTestCases] = React.useState<number>(0);
    // const [lines, setLines] = React.useState<Array<number>>([]);



    return (
        <div className="h-screen w-screen flex flex-col items-center justify-around">
            <Navbar></Navbar>
            <div className="h-[90%] w-full dark:bg-[#191919] dark:text-white p-5">
                <div className="h-full w-full border-2 border-[#595959]  p-4 rounded flex gap-4">
                    <div className="h-full w-full flex flex-col gap-2">
                        <div className="h-1/2 pb-7">
                            <Label htmlFor="Question" className="text-xl">Question</Label>
                            <Textarea className="h-full bg-transparent border-[#595959]" />
                        </div>
                        <div className="h-full pb-7">
                            <Label htmlFor="PreviewTestcases" className="text-xl h-1/6"> Preview </Label>
                            <div className="h-full border border-[#595959] p-4 px-6 rounded" id="Question">

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <div className="">
                            <Label htmlFor="totalCases" className="text-xl opacity-95">Configure Testcases</Label>
                            <div className="flex gap-2">
                                <Input className="w-1/3" type="totalCases" id="totalCases" placeholder="Number of Testcases" onChange={
                                    (e) => {
                                        setTestCases(Number(e.target.value));
                                    }
                                } />
                                <Button variant="outline" className="w-1/3 bg-transparent border-[#595959]" onClick={
                                    () => {
                                        // setLines([...lines, 1]);
                                        setEachLineData([...eachLineData, {}]);

                                        console.log(eachLineData);
                                    }
                                }> Add a line </Button>
                                <Button variant="outline" className="w-1/3 bg-transparent border-[#595959]"> Add Dynamic Lines</Button>
                                <Button variant="outline" className="w-1/3 bg-transparent border-[#595959]"> Create Testcases</Button>
                            </div>
                        </div>
                        <div className="overflow-y-scroll">

                            <h1 className="font-semibold">Lines of Testcases</h1>
                            <div id="addLine" className="flex flex-col gap-8 p-2  border border-[#595959] border-opacity-30 rounded ">
                                {
                                    eachLineData.map((line, index) => {
                                        return (
                                            <>
                                                <TestCaseLine k = {index} setEachLineData = {setEachLineData} eachLineData={eachLineData}/>
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