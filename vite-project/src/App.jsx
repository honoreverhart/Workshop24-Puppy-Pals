import "./App.css";
import { useState } from "react";
import { puppyList } from "./data.js";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  console.log(puppies);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);
  return (
    <div className="container">
      <div className="App">
        {puppies.map((puppy) => {
          return (
            <p
              onClick={() => {
                setFeatPupId(puppy.id);
              }}
              key={puppy.id}
            >
              {puppy.name}
            </p>
          );
        })}
      </div>
      <div>
        <p>
          {featPupId && (
            <div className="singlePuppy">
              <h2>{featuredPup.name}</h2>
              <ul>
                <li>Age: {featuredPup.age}</li>
                <li>Email: {featuredPup.email}</li>
              </ul>
            </div>
          )}
        </p>
      </div>
      <div>
        {/* NOT MY CODE!! I was just playing around with adding a puppy :) */}
        <div class="bg">
          <div id="dog">
            <div class="head">
              <div class="mask mask-head">
                <div class="nose"></div>
                <div class="eye"></div>
              </div>
              <div class="ear"></div>
            </div>

            <div class="body">
              <div class="shirt"></div>
              <div class="mask-body">
                <div class="leg"></div>
              </div>
              <div class="foot"></div>
            </div>
            <div class="back-body">
              <div class="mask-back-body"></div>
            </div>
            <div class="mask-tail"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
