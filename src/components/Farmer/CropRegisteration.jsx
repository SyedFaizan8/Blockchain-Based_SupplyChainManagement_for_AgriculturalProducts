import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CropRegisteration = () => {
  return (
    <>
      <img
        src="/images/Bg.jpg"
        className="w-screen h-screen blur-lg opacity-60 fixed z-0"
        alt=""
      ></img>
      <div className=" z-10 relative overflow-hidden">
        <div className="flex justify-center py-5  px-12 items-center w-screen">
          <Card className="w-full">
            <CardHeader className="flex justify-center items-center text-xl">
              <CardTitle>Crop Registeration</CardTitle>
              {/* <CardDescription>
                Deploy your new project in one-click.
              </CardDescription> */}
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="cropname">Crop Name</Label>
                    <Input id="cropname" placeholder="Enter crop name" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="area">Plot/Land Address</Label>
                    <Input id="area" placeholder="Enter Address" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="cultivation">
                      Specify the area of cultivation in acres
                    </Label>
                    <Input
                      id="cultivation"
                      placeholder="Enter no of acres of cultivation area"
                    />
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="timeforharvest">
                      Time required till harvest
                    </Label>
                    <Input id="timeforharvest" placeholder="Enter here" />
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="yieldperacre">
                      Expected yield per Acre
                    </Label>
                    <Input id="yieldperacre" placeholder="Enter here" />
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="info">Aditional info</Label>
                    <Input id="info" placeholder="Additional info" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex">
              <Button>Submit</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CropRegisteration;
