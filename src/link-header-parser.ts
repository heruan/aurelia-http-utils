export class LinkHeaderParser {

    public parse(headers: string[]): Map<string, string> {
        let result: Map<string, string> = new Map<string, string>();

        let relsRegExp: RegExp = /\brel="?([^"]+)"?\s*;?/i;
        let keysRegExp: RegExp = /(\b[0-9a-z\.-]+\b)/gi;
        let sourceRegExp: RegExp = /^<(.*)>/;

        for (let i = 0; i < headers.length; i++) {
            let entry = headers[i].trim();
            let rels = relsRegExp.exec(entry);
            if (rels) {
                let keys = rels[1].match(keysRegExp);
                let source = sourceRegExp.exec(entry)[1];
                let kLength = keys.length;
                for (let k = 0; k < kLength; k += 1) {
                    result.set(keys[k], source);
                }
            }
        }

        return result;
    }

}
