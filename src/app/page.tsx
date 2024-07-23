import Explore from "@/components/explore";
import Inbox from "@/components/inbox";
import { SignIn } from "@/components/sign-in";

export default function Home() {
  return (
    <div>
      <SignIn />
      <Explore />
      <Inbox />
    </div>
  );
}
