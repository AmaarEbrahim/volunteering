import React from "react";

export class Form extends React.Component<{}, {}> {
    public render(): React.ReactNode {
        console.log("Hello")
        return <div>
            <p>hey</p>
            <form>
                <input type="text"></input>
            </form>
        </div>

    }
}