export interface ServerEntity {

    joinDate: Date;
    avatarID: string;

    /**
     * createPost
     */
    createPost(): boolean;

}