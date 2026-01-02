export const NameStep = ({ name, setName, onContinue }: any) => {
  return (
    <>
      <h1 className="text-white text-3xl font-bold mb-6">
        Welcome, You are?
      </h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Eg. John Mathew"
        className="w-full bg-[#1a1a1a] text-white px-4 py-3 rounded mb-6"
      />

      <button
        onClick={onContinue}
        className="w-full bg-white text-black font-semibold py-3 rounded"
      >
        Continue
      </button>
    </>
  );
};
