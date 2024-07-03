export type TClientProps = {
    clientId: string
    clientName: string
    clientEmail: string
    registeredAt?: string
}

export class ClientAggregate{
    private props: TClientProps;
    private constructor(props: TClientProps,) {
        this.props = props
    }
    public get clientId(): string { return this.props.clientId }
    public get clientName(): string { return this.props.clientName }
    public get clientEmail(): string { return this.props.clientEmail }
    public get registeredAt(): string | undefined { return this.props.registeredAt }

    public set setClientId(newClientId: string) { this.props.clientId = newClientId }
    public set setClientName(newClientName: string) { this.props.clientName = newClientName }
    public set clientEmail(newClientEmail: string) { this.props.clientEmail = newClientEmail }
    public set registeredAt(newRegisteredAt: string) { this.props.registeredAt = newRegisteredAt }

    private static generateId(): string {
        return `FHS-${Math.floor(Math.random() * 100000)}`
    }

    public static create(values: TClientProps){
        if (!values.clientId) {
            values.clientId = ClientAggregate.generateId()
        }
        return new ClientAggregate(values)
    }

    public toJSON() {
        return {
            clientId: this.clientId,
            clientName: this.clientName,
            clientEmail: this.clientEmail,
            registeredAt: this.registeredAt
        }
    }
}
