export class ClubEvent {

    date:Date;
    location:string;
    hostName:string;
    signedUpEmails:string[];

    constructor(private eventId:number, date:Date, location:string, hostName:string) {
        this.date = date;
        this.location = location;
        this.hostName = hostName;
        this.signedUpEmails = [];
        //todo: attempt to load emails
    }

    getEventId():number {
        return this.eventId;
    }

    getDate():Date {
        return this.date;
    }

    setDate(date:Date):void {
        this.date = date;
    }

    getLocation():string {
        return this.location;
    }

    setLocation(location:string):void {
        this.location = location;
    }

    getHostName():string {
        return this.hostName;
    }

    setHostName(hostName:string):void {
        this.hostName = hostName;
    }

    getSignedUpEmails():string[] {
        return this.signedUpEmails;
    }
}