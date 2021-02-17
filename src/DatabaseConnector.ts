export interface DatabaseConnector {
    connect(): boolean;
    disconnect(): boolean;
}