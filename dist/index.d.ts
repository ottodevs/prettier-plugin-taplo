import { SupportLanguage, Parser, Printer } from 'prettier';

declare const languages: SupportLanguage[];
declare const parsers: {
    taplo: Parser<any>;
};
declare const printers: {
    "taplo-ast": Printer<any>;
};

export { languages, parsers, printers };
