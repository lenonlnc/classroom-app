export default function () {
  return (
    <div className="h-screen flex items-center flex-col justify-center">
      <div className="flex flex-col items-center">
        <div>
          <input
            type="text"
            name="email"
            placeholder="email@email.com"
            className="p-2 bg-violet-100 border shadow-sm rounded border-slate-300 focus:outline-none focus:border-violet-500 focus:ring-violet-500"></input>
        </div>

        <div>
          <input
            type="text"
            placeholder="**********"
            className="p-2 bg-violet-100 border shadow-sm rounded border-slate-300 focus:outline-none focus:border-violet-500 focus:ring-violet-500"></input>
        </div>
      </div>
      <div>button</div>
    </div>
  );
}
