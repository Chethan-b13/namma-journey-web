import { z } from "zod";

export const hostApplicationSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please provide a valid email address"),
  phone: z.string().min(10, "Please provide a valid phone number"),
  city: z.string().min(2, "City is required"),
  country: z.string().min(2, "Country is required"),
  hostType: z.enum(["hangout_host", "journey_host", "both"], {
    errorMap: () => ({ message: "Please select a valid host type" }),
  }),
  experience: z.string().min(10, "Please tell us about your experience"),
  interests: z.array(z.string()).optional(),
  instagramProfile: z
    .string()
    .min(10, "Please provide a valid URL")
    .url("Please provide a valid URL"),
});
