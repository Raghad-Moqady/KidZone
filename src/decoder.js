import { jwtDecode } from "jwt-decode";

export default function decoder(token) {
  const decoded = jwtDecode(token);

  return decoded;
}
