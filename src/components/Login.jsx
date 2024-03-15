import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs.jsx";

export default function Login() {
  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen absolute z-10">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Login</TabsTrigger>
            <TabsTrigger value="password">Signin</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardContent className="space-y-2 ">
                <div className="space-y-1 flex justify-center items-center my-6">
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Login as" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="apple">Customer</SelectItem>
                        <SelectItem value="banana">Farmer</SelectItem>
                        <SelectItem value="blueberry">Authority</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Enter your email here" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    placeholder="Enter your password here"
                    type="password"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Login</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardContent className="space-y-2">
                <div className="space-y-1 flex justify-center items-center my-6">
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Signin as" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="apple">Customer</SelectItem>
                        <SelectItem value="banana">Farmer</SelectItem>
                        <SelectItem value="blueberry">Authority</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="current">Pending</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">Pending</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Signin</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <img
        src="/images/Bg.jpg"
        className="w-screen h-screen blur-sm relative z-0"
        alt=""
      ></img>
    </>
  );
}
