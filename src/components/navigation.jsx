import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Postacie from "./postacie/Postacie";
import Home from "./Home";
import Symbolika from "./symbolika/Symbolika";
import Wydarzenia from "./wydarzenia/Wydarzenia";

function Navigation() {
	return (
		<>
			{
				<Router>
					<Routes>
						<Route exact path="/" 
                        element={<Home />} />

						<Route path="/postacie" 
                        element={<Postacie />} />

                        <Route path="/wydarzenia" 
                        element={<Wydarzenia />}  />
                        <Route path="/symbolika" 
                        element={<Symbolika />} />
                        <Route path="*"
                        element={<Navigate to="/" />} />

					</Routes>
				</Router>
			}
		</>
	);
}
export default Navigation;