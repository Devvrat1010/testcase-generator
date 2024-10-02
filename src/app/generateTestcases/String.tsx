import { VariableData } from "./datatypes";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function String({ k, setCurr, curr }: { k: number, setCurr: React.Dispatch<React.SetStateAction<VariableData | undefined>>, curr: VariableData }): React.JSX.Element {
    // const [lowerCaseLettersRange, setLowerCaseLettersRange] = useState<Array<string>>([]);
    return (
        <div>

            <div className="flex justify-between gap-4 items-center">
                <Label> Lowercase letters </Label>
                <div className="flex gap-2 items-center [&>*]:w-1/2 [&>*]:p-1 [&>*]:h-fit">

                {/* <div className="flex w-fit gap-2 items-center [&>*]:w-min [&>*]:p-1 [&>*]:h-fit"> */}
                    <Input className="w-fit" type="string" id="lowStart" placeholder="a" onChange={
                        (e) => {
                            setCurr({ ...curr, varData: { ...curr.varData, lowerCaseLettersRange: [e.target.value, "z"] } });
                        }
                    } />
                    -
                    <Input type="string" id="lowEnd" placeholder="z" onChange={
                        (e) => {
                            setCurr({ ...curr, varData: { ...curr.varData, lowerCaseLettersRange: [curr.varData.lowerCaseLettersRange[0], e.target.value] } });
                        }
                    } />
                </div>
                <p className="text-center font-bold"> OR </p>
                <Label htmlFor="intValues" className="">Specific Letter(s)</Label>
                <Input className="" type="string" id="intValues" placeholder="Letters" onChange={
                    (e) => {
                        // create a function to split the string and remove duplicates from the array
                        const temp = e.target.value.split(",").filter((item, index, self) => self.indexOf(item) === index);
                        setCurr({ ...curr, varData: { lowerCaseLettersRange: [], lowerCaseLetters: temp } });
                    }
                } />
            </div>

            
            <div className="flex justify-between gap-4 items-center">
                <Label> Uppercase letters </Label>
                <div className="flex gap-2 items-center [&>*]:w-1/2 [&>*]:p-1 [&>*]:h-fit">
                    <Input type="string" id="UpStart" placeholder="A" onChange={
                        (e) => {
                            setCurr({ ...curr, varData: { ...curr.varData, upperCaseLettersRange: [e.target.value, "Z"] } });
                        }
                    } />
                    -
                    <Input type="string" id="UpEnd" placeholder="Z" onChange={
                        (e) => {
                            setCurr({ ...curr, varData: { ...curr.varData, upperCaseLettersRange: [curr.varData.upperCaseLettersRange[0], e.target.value] } });
                        }
                    } />
                </div>
                <p className="text-center font-bold"> OR </p>
                <Label htmlFor="intValues" className="w-2/5">Specific Letter(s)</Label>
                <Input className="w-full" type="string" id="intValues" placeholder="Letters" onChange={
                    (e) => {
                        // create a function to split the string and remove duplicates from the array
                        const temp = e.target.value.split(",").filter((item, index, self) => self.indexOf(item) === index);
                        setCurr({ ...curr, varData: { length: [], upperCaseLetters: temp } });
                    }
                } />
            </div>
            <div className="flex justify-between gap-4 items-center">
                <Label> Number </Label>
                <div className="flex gap-2 items-center [&>*]:w-1/2 [&>*]:p-1 [&>*]:h-fit">
                    <Input type="string" id="lowStart" placeholder="start" onChange={
                        (e) => {
                            setCurr({ ...curr, varData: { ...curr.varData, stringNumbersRange: [e.target.value, "9"] } });
                        }
                    } />
                    -
                    <Input type="string" id="lowEnd" placeholder="end" onChange={
                        (e) => {
                            setCurr({ ...curr, varData: { ...curr.varData, stringNumbersRange: [curr.varData.stringNumbersRange[0], e.target.value] } });
                        }
                    } />
                </div>
                <p className="text-center font-bold"> OR </p>
                <Label htmlFor="intValues" className="w-2/5">Specific Value(s)</Label>
                <Input className="w-full" type="string" id="intValues" placeholder="Integer" onChange={
                    (e) => {
                        // create a function to split the string and remove duplicates from the array
                        const temp = e.target.value.split(",").filter((item, index, self) => self.indexOf(item) === index);
                        setCurr({ ...curr, varData: { range: [], lowerCaseLetters: temp } });
                    }
                } />
            </div>
        </div>
    );
}
