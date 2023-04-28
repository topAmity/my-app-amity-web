import "./styles.css";
import  { React, useState } from "react";

import {
  AmityUiKitProvider,
  AmityUiKitSocial,
  AmityUiKitChat,
} from "@amityco/ui-kit";
import Login from "./Login";


const apiKey = "b3babb0b3a89f4341d31dc1a01091edcd70f8de7b23d697f";
export default function App() {

  const [userId, setUserId] = useState();


  return (
    <div className="App">
      {!userId ? (
        <Login onSubmit={setUserId} />
      ) : (
        <AmityUiKitProvider
          key={userId}
          apiKey={apiKey}
          apiRegion={'sg'}
          apiEndpoint="https://api.sg.amity.co"
          userId={userId}
          displayName={userId}
        >

          <AmityUiKitChat />
        </AmityUiKitProvider>
      )}
    </div>
  );
}
