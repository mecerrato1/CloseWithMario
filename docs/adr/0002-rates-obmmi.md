# 0002 – Use OBMMIC30YF for Conventional Rates
- **Date:** 2025-09-08
- **Decision:** Use OBMMI Conventional 30Y Fixed (OBMMIC30YF) via FRED for daily conventional rate, aligned with FHA/VA series feed.
- **Why:** Daily cadence, free via FRED, consistent with FHA/VA series; simpler ticker logic.
- **Impact:** `/api/rates` fetches OBMMIC30YF; FHA/VA series remain; RateTicker reads unified API response.
EOF