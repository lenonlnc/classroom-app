'use client'
import Navbar from '@/components/navbar'
import { classes } from '../../../data/classes'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
export default function Details({ params }) {
    params: {
        id: Number
    }
    const router = useRouter()

    const [favorite, setFavorite] = useState(false)
    function setAsFavorite() {
        setFavorite(!favorite)
    }

    let selectedLesson = classes.find((c) => c.id == params.id)

    function returnToPrevious() {
        router.push('/classes')
    }
    return (
        <div className="flex flex-col">
            {/* navbar */}
            <Navbar />
            {/* conteúdo */}
            <div className="flex flex-col gap-10">
                <div className=" bg-gradient-to-r w-full gap-4 h-96 from-violet-500 to-fuchsia-500 p-10 flex ">
                    <div className="cursor-pointer" onClick={returnToPrevious}>
                        <i className="text-3xl  hover:text-fuchsia-500 transition duration-150s ease-in fa-solid pb-40 fa-chevron-left text-white" />
                    </div>
                    <div className="flex gap-4 flex-col pt-48 flex-1 ">
                        <p className="text-white font-semibold text-7xl">{selectedLesson.name}</p>
                        <p className="text-zinc-200 pl-2 ">Descrição: {selectedLesson.description}</p>
                    </div>
                    <div onClick={setAsFavorite} className="cursor-pointer group ">
                        {favorite ? (
                            <i className="fa-solid fa-star text-white group-hover:text-violet-400 transition ease-in duration-150s font-semibold text-4xl"></i>
                        ) : (
                            <i className="fa-regular fa-star text-white group-hover:text-violet-400 transition ease-in duration-150s font-semibold text-4xl"></i>
                        )}
                    </div>
                </div>
                <div className="p-10 flex gap-96">
                    <div className="flex flex-col gap-4">
                        <Image className="rounded" src={selectedLesson.image} width={800} height={600} alt="Couse image" />
                        <div className="flex items-center gap-2">
                            <p className="text-zinc-950 font-semibold text-2xl pl-2">Duração:</p>
                            <span className="text-2xl">{selectedLesson.duration} horas</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-zinc-950 font-semibold text-2xl pl-2">Instrutor:</p>
                            <span className="text-2xl">{selectedLesson.instructor}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-zinc-950 font-semibold text-2xl pl-2">Dificuldade:</p>
                            <span className="text-2xl">{selectedLesson.dificulty_level}</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <p className="text-3xl font-semibold">Avaliações</p>

                        <div className="w-96 shadow-md flex bg-white hover:bg-zinc-100 transition ease-in duration-150s cursor-pointer items-center group p-4">
                            <div className="flex flex-col flex-1 gap-2">
                                <p className="group-hover:text-violet-500 transition ease-in duration-150s">Introdução à web</p>
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

export function filteringBy(type) {
    console.log('filter', type)
}
