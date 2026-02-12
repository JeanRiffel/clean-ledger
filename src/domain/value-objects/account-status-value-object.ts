export class AccountStatus {
  constructor(private id: number) {}

  getId(): number {
    return this.id;
  }

  toJSON() {
    return {
      id: this.id,
      description: this.getDescription(),
    };
  }

  getDescription(): string {
    const statusMap: Record<number, string> = {
      1: 'OPEN',
      2: 'CLOSED',
      3: 'PENDING',
    };
    return statusMap[this.id] || 'UNKNOWN';
  }
}
