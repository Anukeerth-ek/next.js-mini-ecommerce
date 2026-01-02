const OtpInput = ({ otp, setOtp }: any) => {
  return (
    <div className="flex gap-3 justify-center mb-4">
      {[0, 1, 2, 3].map((i) => (
        <input
          key={i}
          maxLength={1}
          value={otp[i] ?? ""}
          onChange={(e) => {
            const next = otp.split("");
            next[i] = e.target.value;
            setOtp(next.join(""));
          }}
          className="w-12 h-12 bg-[#1a1a1a] text-white text-center rounded"
        />
      ))}
    </div>
  );
};

export default OtpInput;