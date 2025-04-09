export class Course {
    name: String;
    professor: String;
    credits: Number;

    public constructor(name: String, professor: String, credits: Number) {
        this.name = name;
        this.professor = professor;
        this.credits = credits;
    }
}
