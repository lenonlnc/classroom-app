export default function Navbar() {
    return (
        <div className="bg-violet-500 p-6 w-full m-0 flex items-center gap-6 px-44 justify-end">
            <i className="fa-solid fa-magnifying-glass text-white"></i>
            <input
                className=" rounded-full p-3 bg-violet-100 border shadow-sm  focus:outline-none focus:border-violet-500 focus:ring-violet-500"
                type="text"
                name="search"
                placeholder="pesquisar por curso"
            />
            <div className="">
                <div className="bg-violet-900 py-1 cursor-pointer rounded-full w-10 h-10 flex-items-center flex justify-center">
                    <p className="text-white font-bold text-xl">L</p>
                </div>
            </div>
        </div>
    )
}
