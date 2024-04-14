import LastDaySelector from "./LastDaySelector";

const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-3xl">خانه</h3>
        <LastDaySelector />
      </div>
    </div>
  );
};

export default Dashboard;
