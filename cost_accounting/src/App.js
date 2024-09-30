import CostList from "./components/Costs/CostList";
import NewCost from "./components/NewCost/NewCost";

function App() {
  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: "Fridge",
      amount: 999.99,
    },
    {
      date: new Date(2021, 5, 1),
      description: "Table",
      amount: 77.99,
    },
    {
      date: new Date(2021, 11, 7),
      description: "Chair",
      amount: 100.99,
    },
  ];

  return (
    <div className="App">
      <NewCost />
      <CostList costs={costs} />
    </div>
  );
}

export default App;
