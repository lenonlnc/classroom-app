import Navbar from '@/components/navbar'
import { courses } from '../../data/classes'

export default function () {
    return (
        <div className="flex flex-col">
            {/* navbar */}
            <Navbar />
            {/* conteúdo */}
            <div className="flex flex-col gap-10">
                <div class=" bg-gradient-to-r w-full h-96 from-violet-500 to-fuchsia-500 p-10 flex ">
                    <div className="flex gap-4 flex-col flex-1 ">
                        <p className="text-white font-semibold text-7xl">Aula de desenvolvimento web</p>
                        <p className="text-zinc-200 pl-2 ">Descrição da aula vai vir aqui</p>
                        <p className="text-zinc-200 pl-2">Duração</p>
                        <p className="text-zinc-200 pl-2">Instrutor</p>
                        <p className="text-zinc-200 pl-2">Dificuldade</p>
                    </div>
                    <div className="cursor-pointer group ">
                        <i className="fa-regular fa-star text-white group-hover:text-violet-400 transition ease-in duration-150s font-semibold text-4xl"></i>
                    </div>
                </div>
                <div className="p-10 flex gap-96">
                    <div className="bg-black flex items-center justify-center " style={{ width: 1000 + 'px', height: 600 + 'px' }}>
                        <i className="fa-solid fa-play text-white font-semibold text-7xl"></i>
                    </div>
                    <div className="flex flex-col gap-6">
                        <p className="text-3xl font-semibold">Avaliações</p>

                        <div className="w-96 shadow-md flex bg-white hover:bg-zinc-100 transition ease-in duration-150s cursor-pointer items-center group p-4">
                            <div className="flex flex-col flex-1 gap-2">
                                <p className="group-hover:text-violet-500 transition ease-in duration-150s">Introdução</p>
                                <p className="text-sm text-zinc-400">Descrição</p>
                            </div>
                            <i className="fa-solid fa-chevron-down group-hover:text-violet-500 transition ease-in duration-150s text-black font-semibold"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
