import { SvgList } from "../Utils/SVG/SvgList";

function NavBar() {
    return (
        <nav className="flex bg-secondary w-full justify-between px-10 lg:px-20 py-4">
            {
                SvgList.map((svg, index) => {
                    return (
                        <button key={index} className="svg-hover">
                            {svg}
                        </button>
                    )
                })
            }
        </nav>
    )
}

export default NavBar;