export default class Restaurant {
    constructor(
        public name: string,
        public note: number,
        public image: string,
        public driveTime: string
    ) {
        this.name = name;
        this.note = note;
        this.image = image;
        this.driveTime = driveTime;
    }
}