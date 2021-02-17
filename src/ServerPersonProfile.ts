import { ServerEntity } from "./ServerEntity";

export class ServerPersonProfile implements ServerEntity {
    public joinDate: Date;
    public avatarID: string;
    public firstName: string;
    public lastName: string;
    public posts: Array<Object>;

    constructor(firstNameIn: string, lastNameIn: string) {
        this.firstName = firstNameIn;
        this.lastName = lastNameIn;
        this.joinDate = new Date();
        this.avatarID = "Not here yet";
        this.posts = new Array<Object>();
    }

    /**
     * createPost
     */
    public createPost(): boolean {
        return true;
    }
}