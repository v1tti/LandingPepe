import "./gachaRecords.css";

export function GachaRecords({ records }) {
  const sortedRecords = [...records].sort(
    (a, b) => new Date(b.pullTime) - new Date(a.pullTime)
  );

  return (
    <div className="flex flex-col overflow-y-auto flex-grow no-scrollbar h-full">
      <div className="grid grid-cols-4 gap-2 font-bold mb-2 fixed bg-lime-200 w-full">
        <span className="text-center">Tipo</span>
        <span className="text-center">Nome</span>
        <span className="text-center">Evento</span>
        <span className="text-center">Data de Obtenção</span>
      </div>

      <div className="grid grid-cols-4 gap-2 pt-6">
        {sortedRecords.map(({ name, rarity, type, eventName, pullTime }) => (
          <>
            <span className="text-center">{type}</span>
            <span className={`${rarity} text-center`}>{name}</span>
            <span className="text-center">{eventName}</span>
            <span className="text-center">{pullTime}</span>
          </>
        ))}
      </div>
    </div>
  );
}
