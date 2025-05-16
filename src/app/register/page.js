import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import DividerWithText from "../../components/login_page/dividerwithtext";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Footer from "../../components/landing_page/Footer";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow overflow-auto">
      <Card className="w-[400px] mx-auto mt-40 bg-accent-foreground/20">
        <CardHeader>
          <CardTitle className="text-2xl text-white mx-auto">
            WritingArena
          </CardTitle>
          <CardDescription className="mx-auto">
            Already have an accout?
            <a href="/login" className="text-white hover:underline"> Login </a>
          </CardDescription>
        </CardHeader>
        <CardContent className="text-white">
          <Input className="my-4 h-10" placeholder="Email" />
          <Input className="mt-4 h-10" placeholder="Password" />
          <Button variant="ghost" className="mt-4 w-full bg-neutral-900 hover:cursor-pointer h-10">Sign Up</Button>
        </CardContent>
        <DividerWithText className="mt-0" text="OR" />
        <CardFooter className="text-white">
          <Button variant="ghost" className="w-full bg-neutral-900 hover:cursor-pointer h-10">
            Continue with Google
          </Button>
        </CardFooter>
      </Card>
      </div>
      <Footer className="bg-amber-100 bottom-0"></Footer>
    </div>
  );
}