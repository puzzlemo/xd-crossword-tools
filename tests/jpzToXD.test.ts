import { readFile, readFileSync } from "fs"
import { jpzToXD } from "../lib/jpzToXD"

const jpz = readFileSync("./tests/jpz/lil-167-ratliff-121823.jpz", "utf8")
describe(jpzToXD.name, () => {
  it("should parse a simple jpz file", () => {
    const res = jpzToXD(jpz)
    expect(res).toMatchInlineSnapshot(`
"## Metadata

title: Not set
author: Darby Ratliff
editor: Not set
date: 2023-11-10
width: 11
height: 11

## Grid


IHOP.STAIN.
NOTI.NUDGES
CORNCOBDOWN
ADOBO...TSO
...AIM.BYOB
.HALFDREAM.
WALL.SUB...
ALE...DRAFT
WARPCLEANER
ALTERS.VETO
..SPUD.EWAN

## Clues



"
`)
  })
})
