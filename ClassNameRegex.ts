export class ClassNameRegex {
    classNameRegex: RegExp = /^[ACP]+[0-9]{4}[GHIKLM]$/;

    validate(regex: string): boolean {
        return this.classNameRegex.test(regex);
    }
}