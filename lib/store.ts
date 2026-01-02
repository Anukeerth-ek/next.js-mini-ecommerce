type User = {
    otp?: string;
    phone?: number;
  name?: string;
};

export const users = new Map<string, User>();
