import { Parser } from "saxen"
import { CrosswordJSON } from "./types"
import { JSONToXD } from "./JSONtoXD"

//

/** Takes a jpz string and converts it to an xd file */
export function jpzToXD(xmlString: string) {
  const parser = new Parser()
  let xd = ""

  const blankJSON: Omit<CrosswordJSON, "report"> = {
    meta: {
      title: "Not set",
      author: "Not set",
      editor: "Not set",
      date: "Not set",
    },
    tiles: [],
    clues: { across: [], down: [] },
    notes: "",
    rebuses: {},
  }

  let lastTag = "xml"
  let inClueParsing = false
  let clueDirection = null as null | "across" | "down"

  parser.on("openTag", function (elementName, attrGetter) {
    console.log("openTag", elementName)
    lastTag = elementName

    const attrs = attrGetter()
    console.log("attrs", attrs)

    if (elementName === "grid") {
      blankJSON.meta.width = attrs.width
      blankJSON.meta.height = attrs.height
    }

    if (elementName === "cell") {
      const isBlock = attrs.type === "block"
      const isCell = !attrs.type

      const { x, y, solution } = attrs
      if (!blankJSON.tiles[y]) blankJSON.tiles[y] = []
      if (isBlock) {
        blankJSON.tiles[y][x] = {
          type: "blank",
        }
      } else if (isCell) {
        blankJSON.tiles[y][x] = {
          type: "letter",
          letter: solution,
        }
      }
    }

    if (elementName === "clues") {
      inClueParsing = true
    }

    if (elementName === "clue" && clueDirection) {
      const { number } = attrs
      const clue = {
        number,
        clue: "",
        answer: "",
      }
      //   blankJSON.clues[clueDirection].push({
      //     number,
      //     tiles: [],
      //     body:
      //   })
    }
  })

  parser.on("text", function (text) {
    if (lastTag === "creator") blankJSON.meta.author = text
    if (lastTag === "title" && !inClueParsing) blankJSON.meta.title = text
    if (lastTag === "description") blankJSON.notes = text
    if (lastTag === "created_at") blankJSON.meta.date = text

    // This might need strengthening
    if (lastTag === "title" && inClueParsing) clueDirection = text.toLowerCase() as "across" | "down"
  })

  parser.on("closeTag", function (elementName) {
    console.log("closeTag", elementName)
    xd += elementName
  })

  parser.parse(xmlString)

  return JSONToXD({ ...blankJSON, report: { success: true, errors: [], warnings: [] } })
}
