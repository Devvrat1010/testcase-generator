import { StringData, IntegerData, FloatData, BooleanData, ArrayData, VariableData } from "./datatypes";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// export default function String({ k, setDatatypeData, datatypeData, setErrorLine }: { k: number, setDatatypeData: React.Dispatch<React.SetStateAction<StringData | undefined>>, datatypeData:  StringData | undefined, setErrorLine: React.Dispatch<React.SetStateAction<string>> }): React.JSX.Element {
interface StringProps {
    k: number;
    setDatatypeData: React.Dispatch<React.SetStateAction<StringData | undefined>>;
    datatypeData: StringData | undefined;
    setErrorLine: React.Dispatch<React.SetStateAction<string>>;
}

export default function String(props: StringProps): React.JSX.Element {
    const { k, setDatatypeData, datatypeData, setErrorLine} = props;
    return (
        <div className="flex flex-col gap-1">
            <div className="flex gap-4 items-center">
                <Label>Length: </Label>
                <Input type="text" id="stringLength" placeholder="Variable name" onChange={
                    (e) => {
                        // create a function to check if the input is only single word
                        if(e.target.value.split(" ").length > 1){
                            // setErrorLine("Please enter a single word");
                            alert("Please enter a single word");
                            return;
                        }
                        if(e.target.value === ""){
                            alert("Please enter a valid variable name");
                            return;
                        }
                        if(e.target.value.split(",").length > 1){
                            alert("Please enter a single word");
                            return;
                        }
                        setDatatypeData({ ...datatypeData, length: e.target.value });
                    }
                } />
                <p> OR </p>
                <Input type="number" id="stringLength" placeholder="Static value" onChange={
                    (e) => {
                        setDatatypeData({ ...datatypeData, length: Number(e.target.value) });
                    }
                } />
            </div>

            <div className="flex justify-between gap-4 items-center">
                <Label> Lowercase letters </Label>
                <div className="flex gap-2 items-center [&>*]:w-1/2 [&>*]:p-1 [&>*]:h-fit">

                    <Input className="w-" maxLength={1} type="string" id="lowStart" placeholder="a" onChange={
                        (e) => {
                            let temp = datatypeData?.lowerCaseLettersRange ? datatypeData.lowerCaseLettersRange[1] : "z";
                            setDatatypeData({ ...datatypeData, lowerCaseLettersRange: [e.target.value, temp], lowerCaseLetters:[]});
                        }
                    } />
                    -   
                    <Input maxLength={1} type="string" id="lowEnd" placeholder="z" onChange={
                        (e) => {
                            let temp = datatypeData?.lowerCaseLettersRange ? datatypeData.lowerCaseLettersRange[0] : "z";
                            setDatatypeData({ ...datatypeData, lowerCaseLettersRange: [temp, e.target.value], lowerCaseLetters:[] });
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
                        setDatatypeData({ ...datatypeData, lowerCaseLettersRange: [], lowerCaseLetters: temp });
                    }
                } />
            </div>

            
            <div className="flex justify-between gap-4 items-center">
                <Label> Uppercase letters </Label>
                <div className="flex gap-2 items-center [&>*]:w-1/2 [&>*]:p-1 [&>*]:h-fit">
                    <Input type="text" maxLength={1} className="uppercase" id="UpStart" placeholder="A"  onChange={
                        (e) => {
                            let temp = datatypeData?.upperCaseLettersRange ? datatypeData.upperCaseLettersRange[1] : "Z";
                            setDatatypeData({ ...datatypeData, upperCaseLettersRange: [e.target.value, temp], upperCaseLetters:[] });
                        }
                    } />
                    -
                    <Input type="string" maxLength={1} className="uppercase" id="UpEnd" placeholder="Z" onChange={
                        (e) => {
                            let temp = datatypeData?.upperCaseLettersRange ? datatypeData.upperCaseLettersRange[1] : "A";
                            setDatatypeData({ ...datatypeData, upperCaseLettersRange: [temp, e.target.value], upperCaseLetters:[] });
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
                        setDatatypeData({ ...datatypeData, upperCaseLettersRange:[], upperCaseLetters: temp });
                    }
                } />
            </div>
            <div className="flex justify-between gap-4 items-center">
                <Label> Number </Label>
                <div className="flex gap-2 items-center [&>*]:w-1/2 [&>*]:p-1 [&>*]:h-fit">
                    <Input type="number" id="lowStart" placeholder="start" onChange={
                        (e) => {
                            let temp = datatypeData?.stringNumbersRange ? datatypeData.stringNumbersRange[1] : "9";
                            setDatatypeData({ ...datatypeData, stringNumbersRange: [e.target.value, temp], stringNumbers:[] });
                        }
                    } />
                    -
                    <Input type="number" id="lowEnd" placeholder="end" onChange={
                        (e) => {
                            let temp = datatypeData?.stringNumbersRange ? datatypeData.stringNumbersRange[1] : "0";
                            setDatatypeData({ ...datatypeData, stringNumbersRange: [temp, e.target.value], stringNumbers:[] });
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
                        setDatatypeData({ ...datatypeData, stringNumbersRange: [], stringNumbers: temp });
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
                        setDatatypeData({ ...datatypeData, specialCharacters: temp });
                    }
                } />
            </div>
        </div>
    );
}
