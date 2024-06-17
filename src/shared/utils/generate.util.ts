export function generateIntegerId(): number {
    return Math.floor(Math.random() * 1000000)
}

export function generateStringId(): string {
  return Math.random().toString(36).substring(7);
}

export function generateId(): string {
  return `${generateStringId()}-${generateIntegerId()}`;
}
