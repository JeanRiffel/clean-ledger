import { Request, Response, NextFunction} from "express"
import { TokenVerifier } from "src/application/shared/authentication/token-authentication"

export function authMiddleware(tokenVerifier: TokenVerifier) {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1]

    if (!token) return res.status(401).send()

    try {
      const payload = tokenVerifier.verify(token)
      //req.user = payload
      next()
    } catch {
      return res.status(401).send()
    }
  }
}
