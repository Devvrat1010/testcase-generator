import ModeToggle from "./modeToggle";
export default function Navbar() {
    return (
        <div className="dark:bg-[#191919] w-screen">
            <div className="p-4 justify-end">
                <ModeToggle/>
            </div>
            <hr />
        </div>
    )
}