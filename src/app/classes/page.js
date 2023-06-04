'use client'
import Card from '@/components/genericCard'
import Filter from '@/components/genericFilter'
import Navbar from '@/components/navbar'
import { classes } from '../../data/classes'
import { useContext, useState } from 'react'
import { AuthContext } from '@/contexts/context'
import { useCustomEventListener } from 'react-custom-events'

export default function () {
    const { user } = useContext(AuthContext)

    const [activeFilter, isFilterActive] = useState(false)
    const [filter, setFilter] = useState(null)

    useCustomEventListener('select-filter', (data) => {
        if (data) {
            isFilterActive(true)
            setFilter(data)
        }
    })

    return (
        <div className="flex flex-col  mx-auto">
            {/* navbar */}
            <Navbar user={user} />
            {/* conteúdo */}
            <div className="p-20 flex flex-col gap-6">
                <div className="flex items-center gap-4">
                    <p className="font-bold text-3xl flex-1">Aulas desbloqueadas</p>
                    <Filter />
                </div>
                <hr className="bg-zinc-200 h-0 w-full" />

                {classes && (
                    <div className="grid grid-cols-4 gap-6">
                        {activeFilter
                            ? classes.map((lesson) => {
                                  if (lesson.category == filter || lesson.dificulty_level == filter) {
                                      return <Card key={lesson.id} lesson={lesson} />
                                  }
                              })
                            : classes.map((lesson) => {
                                  return <Card key={lesson.id} lesson={lesson} />
                              })}
                    </div>
                )}
            </div>
        </div>
    )
}
