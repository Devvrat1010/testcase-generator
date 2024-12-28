"use client"
import React from "react";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/ui/navbar";
import TestCaseLine from "./components/TestCaseLine";
import { LineData } from "./components/datatypes";
import AlertBox from "@/components/ui/alertbox";
// /

export default function GenerateTestCase() {


    // return (
    // <div className="h-screen w-screen flex flex-col items-center justify-around">
    //     <Navbar></Navbar>
    //     <div className="w-full p-2 dark:bg-[#191919] dark:text-white">
    //         <div className="h-full w-full border-[#595959] rounded flex gap-4">
    //             <div className="h-full w-2/5 flex flex-col gap-4">
    //                 <div className="h-1/2 border border-[#595959] flex flex-col">
    //                     <Label htmlFor="Question" className="text-xl p-2">Question</Label>
    //                     <textarea className="h-5/6 resize-none bg-transparent outline-none p-1 text-sm border-0 border-t border-[#595959] rounded-none" />
    //                 </div>
    //                 <div className="h-1/2">
    //                     <div className="flex justify-between p-1 px-2 items-center border border-[#595959] border-b-0">
    //                         <Label htmlFor="PreviewTestcases" className="text-xl h-1/6"> Preview </Label>
    //                         <Button className="h-fit" onClick={copyToClipboard}>
    //                             Copy
    //                         </Button>
    //                     </div>
    //                     <div className="h-[88.8%] border border-[#595959] p-2 px-2 bg-gray-200 overflow-y-scroll" id="Preview">
    //                         <div className="bg-gray-300 px-1 ">{testcases}</div>
    //                         {
    //                             resultTestcases.map((l1, id1) => (
    //                                 <div key={"result " + id1} className="">
    //                                     {
    //                                         eachLineData.map((line, index) => (
    //                                             <div key={"line " + index} className={`${id1 % 2 === 0 ? 'bg-gray-200' : 'bg-gray-300'} hover:bg-yellow-50 px-1`} >
    //                                                 {
    //                                                     Object.keys(line).map((variable, index) => (
    //                                                         <React.Fragment key={"variable " + index}  >
    //                                                             {Array.isArray(l1?.[variable]) ? l1?.[variable].join(" "): l1?.[variable] }
    //                                                             &nbsp;
    //                                                         </React.Fragment>
    //                                                     ))
    //                                                 }
    //                                             </div>
    //                                         ))
    //                                     }
    //                                 </div>
    //                             ))
    //                         }
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="flex flex-col w-3/5 gap-2 border border-[#595959] [&>*]:px-2 py-2">
    //                 <div className="flex flex-col gap-2">
    //                     <Label htmlFor="totalCases" className="text-xl opacity-95">Configure Testcases</Label>
    //                     <div className="flex gap-2">
    //                         <Input className="w-1/3 h-10 px-3 py-2" type="totalCases" id="totalCases" placeholder="Number of Testcases" onChange={
    //                             (e) => {
    //                                 setTestcases(Number(e.target.value));
    //                             }
    //                         } />
    //                         <Button variant="outline" className="w-1/3 bg-transparent border-[#595959]" onClick={
    //                             () => {
    //                                 setEachLineData([...eachLineData, {}]);
    //                                 console.log(eachLineData);
    //                             }
    //                         }> Add a line </Button>
    //                         <Button variant="outline" className="w-1/3 bg-transparent border-[#595959]"> Add Dynamic Lines</Button>
    //                         <Button variant="outline" className="w-1/3 bg-transparent border-[#595959]" onClick={createTestcases}> Create Testcases</Button>
    //                     </div>
    //                 </div>
    //                 <hr className="border-0 border-t w-full border-[#595959]" />
    //                 <h1 className="font-semibold">Lines of Testcases</h1>

    //                 <div className="overflow-y-scroll border-[#595959] rounded">

    //                     <div id="addLine" className="flex flex-col gap-2">
    //                         {
    //                             eachLineData.map((line, index) => {
    //                                 return (
    //                                     <>
    //                                         <TestCaseLine key={"line " + index} k={index} setEachLineData={setEachLineData} eachLineData={eachLineData} showResult={showResult} />
    //                                     </>
    //                                 );
    //                             })
    //                         }

    //                     </div>
    //                 </div>
    //             </div>

    //         </div>
    //     </div>
    // </div>
    
    const [resultTestcases, setResultTestcases] = React.useState<Array<{ [key: string]: any }>>([]);
    const [eachLineData, setEachLineData] = React.useState<Array<LineData>>([{}]);
    const [testcases, setTestcases] = React.useState<number>(0);
    const [showResult, setShowResult] = React.useState<boolean>(false);
    const [currentQuestion, setCurrentQuestion] = React.useState<string>("");

    const [alert, setAlert] = React.useState<string>("");
    const [error, setError] = React.useState<boolean>(false);
    const toggleAlert = () => {
        // setError()
        setAlert("Invalid input, please check the input and try again");
        setError(true);
        setTimeout(() => {
            setError(false);
        }, 3000);
    }

    const createTestcases = async () => {
        const temp1 = { testcaseData: { eachLineData, testcases } };
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
        if(result[0].error){
            console.log("We found the error, ", result[0].error);
            toggleAlert();
            // alert("Invalid input, please check the input and try again");
            return;
        }
        else{
            console.log("No error found");
        }
        console.log(result, "result");
        setResultTestcases(result);
    }

    const copyToClipboard = () => {
        const copyText = document.getElementById("Preview") as HTMLDivElement;
        console.log(resultTestcases);
        navigator.clipboard.writeText(copyText.innerText);
    }

    return (
        <div className="h-screen w-screen flex flex-col">
            <div className={`alert bg-red-600 absolute  ${error ? "block translate-x-full transition-transform delay-500 " : "hidden left-[-100%]"}`}>
                {/* <AlertBox
                    message = {alert}
                    toggleAlert = {error}
                    />
                     */}
                <p>{alert}</p>
            </div>
            <Navbar />
            <div className="w-full flex-1 p-2 dark:bg-[#191919] dark:text-white overflow-hidden">
                <div className="h-full w-full border-[#595959] rounded flex gap-2 overflow-hidden">
                    <div className="h-full w-2/5 flex flex-col gap-4">
                        <div className="h-1/2 border border-[#595959] flex flex-col rounded">
                            <Label htmlFor="Question" className="text-xl p-2">Question</Label>
                            <textarea className="h-full resize-none bg-transparent outline-none p-1 text-sm border-0 border-t border-[#595959]" onChange={(e) => {
                                setCurrentQuestion(e.target.value);
                            }} />
                        </div>
                        <div className="h-1/2 flex flex-col rounded border border-[#595959]">
                            <div className="flex justify-between p-2 items-center border-b border-[#595959]">
                                <Label htmlFor="PreviewTestcases" className="text-xl">Preview</Label>
                                <Button className="h-fit" onClick={copyToClipboard}>
                                    Copy
                                </Button>
                            </div>
                            <div
                                className="flex-1 p-2 bg-gray-200 overflow-y-auto rounded-b"
                                id="Preview"
                            >
                                <div className="bg-gray-300 px-1">{testcases}</div>
                                {resultTestcases.map((l1, id1) => (
                                    <div key={"result " + id1}>
                                        {eachLineData.map((line, index) => (
                                            <div
                                                key={"line " + index}
                                                className={`${id1 % 2 === 0 ? "bg-gray-200" : "bg-gray-300"
                                                    } hover:bg-yellow-50 px-1`}
                                            >
                                                {Object.keys(line).map((variable, idx) => (
                                                    <React.Fragment key={"variable " + idx}>
                                                        {Array.isArray(l1?.[variable])
                                                            ? l1?.[variable].join(" ")
                                                            : l1?.[variable]}
                                                        &nbsp;
                                                    </React.Fragment>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* <div className="w-max"> */}

                    <div className="flex flex-col w-3/5 gap-4 rounded border-[#595959] overflow-hidden">
                        <div className="flex flex-col gap-2 p-2 border border-[#595959] rounded">
                            <Label htmlFor="totalCases" className="text-xl opacity-95">Configure Testcases</Label>
                            <div className="flex gap-2">
                                <Input
                                    className="w-1/3 h-10 px-3 py-2"
                                    type="number"
                                    id="totalCases"
                                    placeholder="Number of Testcases"
                                    onChange={(e) => setTestcases(Number(e.target.value))}
                                />
                                <Button
                                    variant="outline"
                                    className="w-1/3 bg-transparent border-[#595959]"
                                    onClick={() => setEachLineData([...eachLineData, {}])}
                                >
                                    Add a line
                                </Button>
                                <Button variant="outline" className="w-1/3 bg-transparent border-[#595959]">
                                    Add Dynamic Lines
                                </Button>
                                <Button
                                    variant="outline"
                                    className="w-1/3 bg-transparent border-[#595959]"
                                    onClick={createTestcases}
                                >
                                    Create Testcases
                                </Button>
                            </div>
                        </div>
                        {/* <hr className="border-0 border-t w-full border-[#595959]" /> */}
                        <div className="flex-1 overflow-y-auto border border-[#595959] rounded p-2 pt-0 ">
                        <h1 className="font-semibold px-1 p-2 border-[#595959]">Lines of Testcases</h1>
                            <div id="addLine" className="flex flex-col gap-2">
                                {eachLineData.map((line, index) => (
                                    <TestCaseLine
                                        key={"line " + index}
                                        k={index}
                                        setEachLineData={setEachLineData}
                                        eachLineData={eachLineData}
                                        showResult={showResult}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* </div> */}
        </div>
    );

    // );
}
