'use client'
import Card from '@/components/genericCard'
import Filter from '@/components/genericFilter'
import Navbar from '@/components/navbar'
import { classes } from '../../data/classes'
import { useContext, useState } from 'react'
import { AuthContext } from '@/contexts/context'

export default function () {
    const { user } = useContext(AuthContext)
    const [activeFilter, isFilterActive] = useState(false)
    const [isFilterSelected, selectedFilter] = useState('')

    const filters = [
        {
            name: 'category'
        },
        {
            name: 'dificulty'
        }
    ]

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

                {classes && (
                    <div className=" w-max grid grid-cols-5 gap-6">
                        {activeFilter
                            ? classes.map((lesson, index) => {
                                  if (lesson.category == 'stocks') {
                                      return <Card key={index} name={lesson.name} description={lesson.description} rank={lesson.rank} image={lesson.image} />
                                  }
                              })
                            : classes.map((lesson, index) => {
                                  return <Card key={index} name={lesson.name} description={lesson.description} rank={lesson.rank} image={lesson.image} />
                              })}
                    </div>
                )}
            </div>
        </div>
    )
}
