import _ from "lodash";
import "./App.css";
import React, { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
const ToolKitInfo = React.lazy(() => import("./components/ToolKitInfo"));
import { ErrorFallback } from "./components/ErrorFallback";

const App = ({ name }) => {
    const [showToolkitInfo, setShowToolkitInfo] = useState(false);

    const buttonClickHandler = () => {
        setShowToolkitInfo(!showToolkitInfo);
    };

    return (
        <div className="App">
            <button onClick={buttonClickHandler}>
                Click to {showToolkitInfo ? "Hide" : "Show" } Toolkit Info
            </button>

            {showToolkitInfo && (
                <ErrorBoundary
                    FallbackComponent={ErrorFallback}
                    onReset={() => {
                        console.log("an error occurred!")
                    }}>
                        <Suspense fallback={<div>Loading...</div>}>{
                            <div className="toolkit-info">
                                {<ToolKitInfo />}
                            </div>}
                        </Suspense>
                </ErrorBoundary>
            )}
            <h1>{_.join(["Welcome,", name], " ")}</h1>
        </div>
    );
};

export { App };