import { useState } from 'react'

export default function Filter() {
    const [open, isOpen] = useState(false)
    const [subFilterOpen, isSubfilterOpen] = useState(false)

    const openFilters = () => {
        isOpen(!open)
    }

    const openSubFilters = () => {
        isSubfilterOpen(!subFilterOpen)
    }
    return (
        <div className="flex  flex-col">
            <div onClick={openFilters} className="p-4 transition group  cursor-pointer w-max h-max rounded flex items-center gap-2">
                <p className="text-black text-sm group-hover:text-violet-500 transition ease-out duration-150s">Filtrar por</p>
                {open ? (
                    <i className="fa-solid fa-chevron-up text-violet-500" />
                ) : (
                    <i className="fa-solid fa-chevron-down text-black group-hover:text-violet-500 transition ease-out duration-150s" />
                )}
            </div>

            {open ? (
                <div className="bg-white shadow-md border rounded w-full h-max p-4 flex flex-col gap-4">
                    <div className="flex items-center gap-1 group cursor-pointer">
                        <div className="flex flex-col gap-2">
                            <div onClick={openSubFilters} className="flex items-center gap-1">
                                <div className="group-hover:text-violet-500 transition duration-150s ease-in">Categoria</div>
                                {subFilterOpen ? (
                                    <i className="fa-solid fa-chevron-up text-sm text-zinc-600 group-hover:text-violet-500 transition duration-150s ease-in" />
                                ) : (
                                    <i className="fa-solid fa-chevron-down text-sm text-zinc-600 group-hover:text-violet-500 transition duration-150s ease-in" />
                                )}
                            </div>
                            {subFilterOpen ? (
                                <div onClick={openSubFilters} className="flex flex-col gap-2">
                                    <div className="hover:text-violet-500 transition duration-150s ease-in">Tech</div>{' '}
                                    <div className="hover:text-violet-500 transition duration-150s ease-in">Línguas</div>
                                    <div className="hover:text-violet-500 transition duration-150s ease-in">Profissionalizantes</div>
                                </div>
                            ) : (
                                ''
                            )}
                        </div>
                    </div>

                    <div className="cursor-pointer hover:text-violet-500 transition duration-150s ease-in">Dificuldade</div>
                </div>
            ) : (
                ''
            )}
        </div>
    )
}
