import api from "@/config/axios";

export interface HostApplicationPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  hostType: "hangout_host" | "journey_host" | "both";
  experience: string;
  interests?: string[];
  instagramProfile?: string;
}

export interface HostApplicationResponse {
  success: boolean;
  message: string;
  applicationId: string;
}

export const submitHostApplication = async (
  payload: HostApplicationPayload
): Promise<HostApplicationResponse> => {
  const { data } = await api.post("/host-application", payload);
  return data;
};
