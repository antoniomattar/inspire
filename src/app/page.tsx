import Explore from "@/components/explore";
import Inbox from "@/components/inbox";
import { SignUp } from "@/components/sign-up";
import Home from "@/components/home";
import { SignIn } from "@/components/sign-in";

export default function Index() {
  return (
    <div>
      <SignUp />
      <SignIn />
      <Explore />
      <Inbox />
      <Home />
    </div>
  );
}
