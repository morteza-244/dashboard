import { Button } from "@/components/ui/button";
import { CircleAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-2">
      <div className="flex items-center gap-1">
        <h1>صفحه مورد نظر یافت نشد</h1>
        <CircleAlert className="text-red-600" />
      </div>
      <Button onClick={() => navigate("/")}>بازگشت به خانه</Button>
    </div>
  );
};

export default PageNotFound;
