import { StringData } from "./datatypes";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface StringProps {
    k: number;
    setDatatypeData: React.Dispatch<React.SetStateAction<StringData | undefined>>;
    datatypeData: StringData | undefined;
    setErrorLine: React.Dispatch<React.SetStateAction<string>>;
}

export default function String(props: StringProps): React.JSX.Element {
    const { k, setDatatypeData, datatypeData, setErrorLine } = props;

    const createString = (e: React.ChangeEvent<HTMLInputElement>) => {
        return Array.from(new Set(e.target.value.split(",").filter(item => item.length === 1))).join("");
    };

    return (
        <div className="flex flex-col gap-1 p:text-red-400">
            <div className="flex gap-4 items-center">
                <Label>Length: </Label>
                <Input type="text" id="stringLength" placeholder="Variable name" onChange={(e) => {
                    if (e.target.value.split(" ").length > 1 || e.target.value === "" || e.target.value.split(",").length > 1) {
                        alert("Please enter a valid single word");
                        return;
                    }
                    setDatatypeData({ ...datatypeData, length: e.target.value });
                }} />
                <p className="font-bold"> OR </p>
                <Input type="number" id="stringLength" placeholder="Static value" onChange={(e) => {
                    setDatatypeData({ ...datatypeData, length: Number(e.target.value) });
                }} />
            </div>

            <div className="flex justify-between gap-4 items-center">
                <Label>Lowercase letters</Label>
                <div className="flex gap-2 items-center [&>*]:w-1/2 [&>*]:p-1 [&>*]:h-fit">
                    <Input maxLength={1} type="text" id="lowStart" placeholder="a" onChange={(e) => {
                        let temp = datatypeData?.lowerCaseLettersRange ? datatypeData.lowerCaseLettersRange[1] : "z";
                        setDatatypeData({ ...datatypeData, lowerCaseLettersRange: [e.target.value, temp], lowerCaseLetters: "" });
                    }} />
                    -
                    <Input maxLength={1} type="text" id="lowEnd" placeholder="z" onChange={(e) => {
                        let temp = datatypeData?.lowerCaseLettersRange ? datatypeData.lowerCaseLettersRange[0] : "a";
                        setDatatypeData({ ...datatypeData, lowerCaseLettersRange: [temp, e.target.value], lowerCaseLetters: "" });
                    }} />
                </div>
                <p className="text-center font-bold"> OR </p>
                <Label htmlFor="lowLetter">Specific Letter(s)</Label>
                <Input type="text" id="lowLetter" placeholder="Letters" onChange={(e) => {
                    setDatatypeData({ ...datatypeData, lowerCaseLettersRange: [], lowerCaseLetters: createString(e)});
                }} />
            </div>

            <div className="flex justify-between gap-4 items-center">
                <Label>Uppercase letters</Label>
                <div className="flex gap-2 items-center [&>*]:w-1/2 [&>*]:p-1 [&>*]:h-fit">
                    <Input type="text" maxLength={1} className="uppercase" id="UpStart" placeholder="A" onChange={(e) => {
                        let temp = datatypeData?.upperCaseLettersRange ? datatypeData.upperCaseLettersRange[1] : "Z";
                        setDatatypeData({ ...datatypeData, upperCaseLettersRange: [e.target.value, temp], upperCaseLetters: "" });
                    }} />
                    -
                    <Input type="text" maxLength={1} className="uppercase" id="UpEnd" placeholder="Z" onChange={(e) => {
                        let temp = datatypeData?.upperCaseLettersRange ? datatypeData.upperCaseLettersRange[0] : "A";
                        setDatatypeData({ ...datatypeData, upperCaseLettersRange: [temp, e.target.value], upperCaseLetters: "" });
                    }} />
                </div>
                <p className="text-center font-bold"> OR </p>
                <Label htmlFor="upLetters">Specific Letter(s)</Label>
                <Input type="text" id="upLetters" placeholder="Letters" onChange={(e) => {
                    setDatatypeData({ ...datatypeData, upperCaseLettersRange: [], upperCaseLetters: createString(e) });
                }} />
            </div>

            <div className="flex justify-between gap-4 items-center">
                <Label>Number</Label>
                <div className="flex gap-2 items-center [&>*]:w-1/2 [&>*]:p-1 [&>*]:h-fit">
                    <Input type="number" id="lowStart" placeholder="start" onChange={(e) => {
                        let temp = datatypeData?.stringNumbersRange ? datatypeData.stringNumbersRange[1] : "9";
                        setDatatypeData({ ...datatypeData, stringNumbersRange: [e.target.value, temp], stringNumbers: "" });
                    }} />
                    -
                    <Input type="number" id="lowEnd" placeholder="end" onChange={(e) => {
                        let temp = datatypeData?.stringNumbersRange ? datatypeData.stringNumbersRange[0] : "0";
                        setDatatypeData({ ...datatypeData, stringNumbersRange: [temp, e.target.value], stringNumbers: "" });
                    }} />
                </div>
                <p className="text-center font-bold"> OR </p>
                <Label htmlFor="intValues">Specific Value(s)</Label>
                <Input type="text" id="intValues" placeholder="Integer" onChange={(e) => {
                    setDatatypeData({ ...datatypeData, stringNumbersRange: [], stringNumbers: createString(e) });
                }} />
            </div>

            <div className="flex justify-between gap-4 items-center">
                <Label htmlFor="specialCharacters">Special Characters</Label>
                <Input type="text" id="specialCharacters" placeholder="Characters" onChange={(e) => {
                    const temp = e.target.value.split(",").filter((item, index, self) => item.length === 1 && self.indexOf(item) === index).join("");
                    setDatatypeData({ ...datatypeData, specialCharacters: temp });
                }} />
            </div>
        </div>
    );
}
