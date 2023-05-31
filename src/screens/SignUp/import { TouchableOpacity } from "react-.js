import { TouchableOpacity } from "react-native"
import { text } from "stream/consumers";

class Button extends Component {
    state = {
        backgroundColor: "red"
    }

    onClick = () => {

        let backgroundColor = "red"
        if (this.state.backgroundColor === "red") {
            backgroundColor = "green"
        }

        this.setState({ backgroundColor })
    }

    render() {
        return (
            <TouchableOpacity
                onClick={this.onClick}
                style={{ backgroundColor: this.state.backgroundColor, width: 30 }}>
                <Text>Login</Text>
            </TouchableOpacity>
        )
    }
}


// import ...
<Button onClick={() => { }} text="login" />