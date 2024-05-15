import { sharedAnimationCards } from "@/components/auth/animation-cards";
import SocialLogin from "@/components/auth/social-login";
import Logo from "@/components/icons/logo";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/ui/card";
import { cn } from "@/utils";

const AuthLoginPage = () => {
  return (
    <Card className={cn("w-full max-w-sm px-10", sharedAnimationCards)}>
      <CardHeader className="flex items-center justify-center text-center">
        <Logo className="mb-2 size-10" />
        <CardTitle className="text-2xl font-medium duration-500 animate-in fade-in-20">
          Log in to SlashTrim
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 duration-500 animate-in fade-in-30">
        <SocialLogin />
      </CardContent>
    </Card>
  );
};

export default AuthLoginPage;
