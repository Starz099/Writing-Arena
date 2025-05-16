import { Button } from "../../components/ui/button";
import { Card, CardDescription, CardTitle } from "../../components/ui/card";
import { Avatar, AvatarImage } from "../../components/ui/avatar";
import Footer from "@/components/landing_page/Footer";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow overflow-auto">
        <div className=" rounded-b-full flex bg-zinc-900 h-14 space-between items-center px-8 border-b-2">
          <Button
            size="lg"
            variant="ghost"
            className="bg-black border-b-1 rounded-full hover:cursor-pointer"
          >
            WriteArena
          </Button>
          <div className="flex items-center text-white rounded-full ml-auto gap-4">
            <Avatar className=" bg-amber-700 hover:cursor-pointer border-2">
              <AvatarImage src="https://cdn-icons-png.flaticon.com/128/2529/2529521.png" />
            </Avatar>
            <Avatar className="hover:cursor-pointer border-2">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
          </div>
        </div>
        <div className="mx-5 mt-10 flex relative text-white gap-5">

          <div className="flex-3/4">
            <div className=" absolute -top-4 left-4 bg-black border-2 border-amber-50 text-4xl text-amber-50 font-mono font-bold px-5 py-1 rounded-2xl">
              Topic of the day
            </div>
            <Card className="mt-2 w-280 text-white bg-zinc-900 border-2 px-10 border-amber-50">
              <p className="text-3xl pt-2">If I could time travel...</p>
              <div className="flex-grow border-t border-gray-300"></div>
              <CardDescription className="text-2xl text-zinc-300">
                description text and links for the research purposes.
              </CardDescription>
              <Button variant="ghost" size="lg" className="font-mono font-bold text-2xl border-1 w-80 ml-auto">
                Start Writing
              </Button>
            </Card>
          </div>

          <div className="flex-1/4 mt-2 flex flex-col ">
            <Card className="text-white bg-zinc-900 border-2 px-10 border-amber-50">
              <CardTitle className="font-mono font-medium text-xl underline">Leaderboard</CardTitle>
            </Card>
          </div>
        </div>
      </div>
      <div>
        <Footer className="bg-amber-100 bottom-0"></Footer>
      </div>
    </div>
  );
}