import { inlineMarkdownParser, xdParser } from "../../lib/xdparser2"
import { readFileSync } from "fs"

it("handles bolding", () => {
  const xd = readFileSync("tests/xdparser2/inputs/alpha-bits.xd", "utf8")
  const originalClue = "A1. Captain of the Pequod ~ AHAB"
  const newMDClue = "A1. [b]Captain[/b] of the Pequod ~ AHAB"

  const json = xdParser(xd.replace(originalClue, newMDClue))
  const clue = json.clues.across[0]
  expect(clue).toMatchInlineSnapshot(`
{
  "answer": "AHAB",
  "body": "[b]Captain[/b] of the Pequod",
  "bodyMD": [
    [
      "bold",
      "Captain",
    ],
    [
      "text",
      " of the Pequod",
    ],
  ],
  "metadata": undefined,
  "number": 1,
  "position": {
    "col": 0,
    "index": 0,
  },
  "tiles": [
    {
      "letter": "A",
      "type": "letter",
    },
    {
      "letter": "H",
      "type": "letter",
    },
    {
      "letter": "A",
      "type": "letter",
    },
    {
      "letter": "B",
      "type": "letter",
    },
  ],
}
`)
})

it("handles links, bolds, italics, strikes, and dates", () => {
  const newMDClue = "A1. The date of 2024/11/12. [index]arr is good in C WHAT? (SIKE BOIIIIIIIIIIIII MAYBE MAYBE) [i]MEOW[/i][b]MOO[/b][b]HAHA[/b][s]WOOHOO[/s]https://github.com/cod1r.[url=https://google.com]google[/url] [url=https://puzzmo.com/bongo/submit?date=JASONHO]jason's puzzmo[/url][b]INBETWEEN[/b][url=https://google.com]hheh[/url] [s]HEHE[/s] [i]MEOWMEOW[/i] CHICKEN NOODLE SOUP"
  const parsed = inlineMarkdownParser(newMDClue)
  expect(parsed).toMatchInlineSnapshot(`
[
  [
    "text",
    "A1. The date of 2024/11/12. [index]arr is good in C WHAT? (SIKE BOIIIIIIIIIIIII MAYBE MAYBE) ",
  ],
  [
    "italics",
    "MEOW",
  ],
  [
    "bold",
    "MOO",
  ],
  [
    "bold",
    "HAHA",
  ],
  [
    "strike",
    "WOOHOO",
  ],
  [
    "text",
    "https://github.com/cod1r.",
  ],
  [
    "link",
    "https://google.com",
    "google",
  ],
  [
    "text",
    " ",
  ],
  [
    "link",
    "https://puzzmo.com/bongo/submit?date=JASONHO",
    "jason's puzzmo",
  ],
  [
    "bold",
    "INBETWEEN",
  ],
  [
    "link",
    "https://google.com",
    "hheh",
  ],
  [
    "text",
    " ",
  ],
  [
    "strike",
    "HEHE",
  ],
  [
    "text",
    " ",
  ],
  [
    "italics",
    "MEOWMEOW",
  ],
  [
    "text",
    " CHICKEN NOODLE SOUP",
  ],
]
`)
})
