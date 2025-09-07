// lib/leadSchema.ts
import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  loan_purpose: z.enum(["purchase", "refi", "preapproval"]),
  price: z.preprocess((v) => (v === "" || v == null ? undefined : Number(v)), z.number().positive().optional()),
  down_payment: z.preprocess((v) => (v === "" || v == null ? undefined : Number(v)), z.number().nonnegative().optional()),
  credit_score: z.enum(["720+", "680-719", "640-679", "<640"]).optional(),
  message: z.string().max(1000).optional(),
  page_path: z.string().optional(),
  source: z.string().optional(),
  user_id: z.string().uuid().optional(),
  honeypot: z.string().optional(), // spam trap (must be empty)
});
export type LeadInput = z.infer<typeof leadSchema>;
