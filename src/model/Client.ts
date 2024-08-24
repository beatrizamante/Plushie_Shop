export default class Client {
    private name: string = " ";
    private id: number = 0;
    private address: string = " "
    private phoneNumber: number = 0;
    static lastId: number = 0;

    constructor(name: string, id: number, address: string, phoneNumber: number) {
        this.name = name;
        this.address = address;
        this.phoneNumber = phoneNumber; 
        this.id = Client.idIteration(); 
    }

    public getName() : string {
        return this.name;
    }

    public setName(name: string) : void {
        this.name = name;
    }

    public getAddress() : string {
        return this.address;
    }

    public setAddress(address: string) : void {
        this.address = address;
    }

    public getPhoneNumber() : number {
        return this.phoneNumber;
    }

    public setPhoneNumber(phoneNumber: number) : void {
        if (!Number.isInteger(phoneNumber) || phoneNumber <= 0) {
            throw new Error("Invalid phone number.");
        }
        this.phoneNumber = phoneNumber;
    }

    public static idIteration(): number {
        Client.lastId += 1;
        return Client.lastId;
    }


}