export default class Alert {
    constructor(
        public title: string = '',
        public message: string = '',
        public type: AlertType = AlertType.Info
    ) {}
}

// podriem crear una carpeta per a enums a part de models

enum AlertType {
    Info,
    Error
}
