import jwt from "jsonwebtoken"
import { TokenGenerator, TokenVerifier } from "src/application/shared/authentication/token-authentication";

export class JWTService implements TokenGenerator, TokenVerifier{
  generate(payload: object): string {
    return jwt.sign(payload, process.env.JWT_SECRET!)
  }

  verify(token: string): object {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    if (!decoded) {
      throw new Error("Invalid token");
    }
    return decoded as object;
  } 
  
}