import { emitCustomEvent } from 'react-custom-events'

export default function Filter() {
    const categories = ['tech', 'finanças']
    const dificulties = [1, 2, 3, 4, 5]

    const handleCategory = (e) => {
        if (e.target.value) {
            emitCustomEvent('select-filter', e.target.value)
        }
    }

    const handleDificulty = (e) => {
        if (e.target.value) {
            emitCustomEvent('select-filter', e.target.value)
        }
    }

    return (
        <div className="flex transition group  cursor-pointer  h-max rounded gap-4 items-center">
            <p className="text-lg font-normal">Filtros:</p>
            <select className="w-max border-none " onChange={handleCategory}>
                <option value="category">Categoria</option>
                {categories &&
                    categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
            </select>
            <select className="w-max border-none" onChange={handleDificulty}>
                <option value="dificulty">Dificuldade</option>
                {dificulties &&
                    dificulties.map((dificulty) => (
                        <option key={dificulty} value={dificulty}>
                            {dificulty}
                        </option>
                    ))}
            </select>
        </div>
    )
}
