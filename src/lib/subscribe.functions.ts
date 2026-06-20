import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

// Mailchimp embedded form endpoint (publishable — same IDs ship in any Mailchimp embed code)
const MAILCHIMP_BASE = "https://gmail.us22.list-manage.com/subscribe/post-json";
const U = "2b6b599ff49439c3c3a6a5927";
const ID = "b33e3d79ce";
const F_ID = "0074c2e1f0";

const InputSchema = z.object({
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  firstName: z.string().trim().max(100).optional().default(""),
});

export const subscribeToList = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => InputSchema.parse(data))
  .handler(async ({ data }) => {
    const params = new URLSearchParams({
      u: U,
      id: ID,
      f_id: F_ID,
      EMAIL: data.email,
      FNAME: data.firstName ?? "",
      // Honeypot field — must remain empty
      [`b_${U}_${ID}`]: "",
    });

    const url = `${MAILCHIMP_BASE}?${params.toString()}&c=__jsonp`;

    try {
      const res = await fetch(url, { method: "GET" });
      const text = await res.text();
      // Mailchimp wraps the JSON in `__jsonp(...)`
      const match = text.match(/^[^(]*\((.*)\)\s*;?\s*$/s);
      const payload = match ? JSON.parse(match[1]) : JSON.parse(text);

      if (payload.result === "success") {
        return { ok: true as const, message: "You're in — check your inbox to confirm." };
      }

      // Strip any HTML tags Mailchimp returns in error messages
      const msg = String(payload.msg ?? "Something went wrong. Please try again.")
        .replace(/<[^>]*>/g, "")
        .trim();
      return { ok: false as const, message: msg };
    } catch (err) {
      console.error("[subscribeToList] failed:", err);
      return { ok: false as const, message: "Network error. Please try again." };
    }
  });
