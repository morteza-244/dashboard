import useSettings from "@/hooks/useSettings";
import SettingsForm from "./SettingsForm";
import SettingsFormSkeleton from "./SettingsFormSkeleton";

const Settings = () => {
  const { data: setting, isLoading } = useSettings();

  return (
    <div className="space-y-8">
      {isLoading ? (
        <SettingsFormSkeleton />
      ) : (
        <>
          <h2 className="text-3xl font-bold text-center">تنظیمات</h2>
          <SettingsForm setting={setting!} />
        </>
      )}
    </div>
  );
};

export default Settings;
