import { Frown, TriangleAlert } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

const EmptyResource = ({ resourceName }: { resourceName: string }) => {
  return (
    <Alert variant="destructive" className="w-full sm:w-72">
      <div className="flex gap-3">
        <TriangleAlert />
        <AlertTitle className="text-xl">خطا</AlertTitle>
      </div>
      <div className="flex gap-1">
        <AlertDescription className="text-lg">
          {resourceName} یافت نشد
        </AlertDescription>
        <Frown />
      </div>
    </Alert>
  );
};

export default EmptyResource;
