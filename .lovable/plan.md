## Goal
Replace the current blue/purple/cyan neon theme with a retro dark palette derived from the reference image: deep navy base with red and peach accents.

## Palette mapping (from reference)
- `#161E2F` — deepest navy → `--background`
- `#242F49` — navy → `--card` / secondary surfaces
- `#384358` — slate blue → `--muted` / borders
- `#FFA586` — warm peach → `--cyan` slot (light accent / highlights)
- `#B51A2B` — vivid red → `--neon` slot (primary accent)
- `#541A2E` — deep wine → `--purple` slot (deep accent / glows)

## Changes — only `src/styles.css`
1. Rewrite `:root` color tokens in `oklch` to match the hex values above.
2. Update the `body` background radial gradients to use red / wine / peach instead of purple / blue / cyan, keeping the retro sunset feel from the reference.
3. Update `neon-glow` shadow and `pulse-glow` keyframe color stops to use the new red/wine accents.
4. Leave `neon-text` utility intact — it already references `--cyan`, `--neon`, `--purple` tokens, so updating the tokens automatically retunes every gradient text, progress bar, button, glow, and chip across Hero, Skills, Projects, Footer, ScrollProgress, etc.

## Not changed
- No component files touched — all components already consume the three accent tokens via CSS variables.
- Typography, layout, animations, and structure remain identical.

## Result
Whole site shifts to a dark navy + red retro aesthetic matching the reference palette, with peach highlights and wine-colored deep glows, while preserving the existing glassmorphism and motion design.
