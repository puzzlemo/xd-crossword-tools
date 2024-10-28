declare module "saxen" {
  export class Parser {
    on(event: "openTag", cb: (elementName: string, attrGetter: () => any) => void): void
    on(event: "closeTag", cb: (elementName: string) => void): void
    on(event: "text", cb: (text: string) => void): void
    parse(xmlString: string): void
  }
}
