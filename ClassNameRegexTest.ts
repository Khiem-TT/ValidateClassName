import {ClassNameRegex} from "./ClassNameRegex";

let classNameRegexTest = new ClassNameRegex();
let className: string[] = ['C0223G', 'M0318G', 'P0318L', 'P0323A'];

className.forEach(item => {
    let result: boolean = classNameRegexTest.validate(item);
    console.log(`${item}: ${result}`);
})