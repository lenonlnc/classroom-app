export default function Home() {
    return (
        <div className="h-screen flex items-center flex-col justify-center gap-4 ">
            <div className="font-semibold text-3xl">
                <h1>Iniciar sessão</h1>
            </div>
            <div className="flex flex-col items-center gap-2">
                <div>
                    <input
                        type="text"
                        name="email"
                        placeholder="email@email.com"
                        className="p-2 w-96 bg-violet-100 border shadow-sm rounded border-slate-300 focus:outline-none focus:border-violet-500 focus:ring-violet-500"
                    ></input>
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="**********"
                        className="p-2 bg-violet-100 w-96 border shadow-sm rounded border-slate-300 focus:outline-none focus:border-violet-500 focus:ring-violet-500"
                    ></input>
                </div>
            </div>
            <div className="bg-violet-500 text-white p-4 rounded w-96 flex items-center justify-center">Login</div>
            <a className="text-violet-400 cursor-pointer hover:text-violet-600">Esqueceu sua senha?</a>
        </div>
    )
}
