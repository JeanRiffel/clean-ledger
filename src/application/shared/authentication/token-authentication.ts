export interface TokenGenerator {
  generate(payload: object): string
}

export interface TokenVerifier {
  verify(token: string): object
}