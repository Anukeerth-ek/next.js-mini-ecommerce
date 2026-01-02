export const PhoneStep = ({
  phone,
  setPhone,
  onContinue,
}: any) => {
  return (
    <>
      <h1 className="text-white text-4xl font-bold mb-12">Log In</h1>

      <label className="text-white text-sm mb-3 block">Phone</label>
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Enter Phone"
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
