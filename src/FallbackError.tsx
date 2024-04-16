import { Button } from "@/components/ui/button";

interface FallbackErrorProps {
  resetErrorBoundary: () => void;
}

const FallbackError = ({ resetErrorBoundary }: FallbackErrorProps) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl">مشکلی پیش آمده است🧐</h1>
        <Button onClick={resetErrorBoundary} className="mt-3">دوباره امتحان کنید</Button>
    </div>
  );
};

export default FallbackError;
