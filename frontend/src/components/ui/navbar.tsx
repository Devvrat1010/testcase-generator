import ModeToggle from "./modeToggle";
export default function Navbar() {
    return (
        // <div className="dark:bg-[#191919] w-screen lg:h-[9.8%]">
        <div className="dark:bg-[#191919] w-screen relative [flex: 0 1 auto;]">
            <div className="p-4 justify-end h-[73px]">
                <ModeToggle/>
            </div>
            <hr />
        </div>
    )
}