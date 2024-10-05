// create a component for taking boolean input

import React, { useState } from 'react';
import { VariableData } from './datatypes';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Boolean({ k, setCurr, curr }: { k: number, setCurr: React.Dispatch<React.SetStateAction<VariableData | undefined>>, curr: VariableData}): React.JSX.Element {
    const [value, setValue] = useState<boolean>(false);

    return (
        <div className="flex flex-col justify-between gap-4 items-center">
            <form>
                <Label>1 or 0 for fixed boolean <span className='text-red-600'>(optional)</span></Label>
                <div className="flex gap-2 items-center [&>*]:w-1/2 [&>*]:p-1 [&>*]:h-fit">
                    <Input type="number" min = "0" max="1" id="boolean" placeholder="start" onChange={
                        (e) => {
                            setValue(e.target.checked);
                            setCurr({ ...curr, varData: { ...curr.varData, value: e.target.checked } });
                        }
                    } />
                </div>
            </form>
        </div>
    );
}