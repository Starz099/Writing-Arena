import { Card, CardDescription, CardTitle } from "../../components/ui/card";
import Footer from "@/components/landing_page/Footer";
import NavigationMenu from "@/components/general/navigation-menu";
import ArticleSet from "@/components/general/article-set";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow overflow-auto">
        {/* Navigation menu */}
        <NavigationMenu />
        <div className="mx-5 mt-10 flex relative text-white gap-5">
          {/*daily topic card */}
          <div className="flex-3/4">
            <ArticleSet/>
          </div>

          {/* Right part */}
          <div className="flex-1/4 mt-2 flex flex-col gap-5">
            <Card className="text-white bg-zinc-900 border-2 px-10 border-amber-50 font-mono font-medium text-xl flex flex-row items-center">
              <span className=" underline">Rating</span>: 369
            </Card>

            <Card className="text-white bg-zinc-900 border-2 px-10 border-amber-50">
              <CardTitle className="font-mono font-medium text-xl underline">
                Leaderboard
              </CardTitle>
              <table>
                <tbody className="border-1">
                  <tr className="border-1">
                    <th>#</th>
                    <th>user</th>
                    <th>Rating</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>User099</td>
                    <td>369</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>User3690</td>
                    <td>249</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>User142</td>
                    <td>245</td>
                  </tr>
                </tbody>
              </table>
            </Card>

            <Card className="text-white bg-zinc-900 border-2 px-10 border-amber-50">
              <CardTitle className="font-mono font-medium text-xl underline">
                Recent Submissions
              </CardTitle>
              <ul>
                <li className="border-b-1"> Submission 109</li>
                <li className="border-b-1"> Submission 108</li>
                <li className="border-b-1"> Submission 107</li>
              </ul>
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
