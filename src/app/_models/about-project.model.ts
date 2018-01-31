export default class AboutProject {
    // title: string;
    // subtitle: string;
    // description: string;

    // constructor (
    //     title,
    //     subtitle,
    //     description
    // ) {
    //     this.title = title;
    //     this.subtitle = subtitle;
    //     this.description = description;
    // } 1a manera

    constructor(
        public title: string = '',
        public subtitle: string = '',
        public description: string = ''
    ) {}
    // manera mes maca i curta, inicialitzem els atributs per si volem crear un nou objecte sense paràmetres
}
