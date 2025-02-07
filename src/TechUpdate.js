import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const mockData = [
  { id: 1, name: "iPhone 15", description: "Latest Apple smartphone with A16 chip." },
  { id: 2, name: "Samsung Galaxy Tab S9", description: "Powerful Android tablet with S Pen support." },
  { id: 3, name: "Dell XPS 15", description: "High-performance laptop with OLED display." },
];

const TechUpdates = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(mockData);

  useEffect(() => {
    // Simulating API call with a filter on mock data
    const fetchData = () => {
      if (!query) {
        setData(mockData);
      } else {
        const filteredData = mockData.filter(item =>
          item.name.toLowerCase().includes(query.toLowerCase())
        );
        setData(filteredData);
      }
    };
    fetchData();
  }, [query]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Tech Updates & Models</h1>
      <div className="flex gap-2 mb-4">
        <Input
          type="text"
          placeholder="Search for products, updates, or companies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button onClick={() => setQuery(query)}><Search className="h-5 w-5" /></Button>
      </div>
      <div className="grid gap-4">
        {data.length > 0 ? (
          data.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-500">{item.description}</p>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-gray-400">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default TechUpdates;
