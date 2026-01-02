// app/login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { NameStep } from "../components/auth/NameStep";
import AuthLayout from "../components/auth/AuthLayout";
import { PhoneStep } from "../components/auth/PhoneStep";
import { OtpStep } from "../components/auth/OtpStep";


export default function LoginPage() {
  const router = useRouter();

  const [step, setStep] = useState<"phone" | "otp" | "name">("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");

  const sendOtp = async () => {
    await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ phone }),
    });
    setStep("otp");
  };

const verifyOtp = async () => {
  console.log("FRONTEND VERIFY", phone, otp);

  const res = await fetch("/api/auth/verify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      phone,
      otp,
    }),
  });

  if (!res.ok) {
    console.error("VERIFY FAILED");
    return;
  }

  const data = await res.json();
  console.log("VERIFY SUCCESS", data);
};

  const submitName = async () => {
    await fetch("/api/auth/verify", {
      method: "POST",
      body: JSON.stringify({ phone, otp, name }),
    });

    router.push("/profile");
  };

  return (
    <AuthLayout>
      {step === "phone" && (
        <PhoneStep phone={phone} setPhone={setPhone} onContinue={sendOtp} />
      )}

      {step === "otp" && (
        <OtpStep
          phone={phone}
          otp={otp}
          setOtp={setOtp}
          onVerify={verifyOtp}
        />
      )}

      {step === "name" && (
        <NameStep name={name} setName={setName} onContinue={submitName} />
      )}
    </AuthLayout>
  );
}
