export default function () {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-violet-500 p-6 w-full m-0 flex items-center gap-20  px-44">
        <input
          className="flex-1 rounded-full p-3 bg-violet-100 border shadow-sm  focus:outline-none focus:border-violet-500 focus:ring-violet-500"
          type="text"
          name="search"
          placeholder="pesquisar por curso"
        />
        <div className="flex items-center gap-4">
          <div className="hover:bg-violet-600 transition ease-out duration-150s cursor-pointer p-4 w-max h-max rounded">
            <p className="text-white">Cursos</p>
          </div>
          <div className="hover:bg-violet-600 transition ease-out duration-150s cursor-pointer p-4 w-max h-max rounded">
            <p className="text-white">Seus cursos</p>
          </div>

          <div className="bg-violet-900 rounded-full p-6"></div>
        </div>
      </div>
    </div>
  );
}
