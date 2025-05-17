import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";

export default function NavigationMenu() {
  return (
    <div className=" rounded-b-full flex bg-zinc-900 h-14 space-between items-center px-8 border-b-2">
      <Button href="/" size="lg" variant="ghost" className="bg-black border-b-1 border-t-1 rounded-full hover:cursor-pointer" asChild>
      <a href="/dashboard">WriteArena</a>
      </Button>
      <Button size="lg" variant="ghost" className=" rounded-full hover:cursor-pointer ml-4" asChild>
        <a href="/articles">Article Set</a>
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
  );
}
