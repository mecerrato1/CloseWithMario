# 0003 – Embed Legacy Listings via /legacy with Env Var
- **Date:** 2025-09-08
- **Decision:** Embed external listings at `/legacy` using `NEXT_PUBLIC_LEGACY_URL` (default: https://mariocerrato.listingspy.com/).
- **Why:** Centralize URL; easy to change per environment; keep site header visible.
- **Caveat:** If external site sets X-Frame-Options/CSP to block embedding, switch header link to open in a new tab.