import SocialLinks from './social-links.model';

export default class Author {
    constructor(
        public name: string = '',
        public lastname: string = '',
        public bio: string = '',
        public social: SocialLinks[] = []
    ) {}
}
