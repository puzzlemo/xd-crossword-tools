import { existsSync, readFileSync } from "fs"
import { puzToXD } from ".."

it("handles greyd backgrounds", () => {
  const path = "./tests/gitignored/has-bgs.puz"
  if (!existsSync(path)) return
  const puz = readFileSync(path)
  const xd = puzToXD(puz)
  expect(xd).toMatchInlineSnapshot(`
"## Metadata

title: June 8, 2022 - \\"Rhythm Parts\\" - Ben Tausig, edited by Francis Heaney
author: Ben Tausig
copyright: N/A
description: N/A

## Grid


ODIUM.ITME.CALM
RINGO.ROAM.RIEL
BONGJOONHO.ARTS
..ABOMB..JUNKS.
TORO.GOBLINKING
ENDOR.TIM.TYSON
TESTER.OAHU.STU
...SPITTOONS...
TBA.OBEY.GENOME
ALBUM.SPA.SAUDI
GUITARHERO.PTSD
.ELENA..CLOCK..
BRER.CLOSESHAVE
RENU.KIWI.LASER
ODES.SEEN.OTTER


## Clues

A1. Strong aversion ~ ODIUM
A6. \\"I feel [71-Across]\\" ~ ITME
A10. Like the sea in gentle weather ~ CALM
A14. \\"Octopus's Garden\\" writer/singer/drummer Starr ~ RINGO
A15. Spend a lot on phone data, in a way ~ ROAM
A16. Currency one might spend on vintage Ros Sereysothea records ~ RIEL
A17. Best Director Oscar winner of 2020 ~ BONGJOONHO
A19. NEA part ~ ARTS
A20. The Gap Band's \\"You Dropped ___ on Me\\" ~ ABOMB
A21. Tosses out ~ JUNKS
A23. Tuna belly used in sushi ~ TORO
A25. Regal title for David Bowie's \\"Labyrinth\\" character ~ GOBLINKING
A29. Moon subjected to violent Imperial governance ~ ENDOR
A31. Former U.S. men's national team goalie Howard ~ TIM
A32. June of '70s free jazz ~ TYSON
A33. Expert who worked this puzzle before you ~ TESTER
A35. Birthplace of Lili'uokalani, last ruler of the Hawaiian Kingdom ~ OAHU
A37. Name that's an alphabetic trio ~ STU
A38. Wine tasting receptacles ~ SPITTOONS
A41. [We haven't actually organized this part of the schedule yet] ~ TBA
A44. Get in line behind ~ OBEY
A45. Biology concept to which Rosalind Franklin's research led ~ GENOME
A49. Swift release? ~ ALBUM
A51. Spring-fed resort ~ SPA
A53. Arab News reader, perhaps ~ SAUDI
A54. Rock Band competitor ~ GUITARHERO
A57. Certain mental health condition, for short ~ PTSD
A58. Justice who clerked for Thurgood ~ ELENA
A59. Device that requires two hands to operate? ~ CLOCK
A61. Title for a rabbit in Black American folklore ~ BRER
A62. Squeaker ~ CLOSESHAVE
A67. Big name in eye care ~ RENU
A68. Flightless bird with a Maori name ~ KIWI
A69. Hair removal device ~ LASER
A70. Gushing poems ~ ODES
A71. Acknowledged, so to speak ~ SEEN
A72. Bear's relative? ~ OTTER

D1. Heavenly ball ~ ORB
D2. Italian god ... or a metal god ~ DIO
D3. They're absolutely offal ~ INNARDS
D4. Trendy 2000s footwear ~ UGGBOOTS
D5. Magical power, in Black American folklore ~ MOJO
D6. Asimov short story collection later adapted into a single movie ~ IROBOT
D7. Approximate weight of 5MB of data in the mid-1950s ~ TON
D8. ___-jongg (betting game with tiles) ~ MAH
D9. Skull in a text, say ~ EMOJI
D10. Irritable ~ CRANKY
D11. One might be blown by a celebrity ~ AIRKISS
D12. \\"Or maybe we do something else ...\\" ~ LETSNOT
D13. Org. for the New York Red Bulls ~ MLS
D18. \\"Wuuuut ...\\" ~ OMG
D22. Makes flat, say, as a string ~ UNTUNES
D23. Vietnamese holiday that includes rituals of ancestral worship ~ TET
D24. What a team might play as ~ ONE
D26. Group of organisms with common characteristics ~ BIOTYPE
D27. \\"That's absurd,\\" briefly ~ LMAO
D28. Antelope with a Khoikhoi name ~ GNU
D30. 1984 Emilio Estevez cult film ~ REPOMAN
D34. Food for which a vegan version can be made with jackfruit ~ RIB
D36. One of 30-50 feral animals in a memed tweet ~ HOG
D39. \\"ET\\" anchor John who (allegedly) once dated Oprah ~ TESH
D40. Platform mimicked by Instagram Stories ~ SNAPCHAT
D41. Decorate, in the manner of Neck Face ~ TAG
D42. Purplish ~ BLUERED
D43. Eisenhower Presidential Library city (Kansas, not Texas) ~ ABILENE
D46. Hip-hop duo who played at the Freaknik festival ~ OUTKAST
D47. Some abortion providers ~ MDS
D48. \\"___ Mubarak\\" ~ EID
D50. We've all been there ~ UTERUS
D52. Inverse trig function ~ ARCSIN
D55. Spice holders ~ RACKS
D56. Cheer for Marta or Kaka ~ OLE
D60. European capital surrounded by forest ~ OSLO
D61. Basic dude ~ BRO
D63. Be totally down? ~ LIE
D64. Get behind financially ~ OWE
D65. Vatican head? ~ VEE
D66. Err by putting a crossword answer in the clue, say ~ ERR

## Notes

## Design

<style>O { background: circle }</style>

.....#....#....
.....#....#....
OOOO.....O#....
##.....##.....#
....#OO......OO
.....#...#.....
......#....#...
###OO...OOOO###
...#....#......
.....#...#.....
OOO.....OO#....
#.....##.....##
....#OO.....OOO
....#....#.....
....#....#.....
"
`)
  // expect(xd).toMatchFile(`./tests/output/${file}.xd`)
})
