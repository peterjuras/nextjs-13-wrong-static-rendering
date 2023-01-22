import { cookies } from "next/headers";

export default function TestPage() {
  const value = cookies().get("someCookie")?.value;
  return <div>{value}</div>;
}
