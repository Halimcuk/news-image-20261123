# Methodology — news-image-20261123

## How the six stories were chosen

1. **Start from the day's own front pages.** On the morning of Monday
   23 November 2026 (WIB), the stories leading BBC News, Reuters, AP, CNN
   and CBS were collected. A story qualified only if it was reported or
   confirmed for the 23 November news cycle — the competition rules count
   events that happened, or were first reported, on 23 November 2026 in
   any time zone.
2. **Rank by consequence, then take the top six.** The COP31 collapse, the
   US House majority, a ministerial resignation, a court-defying military
   detonation, a deadly factory fire and a Mercury orbit insertion were the
   most consequential items of the day. Smaller items from the same cycle
   (sport results, celebrity news, the Benghazi ship blast) were left out.
3. **Breadth across regions and fields.** The six cover climate (global),
   US politics, South Korean politics, US environment/law, an Indonesian
   disaster, and European–Japanese space science — four continents and six
   different beats, not one country's or one beat's news.
4. **No reuse of earlier days' stories.** The cartel capture in Mexico
   (20 November) and the GTA VI launch sales (19–20 November) were
   prominent in the previous days' cycles and were deliberately excluded,
   even though they still appeared in round-ups.

## How each story was verified

- Every story was checked against **at least two independent outlets**
  (e.g. BBC + CNN + Reuters for COP31; Reuters + Korea JoongAng Daily +
  TBS for the Korean minister; CBS + BBC + AP for the House result).
  The outlets and links are recorded story by story in `SOURCES.md`.
- **Fast-moving numbers were treated as guilty until confirmed.**
  The House figure (258 seats, largest since 1992) is agreed by CBS, BBC,
  AP and PBS, so it is on the poster. The Indonesia missing-persons count
  is not: sources said 36, about 50 and 37, and body-bag counts (7 vs 24)
  do not map to deaths because police warned one bag may hold remains of
  several people. The poster therefore says only "dozens missing" and
  "deadly blaze", and all sources agree at least three people were killed.
  The Iowa tonnage is given only as "tonnes" (the BBC's wording); the
  "68 barrels / nearly five tons" figures are in `SOURCES.md`, not on the
  poster.
- **Attribution is kept, speculation is not.** The Benghazi ship explosion
  was left out partly because responsibility was only "suspected" and
  attributed to unnamed sources; the six chosen stories are all reported
  as confirmed facts by their outlets.

## How the image was made

The poster was drawn programmatically from vector fonts (DejaVu Sans) with
a fixed layout — header with the date, six cards (tag, headline, one-line
summary), and a sources footer. No image-generation model was used, so no
text could come out garbled; the finished PNG was read back and every word
checked legible before submission. `main.ts` only copies the finished
`entry.png` to the output directory, so the program is deterministic by
construction: two runs produce byte-identical output (verified, same
sha256 both runs).
