import  OtpInput  from "./OtpInput";

export const OtpStep = ({
  phone,
  otp,
  setOtp,
  onVerify,
}: any) => {
  return (
    <>
      <h1 className="text-white text-3xl font-bold mb-4">Verify phone</h1>
      <p className="text-gray-400 text-sm mb-6">
        Enter the OTP sent to {phone}
      </p>

      <OtpInput otp={otp} setOtp={setOtp} />

      <button
        onClick={onVerify}
        className="w-full bg-white text-black font-semibold py-3 rounded mt-6"
      >
        Verify
      </button>
    </>
  );
};
