import React from "react";
import { Container } from "./Container";

export class App extends React.Component {
    render() {
        return (
            <Container title={<h1>Container Class</h1>}>
                <p>A child of the Container Class pass as a children props which is automatically set by react</p>
            </Container>
        )
    }
};