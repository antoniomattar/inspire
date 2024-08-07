import Explore from "@/components/explore";
import Inbox from "@/components/inbox";
import { SignIn } from "@/components/sign-in";
import Home from "@/components/home";

export default function Index() {
  return (
    <div>
      <SignIn />
      <Explore />
      <Inbox />
      <Home />
    </div>
  );
}
