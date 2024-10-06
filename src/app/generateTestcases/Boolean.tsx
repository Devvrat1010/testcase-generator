// create a component for taking boolean input

import React, { useState } from 'react';
import { VariableData } from './datatypes';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BooleanData } from './datatypes';

// export default function Boolean({ k, setDatatypeData, datatypeData }: { k: number, setDatatypeData: React.Dispatch<React.SetStateAction<BooleanData | undefined>>, datatypeData:  BooleanData | undefined }): React.JSX.Element {
export default function Boolean({ k, setDatatypeData, datatypeData, setErrorLine }: { k: number, setDatatypeData: React.Dispatch<React.SetStateAction<BooleanData | undefined>>, datatypeData:  BooleanData | undefined, setErrorLine: React.Dispatch<React.SetStateAction<string>> }): React.JSX.Element  {
    const [value, setValue] = useState<boolean>(false);

    return (
        <div className="flex flex-col justify-between gap-4 items-center">
            <form>
                <Label htmlFor="boolean">1 or 0 for fixed boolean <span className='text-red-600'>(optional)</span></Label>
                <div className="flex gap-2 items-center [&>*]:w-1/2 [&>*]:p-1 [&>*]:h-fit">
                    <Input type="number" min="0" max="1" id="boolean" placeholder="start" onChange={
                        (e) => {
                            const checked = e.target.value === "1";
                            setValue(checked);
                            setDatatypeData({ ...datatypeData, value: checked });
                            // setCurr({ ...curr, varData: { ...curr.varData, value: checked } });
                        }
                    } />
                </div>
            </form>
        </div>
    );
}