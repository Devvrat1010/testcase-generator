import { VariableData } from "./datatypes";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function String({ k, setCurr, curr }: { k: number, setCurr: React.Dispatch<React.SetStateAction<VariableData | undefined>>, curr: VariableData }): React.JSX.Element {
    return (
        <div>

            <div className="flex justify-between gap-4 items-center">
                <Label> Lowercase letters </Label>
                <div className="flex gap-2 items-center [&>*]:w-1/2 [&>*]:p-1 [&>*]:h-fit">

                    <Input className="w-" maxLength={1} type="string" id="lowStart" placeholder="a" onChange={
                        (e) => {
                            let temp = "z";
                            try{
                                temp = curr.varData.lowerCaseLettersRange[1];
                            }catch(e){
                                console.log(e);
                            }
                            setCurr({ ...curr, varData: { ...curr.varData, lowerCaseLettersRange: [e.target.value, temp], lowerCaseLetters:[]}});
                        }
                    } />
                    -
                    <Input maxLength={1} type="string" id="lowEnd" placeholder="z" onChange={
                        (e) => {
                            let temp = "a";
                            try{
                                temp = curr.varData.lowerCaseLettersRange[0];
                            }catch(e){
                                console.log(e);
                            }
                            setCurr({ ...curr, varData: { ...curr.varData, lowerCaseLettersRange: [temp, e.target.value], lowerCaseLetters:[] }});
                        }
                    } />
                </div>
                <p className="text-center font-bold"> OR </p>
                <Label htmlFor="intValues" className="">Specific Letter(s)</Label>
                <Input className="" type="string" id="lowLetter" placeholder="Letters" onChange={
                    (e) => {
                        // create a function to split the string and remove duplicates from the array
                        const temp = e.target.value.split(",").filter((item, index, self) =>{
                            if(item.length != 1){
                                return false;
                            }
                            return self.indexOf(item) === index;
                        });
                        setCurr({ ...curr, varData: { ...curr.varData, lowerCaseLettersRange: [], lowerCaseLetters: temp } });
                    }
                } />
            </div>

            
            <div className="flex justify-between gap-4 items-center">
                <Label> Uppercase letters </Label>
                <div className="flex gap-2 items-center [&>*]:w-1/2 [&>*]:p-1 [&>*]:h-fit">
                    <Input type="text" maxLength={1} className="uppercase" id="UpStart" placeholder="A"  onChange={
                        (e) => {
                            let temp = "Z";
                            try{
                                temp = curr.varData.upperCaseLettersRange[1];
                            }catch(e){
                                console.log(e);
                            }
                            setCurr({ ...curr, varData: { ...curr.varData, upperCaseLettersRange: [e.target.value, temp], upperCaseLetters:[] }});
                        }
                    } />
                    -
                    <Input type="string" maxLength={1} className="uppercase" id="UpEnd" placeholder="Z" onChange={
                        (e) => {
                            let temp = "A";
                            try{
                                temp = curr.varData.upperCaseLettersRange[0];
                            }catch(e){
                                console.log(e);
                            }
                            setCurr({ ...curr, varData: { ...curr.varData, upperCaseLettersRange: [temp, e.target.value], upperCaseLetters:[] }});
                        }
                    } />
                </div>
                <p className="text-center font-bold"> OR </p>
                <Label htmlFor="intValues" className="w-2/5">Specific Letter(s)</Label>
                <Input className="w-full" type="string" id="upLetters" placeholder="Letters" onChange={
                    (e) => {
                        // create a function to split the string and remove duplicates from the array
                        const temp = e.target.value.split(",").filter((item, index, self) =>{
                            if(item.length != 1){
                                return false;
                            }
                            return self.indexOf(item) === index;
                        });
                        setCurr({ ...curr, varData: { ...curr.varData, upperCaseLettersRange:[], upperCaseLetters: temp } });
                    }
                } />
            </div>
            <div className="flex justify-between gap-4 items-center">
                <Label> Number </Label>
                <div className="flex gap-2 items-center [&>*]:w-1/2 [&>*]:p-1 [&>*]:h-fit">
                    <Input type="number" id="lowStart" placeholder="start" onChange={
                        (e) => {
                            let temp = "9";
                            try{
                                temp = curr.varData.stringNumbersRange[1];
                            }catch(e){
                                console.log(e);
                            }
                            setCurr({ ...curr, varData: { ...curr.varData, stringNumbersRange: [e.target.value, temp], stringNumbers:[] } });
                        }
                    } />
                    -
                    <Input type="number" id="lowEnd" placeholder="end" onChange={
                        (e) => {
                            let temp = "0";
                            try{
                                temp = curr.varData.stringNumbersRange[0];
                            }catch(e){
                                console.log(e);
                            }
                            setCurr({ ...curr, varData: { ...curr.varData, stringNumbersRange: [temp, e.target.value], stringNumbers:[] } });
                        }
                    } />
                </div>
                <p className="text-center font-bold"> OR </p>
                <Label htmlFor="intValues" className="w-2/5">Specific Value(s)</Label>
                <Input className="w-full" type="string" id="intValues" placeholder="Integer" onChange={
                    (e) => {
                        // create a function to split the string and remove duplicates from the array
                        const temp = e.target.value.split(",").filter((item, index, self) => {
                            if(item.length != 1){
                                return false;
                            }
                            return self.indexOf(item) === index
                        });
                        setCurr({ ...curr, varData: { ...curr.varData, stringNumbersRange: [], stringNumbers: temp } });
                    }
                } />
            </div>
            <div className="flex justify-between gap-4 items-center">
                <Label htmlFor="specialCharacters">Special Characters</Label>
                <Input className="w-full" type="text" id="specialCharacters" placeholder="Integer" onChange={
                    (e) => {
                        // create a function to split the string and remove duplicates from the array
                        const temp = e.target.value.split(",").filter((item, index, self) => {
                            console.log(item);
                            if(item.length != 1){
                                return false;
                            }
                            return self.indexOf(item) === index
                        });
                        console.log(temp);
                        setCurr({ ...curr, varData: { ...curr.varData, specialCharacters: temp } });
                    }
                } />
            </div>
        </div>
    );
}
