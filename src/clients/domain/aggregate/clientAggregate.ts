export type TClientProps = {
    clientId: string
    clientName: string
    email: string
    registeredAt?: string
}

export class ClientAggregate{
    private props: TClientProps;
    private constructor(props: TClientProps,) {
        this.props = props
    }
    public get clientId(): string { return this.props.clientId }
    public get clientName(): string { return this.props.clientName }
    public get email(): string { return this.props.email }
    public get registeredAt(): string | undefined { return this.props.registeredAt }

    public set setClientId(newClientId: string) { this.props.clientId = newClientId }
    public set setClientName(newClientName: string) { this.props.clientName = newClientName }
    public set setEmail(newEmail: string) { this.props.email = newEmail }
    public set registeredAt(newRegisteredAt: string) { this.props.registeredAt = newRegisteredAt }

    private static generateId(): string {
        return `FHS-${Math.floor(Math.random() * 100000)}`
    }

    public static create(values: TClientProps){
        try{
            if (!values.clientId) {
                values.clientId = ClientAggregate.generateId()
            }
            return new ClientAggregate(values)
        }catch(error){
            throw new Error('Error at creating client (aggregate)')
    }
}

    public toJSON() {
        return {
            clientId: this.clientId,
            clientName: this.clientName,
            email: this.email,
            registeredAt: this.registeredAt
        }
    }
}
