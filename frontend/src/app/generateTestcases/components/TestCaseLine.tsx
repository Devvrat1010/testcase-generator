import { LineData } from "./datatypes";
import React from 'react';
import { Button } from "@/components/ui/button";
import EachVariableData from "./EachVariableData";

export default function TestCaseLine({ k, setEachLineData, eachLineData, showResult }: { k: number, setEachLineData: React.Dispatch<React.SetStateAction<LineData[]>>, eachLineData: LineData[], showResult: boolean }): React.JSX.Element {

    const [res, setRes] = React.useState<number>(1);

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
