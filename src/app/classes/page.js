'use client'
import Card from '@/components/genericCard'
import Filter from '@/components/genericFilter'
import Navbar from '@/components/navbar'
import { classes } from '../../data/classes'
import { useContext } from 'react'
import { AuthContext } from '@/contexts/context'
import { parseCookies } from 'nookies'

export default function () {
    const { user } = useContext(AuthContext)
    return (
        <div className="flex flex-col">
            {/* navbar */}
            <Navbar user={user} />

            {/* conteúdo */}
            <div className="p-20 flex flex-col gap-10">
                <div className="flex items-center gap-4">
                    <p className="font-bold text-3xl flex-1">Aulas desbloqueadas</p>
                    <Filter />
                </div>
                <hr className="bg-zinc-200 h-0 w-full" />
                <div className=" w-max grid grid-cols-5 gap-6">
                    {classes.map((lesson, index) => {
                        return <Card key={index} name={lesson.name} description={lesson.description} rank={lesson.rank} image={lesson.image} />
                    })}
                </div>
            </div>
        </div>
    )
}
